import stream from "mithril/stream";
import { clientRoutes, handleErrorType } from "./client";

const basePath = "/dates";

function sanitiseForValueChange(date) {
  return typeof date() === "object" && typeof date().h_date === "string"
    ? date().h_date.split(" ")[0]
    : new Date().toDateInputValue();
}
const todaysDate = new Date().toDateInputValue();

const DateStore = Object.assign(clientRoutes(basePath), {
  current: stream(todaysDate),

  get: (id) =>
    DateStore.show_one(id)
      .then((response) => JSON.parse(response.data))
      .then(DateStore.current)
      .catch(handleErrorType),

  clear: () => {
    DateStore.current = stream(todaysDate);
  },

  list: stream([]),
  listForHabit: stream([]),

  index: () =>
    DateStore.show_all()
      .then((response) => JSON.parse(response.data).dates)
      .then(DateStore.list)
      .then((list) => {
        return DateStore.current(list[list.length - 1]);
      })
      .catch(handleErrorType),

  filterForHabit: (habit) =>
    habit
      ? DateStore.list().filter((date) => date.h_date >= habit.initiation_date)
      : [],

  indexDatesOfHabit: (habit) => {
    if (typeof habit == undefined) listForHabit([]);
    DateStore.listForHabit(DateStore.filterForHabit(habit)) &&
      DateStore.current(
        DateStore.listForHabit()[DateStore.listForHabit().length - 1]
      );
  },

  filterById: (dateId) =>
    DateStore.list().filter((date) => date.id === +dateId),

  submit: (attrs) =>
    DateStore.create(attrs)
      .then((response) => {
        return response.data;
      })
      .then(DateStore.current)
      .then(() => {
        window.FlashMessage.success("Dates were added to the database!");
      })
      .catch(handleErrorType),
});

DateStore.currentDate = stream.combine(sanitiseForValueChange, [
  DateStore.current,
]);
export default DateStore;
