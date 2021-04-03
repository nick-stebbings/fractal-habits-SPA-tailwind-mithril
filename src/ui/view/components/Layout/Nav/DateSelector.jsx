import stream from "mithril/stream";

import DateStore from "../../../../store/date-store";
import HabitStore from "../../../../store/habit-store";

function sanitiseForDataList(date) {
  return typeof date === "object" && typeof date.h_date === "string"
    ? date.h_date.split(" ")[0]
    : new Date().toDateInputValue();
}

const DateSelector = function () {
  const availableDatesForCurrentHabit = stream();

  return {
    onupdate: () => {
      // document.getElementById("date-today").value = DateStore.currentDate();
    },
    oncreate: () => {
      const nextDate = document.getElementById("next-date-selector");
      const prevDate = document.getElementById("prev-date-selector");

      prevDate.addEventListener("click", () => {
        DateStore.indexDatesOfHabit(HabitStore.current());
        console.log(DateStore.list());
        console.log(HabitStore.current());
        console.log(DateStore.listForHabit());
        // adjustDateOptions("backwards");
      });
      nextDate.addEventListener("click", () => {
        // adjustDateOptions("forwards");
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
