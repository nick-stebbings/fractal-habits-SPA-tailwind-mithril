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
  console.log('preloaded habit data')
  if (!m.route.param("demo")) {
    return DomainStore.index().then(
      HabitDateStore.index()
      .then(NodeStore.index)
      .then(() => {
        HabitStore.sortByDate();
        HabitStore.current() &&
        HabitDateStore.runFilter(HabitStore.current()?.id);
        DateStore.current() &&
        HabitDateStore.runDateFilterOnCurrentList(DateStore.current()?.id);
      })
    )
  } else {
    HabitStore.current() && HabitDateStore.runFilter(HabitStore.current()?.id);
    // DateStore.current() &&
    //   HabitDateStore.runDateFilterOnCurrentList(DateStore.current()?.id);
  }
};

function changeOfModelContext() {
  // Reset when you switch data sources
  changedFromDemo(!m.route.param("demo") && HabitStore.current()?.name !== 'Select a Life-Domain to start tracking' && DomainStore.current()?.name === 'Sports');
  changedToDemo(
    m.route.param("demo") &&
    HabitDateStore.list().length === 28 &&
    HabitDateStore.list()[0].date_id !== 1
  );
    // Reset the current date when you switch to a habit with no record of that date
    outOfDateBoundary(
      HabitStore.current() && changedDate() &&
      DateTime.fromSQL(HabitStore.current()?.initiation_date) >
      DateTime.fromSQL(DateStore.current()?.h_date)
      );
      
      const todaysDate = DateTime.now().startOf("day");
      const maxDate = DateTime.fromMillis(Math.max.apply(null, parsedDates()));
      
      if (DateStore.listForHabit() && (maxDate < todaysDate)) {
        newDate(true);
      };
      // // // Sanity check logs::
      // console.log('newRecord() :>> ', newRecord());
      // console.log("changedFromDemo() :>> ", changedFromDemo());
      // console.log("changedToDemo() :>> ", changedToDemo());
      // console.log("changedDomain() :>> ", changedDomain());
      // console.log("newDate() :>> ", newDate());
      // console.log("outOfDateBoundary() :>> ", outOfDateBoundary());
      // console.log(' HabitDateStore.list() :>> ',  HabitDateStore.list());
      return (newRecord() || changedFromDemo() || changedToDemo() || outOfDateBoundary() || changedDomain());
    };

function updateDomainSelectors() {
  document.querySelectorAll(".domain-selector").forEach((selector) => {
    let current = DomainStore.current();
    let newIndex = DomainStore.list().indexOf(current);
    selector.selectedIndex = newIndex;
    m.redraw();
  });

  Array.from(document.querySelectorAll(".domain-selector option"))
    .filter((opt) => opt.text === DomainStore.current()?.name)
    .forEach((opt) => {
      opt.setAttribute("selected", "true");
    });
};

const resetContextStates = () => {
  newRecord(false) ;
  changedFromDemo(false) ;
  changedToDemo(false);
  changedDomain(false);
  newDate(false);
  if (outOfDateBoundary()) {
    let newListForHabit = DateStore.filterForHabit(HabitStore.current());
    DateStore.current(newListForHabit[newListForHabit.length - 1]);
    outOfDateBoundary(false);
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
  updatedMinAndMaxForCurrentHabit,
  preLoadHabitDateData,
};
