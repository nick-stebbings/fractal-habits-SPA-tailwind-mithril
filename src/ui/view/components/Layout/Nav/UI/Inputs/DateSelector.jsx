import DateTime from 'luxon/src/datetime.js';
import DateStore from '../../../../../../store/date-store';
import HabitStore from '../../../../../../store/habit-store';
import { resetContextStates, updatedMinAndMaxForCurrentHabit, changedDate } from '../../../../../../assets/scripts/controller';

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
      const todaysDate = DateTime.now().startOf('day');
      currentHabitDate = DateStore.current() && DateTime.fromSQL(DateStore.current().h_date);

      [minDate, maxDate] = updatedMinAndMaxForCurrentHabit();
      if (DateStore.current() && maxDate < todaysDate) {
        DateStore.submit({ h_date: maxDate.plus({ days: 1 }).toISODate() });
        maxDate = DateTime.fromMillis(
          DateTime.fromSQL(DateStore.current().h_date).ts,
        );
        resetContextStates();
      }
      const prevDateSelector = document.getElementById('prev-date-selector');
      const nextDateSelector = document.getElementById('next-date-selector');
      prevDateSelector.addEventListener('click', () => {
        if (!HabitStore.current()) return;
        if (currentHabitDate.toLocaleString() !== minDate.toLocaleString()) {
          dateIndex--;
          DateStore.current(DateStore.listForHabit()[dateIndex]);
        }
        changedDate(true);
        m.redraw();
      });
      nextDateSelector.addEventListener('click', () => {
        if (!HabitStore.current()) return;
        if (currentHabitDate.toLocaleString() !== maxDate.toLocaleString()) {
          dateIndex++;
          DateStore.current(DateStore.listForHabit()[dateIndex]);
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
          className="form-input lg:pt-4 w-full px-4 -mr-4 text-xl"
          type="date"
          value={
            DateStore.currentDate()
          }
          max={String(DateStore.currentDate())}
          list="current-habit-date-list"
        />
        <datalist id="current-habit-date-list">
          {HabitStore.current()
            && DateStore.listForHabit().map((dateElement) => m('option', {
              value: sanitiseForDataList(dateElement),
              name: `date-option-date-id-${dateElement.id}`,
            }))}
        </datalist>
      </fieldset>
    ),
  };
};

export default DateSelector;
