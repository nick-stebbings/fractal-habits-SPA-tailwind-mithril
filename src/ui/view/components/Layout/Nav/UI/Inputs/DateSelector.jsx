import DateStore from "../../../../../../store/date-store";
import HabitStore from "../../../../../../store/habit-store";

const sanitiseForDataList = function (date) {
  return typeof date === "object" && typeof date.h_date === "string"
    ? date.h_date.split(" ")[0]
    : new Date().toDateInputValue();
};
const dateIncrementDateObject = (increment, d) => {
  return d.setDate(d.getDate() + increment);
};

const DateSelector = function () {
  return {
    oninit: () => {},
    oncreate: () => {
      DateStore.indexDatesOfHabit(HabitStore.current());
      const nextDate = document.getElementById("next-date-selector");
      const prevDate = document.getElementById("prev-date-selector");
      let dateIndex = DateStore.listForHabit().indexOf(DateStore.current());
      prevDate.addEventListener("click", () => {
        if (
          dateIncrementDateObject(-1, new Date(DateStore.current().h_date)) >=
          new Date(HabitStore.current().initiation_date)
        ) {
          dateIndex--;
          DateStore.current(DateStore.listForHabit()[dateIndex]);
        }
        m.redraw();
      });
      nextDate.addEventListener("click", () => {
        if (
          new Date(
            dateIncrementDateObject(1, new Date(DateStore.current().h_date))
          ) <= new Date(new Date().toDateString())
        ) {
          dateIndex++;
          DateStore.current(DateStore.listForHabit()[dateIndex]);
        }
        m.redraw();
      });
    },
    view: () => (
      <fieldset>
        <input
          id="date-today"
          class="form-input w-full text-xl lg:pt-2 -mr-8 px-2"
          type="date"
          value={DateStore.currentDate()}
          list="current-habit-date-list"
        />
        <datalist id="current-habit-date-list">
          {HabitStore.current() &&
            DateStore.listForHabit().map((date_element) =>
              m("option", {
                value: sanitiseForDataList(date_element),
                name: "date-option-date-id-" + date_element.id,
              })
            )}
        </datalist>
      </fieldset>
    ),
  };
};

export default DateSelector;
