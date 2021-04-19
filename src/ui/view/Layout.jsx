import { DateTime } from "luxon";

import LogoLink from "./components/Layout/Nav/UI/Buttons/LogoLink.jsx";
import Modal from "./components/Layout/Modal.jsx";
import MaskHeader from "./components/Layout/Nav/MaskHeader.jsx";
import MainStage from "./components/Layout/MainStage.jsx";
import Footer from "./components/Layout/Footer.jsx";

import DomainStore from "../store/domain-store";
import HabitStore from "../store/habit-store";
import DateStore from "../store/date-store";
import { openModal, openSpinner } from "../assets/scripts/animations.js";

export default {
  oncreate: ({ attrs: { spinnerState, modalType } }) => {
    openSpinner(true);
    spinnerState.map(openSpinner);
    if (modalType()) openModal(true);

    document.getElementById("domain-selector").selectedIndex = Math.max(
      0,
      DomainStore.list().indexOf(DomainStore.current())
    );

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
        <MainStage index={attrs.index}>{componentNode}</MainStage>
      </div>
      <Footer />
    </div>
  ),
};
