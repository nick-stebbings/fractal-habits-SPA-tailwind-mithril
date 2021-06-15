import stream from "mithril/stream";
import DateTime from "luxon/src/datetime.js";
import DomainStore from "../../store/domain-store";
import HabitStore from "../../store/habit-store";
import HabitDateStore from "../../store/habit-date-store";
import DateStore from "../../store/date-store";
import NodeStore from "../../store/habit-node-store";

const changedFromDemo = stream();
const changedToDemo = stream();
const outOfDateBoundary = stream();
const changedDate = stream();
const newDate = stream();
const changedDomain = stream();
const newRecord = stream();
const parsedDates = () => DateStore.listForHabit().map(
  (d) => DateTime.fromSQL(d?.h_date).ts
);

function preLoadHabitDateData() {
  if (!m.route.param("demo")) {
    if (
      HabitDateStore.fullList().length == 0 ||
      NodeStore.list().length == 0 ||
      m.route.param("currentHabit")
    ) {
      if (
        HabitStore.current()?.name !== "Select a Life-Domain to start tracking"
      )
        return;
      HabitDateStore.index()
        .then(NodeStore.index)
        .then(() => {
          HabitStore.sortByDate();
          HabitStore.current() &&
            HabitDateStore.runFilter(HabitStore.current()?.id);
          DateStore.current() &&
            HabitDateStore.runDateFilterOnCurrentList(DateStore.current()?.id);
        })
        .then(m.redraw);
    }
  } else {
    HabitStore.current() && HabitDateStore.runFilter(HabitStore.current()?.id);
    DateStore.current() &&
      HabitDateStore.runDateFilterOnCurrentList(DateStore.current()?.id);
  }
};

function changeOfModelContext() {
  // Reset the current date when you switch to a habit with no record of that date
  outOfDateBoundary(
    HabitStore.current() &&
      DateTime.fromSQL(HabitStore.current()?.initiation_date) >
        DateTime.fromSQL(DateStore.current()?.h_date)
  );

  const todaysDate = DateTime.now().startOf("day");
  const maxDate = DateTime.fromMillis(Math.max.apply(null, parsedDates()));

  if (DateStore.listForHabit() && maxDate < todaysDate) {
    newDate(true);
  };

  return (newRecord() || changedFromDemo() || changedToDemo() || outOfDateBoundary() || changedDomain() || newDate());
};

function updateDomainSelectors() {
  document.querySelectorAll(".domain-selector").forEach((selector) => {
    let current = DomainStore.current();
    let newIndex = DomainStore.list().indexOf(current);
    selector.selectedIndex = newIndex;
  });

  Array.from(document.querySelectorAll(".domain-selector option"))
    .filter((opt) => opt.text === DomainStore.current()?.name)
    .forEach((opt) => {
      opt.setAttribute("selected", "true");
    });
};

const resetContextStates = () => {
  if (changedFromDemo()) {
    changedToDemo(false);
    changedFromDemo(false);
  };
  if (outOfDateBoundary()) {
    let newListForHabit = DateStore.filterForHabit(HabitStore.current());
    DateStore.current(newListForHabit[newListForHabit.length - 1]);
    outOfDateBoundary(false);
  }
  if (newRecord()) {
    newRecord(false);
  }
  if (changedDomain() || changedDate()) {
    changedDomain(false);
    changedDate(false);
  }
};

function updatedMinAndMaxForCurrentHabit () {
  const minDate = DateTime.fromMillis(Math.min.apply(null, parsedDates()));
  const maxDate = DateTime.fromMillis(Math.max.apply(null, parsedDates()));
  return [minDate, maxDate];
};

export {
  newRecord,
  changedFromDemo,
  changedDate,
  newDate,
  changedDomain,
  outOfDateBoundary,
  changeOfModelContext,
  updateDomainSelectors,
  resetContextStates,
  updatedMinAndMaxForCurrentHabit
};
