import stream from 'mithril/stream';
import DateTime from 'luxon/src/datetime.js';
import { clientRoutes, handleErrorType } from './client';

const basePath = '/dates';

function sanitiseForValueChange(date) {
  return typeof date() === 'object' && typeof date().h_date === 'string'
    ? date().h_date.split(' ')[0]
    : new Date().toDateInputValue();
}
const todaysDate = new Date().toDateInputValue();

const DateStore = Object.assign(clientRoutes(basePath), {
  current: stream([{id: 1}]),

  get: (id) => DateStore.show_one(id)
    .then((response) => JSON.parse(response.data))
    .then(DateStore.current)
    .catch(handleErrorType),

  clear: () => {
    DateStore.current = stream(todaysDate);
  },

  list: stream([]),
  listForHabit: stream([]),

  index: () => DateStore.show_all()
    .then((response) => JSON.parse(response.data).dates)
    .then(DateStore.list)
    .then((list) => (list.length == 0 ? DateStore.clear() : DateStore.current(list[list.length - 1])))
    .catch(handleErrorType),

  to_h_date: (sqlDate) => DateTime.fromSQL(sqlDate.h_date),

  dateFromDateObjectArray: (dateId, array) => {
    return array.length > 0 && DateStore.to_h_date(array.filter((dateObject) => dateObject.id === dateId)[0])
  },

  filterForHabit: (habit) => (habit
    ? DateStore.list().filter((date) => DateStore.to_h_date(date) >= DateTime.fromSQL(habit.initiation_date)).sort((a, b) => a - b)
    : []),

  indexDatesOfHabit: (habit) => {
    if (typeof habit === undefined) listForHabit([{ id: 1 }]);
    return DateStore.listForHabit(
      DateStore.filterForHabit(habit)?.sort((a, b) => (DateStore.to_h_date(a) - DateStore.to_h_date(b)))
    );
  },

  filterById: (dateId) => DateStore.list().filter((date) => date.id === +dateId),

  submit: (attrs) => DateStore.create(attrs)
    .then((response) => response.data)
    .then(DateStore.current)
    .then(() => {
      console.log('Dates were added to the database!');
    })
    .catch(handleErrorType),
});

DateStore.currentDate = stream.combine(sanitiseForValueChange, [
  DateStore.current,
]);

export default DateStore;
