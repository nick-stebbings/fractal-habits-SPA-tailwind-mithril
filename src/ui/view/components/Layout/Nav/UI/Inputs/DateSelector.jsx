import DateTime from 'luxon/src/datetime.js';
import DateStore from '../../../../../../store/date-store';
import HabitStore from '../../../../../../store/habit-store';
import { resetContextStates, updatedMinAndMaxForCurrentHabit, changedDate, changeOfModelContext, newDate } from '../../../../../../assets/scripts/controller';

const sanitiseForDataList = function (date) {
  return typeof date === 'object' && typeof date.h_date === 'string'
    ? date.h_date.split(' ')[0]
    : new Date().toDateInputValue();
};

const DateSelector = function () {
  let dateIndex;
  let maxDate;
  let minDate;
  let currentHabitDate;
  return {
    oninit: () => {
      DateStore.indexDatesOfHabit(HabitStore.current());
      dateIndex = DateStore.listForHabit().indexOf(DateStore.current());
    },
    oncreate: () => {
      const todaysDate = DateTime.now().startOf("day");
      currentHabitDate =
        DateStore.current() && DateTime.fromSQL(DateStore.current().h_date);
      [minDate, maxDate] = updatedMinAndMaxForCurrentHabit();

      if (newDate()) {
        DateStore.submit({ h_date: maxDate.plus({ days: 1 }).toISODate() }).then(DateStore.index).then(
          () => {
            DateStore.indexDatesOfHabit(DateStore.current()?.id)
            maxDate = DateTime.fromMillis(
              DateTime.fromSQL(DateStore.current().h_date).ts
            );
            newDate(false);
console.log(changeOfModelContext(), 'change od model context after new date insertion');
            m.redraw();
          }
        )
      }
      const dateInputs = document.querySelectorAll("#date-today");
      const prevDateSelector = document.getElementById("prev-date-selector");
      const nextDateSelector = document.getElementById("next-date-selector");
      [...dateInputs].forEach((input) => {
        input.addEventListener("change", (e) => {
          e.stopPropagation();
          dateIndex = DateStore.listForHabit()
            .map(sanitiseForDataList)
            .indexOf(e.target.value);
          let newDate = DateStore.listForHabit()[dateIndex];
          DateStore.current(newDate);
          changedDate(true);
        });
      });
      prevDateSelector.addEventListener("click", () => {
        if (!HabitStore.current()) return;
        if (currentHabitDate?.toLocaleString() !== minDate?.toLocaleString()) {
          dateIndex--;
          let newDate =
            DateStore.listForHabit()[dateIndex] || DateStore.current();
          DateStore.current(newDate);
        }
        changedDate(true);
        m.redraw();
      });
      nextDateSelector.addEventListener("click", () => {
        if (!HabitStore.current()) return;
        if (currentHabitDate.toLocaleString() !== maxDate.toLocaleString()) {
          dateIndex++;
          let newDate =
            DateStore.listForHabit()[dateIndex] || DateStore.current();
          DateStore.current(newDate);
        }
        changedDate(true);
        m.redraw();
      });
    },
    view: () => (
      <fieldset className="w-1/3">
        <input
          id="date-today"
          tabIndex="3"
          required
          className="sm:h-10 xl:text-xl md:px-4 md:py-1 w-full h-6 px-2 pb-2 mt-1"
          type="date"
          value={DateStore.currentDate()}
          max={String(DateStore.currentDate())}
          list="current-habit-date-list"
        />
        <datalist id="current-habit-date-list">
          {HabitStore.current() &&
            DateStore.listForHabit().map((dateElement) =>
              m("option", {
                value: sanitiseForDataList(dateElement),
                name: `date-option-date-id-${dateElement.id}`,
              })
            )}
        </datalist>
      </fieldset>
    ),
  };
};

export default DateSelector;
