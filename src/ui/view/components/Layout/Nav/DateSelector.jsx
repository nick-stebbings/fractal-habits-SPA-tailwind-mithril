import stream from "mithril/stream";

import DateStore from "../../../../store/date-store";
import HabitStore from "../../../../store/habit-store";

function sanitiseForDataList(date) {
  return typeof date === "object" && typeof date.h_date === "string"
    ? date.h_date.split(" ")[0]
    : new Date().toDateInputValue();
}

const DateSelector = function () {
  let maxDate;
  let currentDateIndex;
  const availableDatesForCurrentHabit = stream();
  const availableDatesForSelector = stream();
  const selectedDateOption = stream();
  currentDateIndex = stream.combine(
    (date) => {
      console.log(date(), "date");
      console.log(availableDatesForSelector().indexOf(date()), "CDi");
    },
    [selectedDateOption]
  );

  return {
    onupdate: () => {
      document.getElementById("date-today").value = DateStore.currentDate();
      const dateDataList = document.getElementById("current-habit-date-list");

      dateDataList &&
        dateDataList.options.length > 0 &&
        [...dateDataList.options].slice(-1)[0].setAttribute("selected", "true");

      availableDatesForCurrentHabit(
        DateStore.filterForHabit(HabitStore.current())
      );
    },
    oncreate: () => {
      dateDataList &&
        dateDataList.options.length > 0 &&
        availableDatesForSelector(Array.from(dateDataList.options).reverse());
      const nextDate = document.getElementById("next-date-selector");
      const prevDate = document.getElementById("prev-date-selector");
      const dateDataList = document.getElementById("current-habit-date-list");

      function adjustDateOptions(direction) {
        let index = currentDateIndex();

        selectedDateOption(availableDatesForSelector().slice(index)[0]);
        selectedDateOption().setAttribute("selected", "");
        direction === "forwards" ? ++index : --index;

        console.log(selectedDateOption(), " selectedDateOption()");
        selectedDateOption(availableDatesForSelector().slice(index)[0]);
        selectedDateOption().setAttribute("selected", "true");
        console.log(selectedDateOption());
        let currentDateId = selectedDateOption()
          .getAttribute("name")
          .split("-")
          .slice(-1)[0];
        let currentDate = selectedDateOption().getAttribute("value");
        DateStore.current(DateStore.filterById(currentDateId)[0]);
        document.getElementById("date-today").value = currentDate;

        m.redraw();
      }

      prevDate.addEventListener("click", () => {
        // if (currentDateIndex > -availableDatesForSelector().length) {
        // If we are not on the first available date
        adjustDateOptions("backwards");
        // }
      });
      nextDate.addEventListener("click", () => {
        if (currentDateIndex < -1) {
          // If we are not on the last available date
          adjustDateOptions("forwards");
        }
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
            availableDatesForCurrentHabit(
              DateStore.filterForHabit(HabitStore.current())
            ).map((date_element) =>
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
