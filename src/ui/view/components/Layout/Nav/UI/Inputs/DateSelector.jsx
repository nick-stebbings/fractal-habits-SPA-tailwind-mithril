import DateStore from "../../../../../../store/date-store";
import HabitStore from "../../../../../../store/habit-store";
import HabitDateStore from "../../../../../../store/habit-date-store";
import { DateTime } from "luxon";

const sanitiseForDataList = function (date) {
  return typeof date === "object" && typeof date.h_date === "string"
    ? date.h_date.split(" ")[0]
    : new Date().toDateInputValue();
};

const dateIncrementDateObject = (increment, d) => {
  return d.setDate(d.getDate() + increment);
};

const timeStampToday = () => {
  return new Date(new Date().toDateString()).toString();
};

const DateSelector = function () {
  let dateIndex;
  let parsedDates;
  let maxDate;
  let minDate;
  let currentDate;
  return {
    oninit: () => {
      DateStore.indexDatesOfHabit(HabitStore.current());
      let a = DateStore.listForHabit();
      let b = DateStore.current()
      dateIndex = DateStore.listForHabit().indexOf(DateStore.current());
      console.log(DateStore.listForHabit());
      console.log(DateStore.list());
      
      console.log(dateIndex, 'starting index');
    },
    oncreate: () => {
      let todaysDate = DateTime.now().startOf("day");
      currentDate = DateTime.fromSQL(DateStore.current().h_date);
      parsedDates = DateStore.listForHabit().map(
        (d) => DateTime.fromSQL(d.h_date).ts
      );
      minDate = DateTime.fromMillis(
        Math.min.apply(null, parsedDates)
      );
      maxDate = DateTime.fromMillis(
        Math.max.apply(null, parsedDates)
      );
      if (DateStore.current() && (maxDate < todaysDate)) {
        DateStore.submit({ h_date: maxDate.plus({days: 1}).toISODate() });
      }

      const nextDate = document.getElementById("next-date-selector");
      const prevDate = document.getElementById("prev-date-selector");
      
      prevDate.addEventListener("click", () => {
        if(!HabitStore.current()) return;
        const initDate = DateTime.fromSQL(HabitStore.current().initiation_date);
        if (currentDate.toLocaleString() !== minDate.toLocaleString()) {
          dateIndex--;
          DateStore.current(DateStore.listForHabit()[dateIndex]);
          let newCurrent = DateStore.listForHabit()[dateIndex];
        }
        m.redraw();
      });

      nextDate.addEventListener("click", () => {
        if (!HabitStore.current()) return;
        const todaysDate = DateTime.now();
        
        if ( currentDate.toLocaleString() !== maxDate.toLocaleString()) {
          dateIndex++;
          DateStore.current(DateStore.listForHabit()[dateIndex]);
          
          let newCurrent = DateStore.listForHabit()[dateIndex];
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
