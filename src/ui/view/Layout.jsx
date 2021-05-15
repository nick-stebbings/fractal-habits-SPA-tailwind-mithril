import { DateTime } from "luxon";

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
import { openModal, openSpinner } from "../assets/scripts/animations";
import { setRouteToBasePath } from "../assets/scripts/utilities";

export default {
  oncreate: ({ attrs: { spinnerState, modalType } }) => {
    openSpinner(true);
    spinnerState.map(openSpinner);
    if (modalType()) openModal(true);

    const domainSelectors = document.querySelectorAll(".domain-selector");
    const selectedHabitLabel = document.querySelector("#current-habit ~ span");
    const selectedHabitLabelSm = document.querySelector(
      "#current-habit-sm ~ span"
    );
    [...domainSelectors].forEach((selector) => {
      selector.addEventListener("change", (e) => {
        DomainStore.runFilterCurrent(e.target.selectedOptions[0].value);
        HabitStore.indexHabitsOfDomain(DomainStore.current().id);

        console.log(DomainStore.current());
        console.log(HabitStore.current());
        console.log(DomainStore.list().indexOf(DomainStore.current()));
        setRouteToBasePath();
      });
    });
    
    document.querySelector(
      ".domain-selector"
    ).selectedIndex = DomainStore.list().indexOf(DomainStore.current());

    Array.from(document.querySelectorAll(".domain-selector option"))
      .filter((opt) => opt.text === DomainStore.current()?.name)
      .forEach((opt) => {
        opt.setAttribute("selected", "true");
      });

    // Reset the current date when you switch to a habit with no record of that date
    if (
      HabitStore.current() &&
      DateTime.fromSQL(HabitStore.current().initiation_date) >
        DateTime.fromSQL(DateStore.current().h_date)
    ) {
      let newListForHabit = DateStore.filterForHabit(HabitStore.current());
      DateStore.current(newListForHabit[newListForHabit.length - 1]);
      m.redraw();
    }
  },
  view: ({ attrs, children: [componentNode] }) => (
    <div id="layout" className="w-full h-full">
      <Modal spinnerNeeded={attrs.spinnerState} modalType={attrs.modalType} />
      <LogoLink />
      <div id="app" className="flex flex-col justify-between min-h-screen">
        <MaskHeader />
        <div className="sm-selector-container top-3 md:top-1 inset-x-16 absolute z-40 flex w-2/3">
          <DomainSelector></DomainSelector>
          <DateSelector></DateSelector>
        </div>
        <MainStage index={attrs.index} modalType={attrs.modalType}>
          {componentNode}
        </MainStage>
        <Footer />
      </div>
    </div>
  ),
};