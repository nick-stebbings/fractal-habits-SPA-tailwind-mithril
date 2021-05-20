import stream from "mithril/stream";
import DateTime from "luxon/src/datetime.js";

import DomainSelector from "./components/Layout/Nav/UI/Inputs/DomainSelector.jsx";
import DateSelector from "./components/Layout/Nav/UI/Inputs/DateSelector.jsx";
import LogoLink from "./components/Layout/Nav/UI/Buttons/LogoLink.jsx";
import Modal from "./components/Layout/Modal.jsx";
import MaskHeader from "./components/Layout/Nav/MaskHeader.jsx";
import MainStage from "./components/Layout/MainStage.jsx";
import Footer from "./components/Layout/Footer.jsx";

import DomainStore from "../store/domain-store";
import HabitStore from "../store/habit-store";
import DateStore from "../store/date-store";
import TreeStore from "../store/habit-tree-store";
import { openModal, openSpinner } from "../assets/scripts/animations";

const changedFromDemo = stream();
const changedToDemo = stream();
const outOfDateBoundary = stream();

function checkUpdateConditions() {
  // Reset the data when we have switched from demo to real or back
  changedFromDemo(
    !m.route.param("demo") &&
      DomainStore.current() &&
      DomainStore.current()?.name === "Sports"
  );
  changedToDemo(
    m.route.param("demo") &&
      DomainStore.current() &&
      DomainStore.current()?.name !== "Sports"
  );
  // Reset the current date when you switch to a habit with no record of that date
  outOfDateBoundary(
    HabitStore.current() &&
      DateTime.fromSQL(HabitStore.current().initiation_date) >
        DateTime.fromSQL(DateStore.current().h_date)
  );
  return (changedFromDemo() || changedToDemo() || outOfDateBoundary())
};

function updateDomains () {
  document.querySelectorAll(".domain-selector").forEach(selector => {
    let current = DomainStore.current();
    let newIndex = DomainStore.list().indexOf(current);
    selector.selectedIndex = newIndex
  });
console.log('changed!');
  Array.from(document.querySelectorAll(".domain-selector option"))
    .filter((opt) => opt.text === DomainStore.current()?.name)
    .forEach((opt) => {
      opt.setAttribute("selected", "true");
      debugger;
    });
};

const repopulateStores = () => {
  if (changedFromDemo() || changedToDemo()) {
    updateDomains();
    console.log(changedFromDemo());
    console.log(changedToDemo());
    changedToDemo(false);
    changedFromDemo(false);
  }
  if (outOfDateBoundary()) {
    let newListForHabit = DateStore.filterForHabit(HabitStore.current());
    DateStore.current(newListForHabit[newListForHabit.length - 1]);
    outOfDateBoundary(false);
  }
  
  m.redraw()
};

export default {
  oncreate: ({ attrs: { spinnerState, modalType } }) => {
    openSpinner(true);
    spinnerState.map(openSpinner);
    if (modalType()) openModal(true);

    const domainSelectors = document.querySelectorAll(".domain-selector");
    [...domainSelectors].forEach((selector) => {
      selector.addEventListener("change", (e) => {
        DomainStore.runFilterCurrent(e.target.selectedOptions[0].value);
        HabitStore.indexHabitsOfDomain(DomainStore.current().id);

        if (m.route.get().split("/")[1] === "vis") {
          TreeStore.index(
            m.route.param("demo"),
            DomainStore.current().id,
            DateStore.current().id
          ).then(m.redraw);
        }
        debugger;
        updateDomains();
        m.redraw();
      });
    });
  },
  onupdate: () => {
    if(checkUpdateConditions()) repopulateStores;
  },
  oninit: () => {
    if(checkUpdateConditions()) repopulateStores;
  },
  view: ({
    attrs: { spinnerState, isIndex, modalType },
    children: [componentNode],
  }) => (
    <div id="layout" className="w-full h-full">
      <Modal spinnerNeeded={spinnerState} modalType={modalType} />
      <LogoLink />
      <div id="app" className="flex flex-col justify-between min-h-screen">
        <MaskHeader />
        <div className="sm-selector-container top-3 md:top-1 inset-x-16 absolute z-40 flex w-2/3">
          <DomainSelector></DomainSelector>
          <DateSelector></DateSelector>
        </div>
        <MainStage isIndex={isIndex} modalType={modalType}>
          {componentNode}
        </MainStage>
        <Footer />
      </div>
    </div>
  ),
};
