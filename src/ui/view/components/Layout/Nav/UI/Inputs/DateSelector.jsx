import DateTime from 'luxon/src/datetime.js';
import DateStore from '../../../../../../store/date-store';
import HabitStore from '../../../../../../store/habit-store';

const sanitiseForDataList = function (date) {
  return typeof date === 'object' && typeof date.h_date === 'string'
    ? date.h_date.split(' ')[0]
    : new Date().toDateInputValue();
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
      dateIndex = DateStore.listForHabit().indexOf(DateStore.current());
    },
    oncreate: () => {
      const todaysDate = DateTime.now().startOf('day');
      currentDate = DateTime.fromSQL(DateStore.current().h_date);
      parsedDates = DateStore.listForHabit().map(
        (d) => DateTime.fromSQL(d.h_date).ts,
      );
      minDate = DateTime.fromMillis(Math.min.apply(null, parsedDates));
      maxDate = DateTime.fromMillis(Math.max.apply(null, parsedDates));
      if (DateStore.current() && maxDate < todaysDate) {
        DateStore.submit({ h_date: maxDate.plus({ days: 1 }).toISODate() });
        maxDate = DateTime.fromMillis(
          DateTime.fromSQL(DateStore.current().h_date),
        );
        debugger;
      }

      const nextDate = document.getElementById('next-date-selector');
      const prevDate = document.getElementById('prev-date-selector');

      prevDate.addEventListener('click', () => {
        if (!HabitStore.current()) return;
        if (currentDate.toLocaleString() !== minDate.toLocaleString()) {
          dateIndex--;
          DateStore.current(DateStore.listForHabit()[dateIndex]);
        }
        m.redraw();
      });

      nextDate.addEventListener('click', () => {
        if (!HabitStore.current()) return;
        if (currentDate.toLocaleString() !== maxDate.toLocaleString()) {
          dateIndex++;
          DateStore.current(DateStore.listForHabit()[dateIndex]);
        }
        m.redraw();
      });
    },
    view: () => (
      <fieldset className="w-1/3">
        <input
          id="date-today"
          tabIndex="3"
          required
          className="form-input w-full text-xl lg:pt-4 -mr-4 px-4"
          type="date"
          value={DateStore.currentDate()}
          max={String(DateStore.currentDate())}
          list="current-habit-date-list"
        />
        <datalist id="current-habit-date-list">
          {HabitStore.current()
            && DateStore.listForHabit().map((date_element) => m('option', {
              value: sanitiseForDataList(date_element),
              name: `date-option-date-id-${date_element.id}`,
            }))}
        </datalist>
      </fieldset>
    ),
  };
};

export default DateSelector;
