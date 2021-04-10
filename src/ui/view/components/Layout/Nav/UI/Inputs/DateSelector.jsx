import DateStore from "../../../../../../store/date-store";
import HabitStore from "../../../../../../store/habit-store";
import HabitDateStore from "../../../../../../store/habit-date-store";

const sanitiseForDataList = function (date) {
  return typeof date === "object" && typeof date.h_date === "string"
    ? date.h_date.split(" ")[0]
    : new Date().toDateInputValue();
};

const dateIncrementDateObject = (increment, d) => {
  console.log('d.setDate(d.getDate() + increment) :>> ', d.setDate(d.getDate() + increment));
  return d.setDate(d.getDate() + increment);
};

const timeStampToday = () => {
  return new Date(new Date().toDateString()).toString();
};

const DateSelector = function () {
  return {
    oninit: () => {

    },
    oncreate: () => {
      DateStore.indexDatesOfHabit(HabitStore.current());
      let dateIndex = DateStore.listForHabit().indexOf(DateStore.current());
      const nextDate = document.getElementById("next-date-selector");
      const prevDate = document.getElementById("prev-date-selector");

      prevDate.addEventListener("click", () => {
        if(!HabitStore.current()) return;
        const firstDate = new Date(HabitStore.current().initiation_date);
        const yestDate = new Date(
          dateIncrementDateObject(-1, new Date(DateStore.current().h_date))
        ).toString();
        const beforeFirstDate = new Date(
          dateIncrementDateObject(-1, firstDate)
        ).toString();

        if (
          yestDate.split(" ").slice(0, 4).join`` !==
          beforeFirstDate.split(" ").slice(0, 4).join``
        ) {
          dateIndex--;
          DateStore.current(DateStore.listForHabit()[dateIndex]);
        }
        m.redraw();
      });

      nextDate.addEventListener("click", () => {
        if (!HabitStore.current()) return;
        const todaysDate = timeStampToday();
        if(!DateStore.list().reverse().some((date) => {
          let justDate = (new Date(date.h_date)).toString().split(' ').slice(0,4).join``;
          console.log(justDate === todaysDate.split(" ").slice(0, 4).join``);
          return justDate === todaysDate.split(" ").slice(0, 4).join``;
        })) return;

        const possibleNextDate = new Date(
          dateIncrementDateObject(2, new Date(DateStore.current().h_date))
        ).toString();

          debugger;
        // console.log(todaysDate.toString().split(" "));
        // console.log(possibleNextDate.split(" "));
        if (
          possibleNextDate.split(" ").slice(0, 4).join`` !==
          todaysDate.split(" ").slice(0, 4).join``
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
          class="form-input w-full text-xl lg:pt-4 -mr-8 px-2"
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
