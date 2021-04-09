import stream from "mithril/stream";

import LogoLink from "./components/Layout/Nav/UI/Buttons/LogoLink.jsx";
import Modal from "./components/Layout/Modal.jsx";
import MaskHeader from "./components/Layout/Nav/MaskHeader.jsx";
import MainStage from "./components/Layout/MainStage.jsx";
import Footer from "./components/Layout/Footer.jsx";

import DateStore from "../store/date-store";
import DomainStore from "../store/domain-store";
import { openModal, openSpinner } from "../assets/scripts/animations.js";

export default {
  oncreate: ({ attrs: { spinnerState, formNeeded } }) => {
    openSpinner(true);
    spinnerState.map(openSpinner);

    if (!DateStore.current().id) {
      document.getElementById("date-today").value = DateStore.currentDate();
    }

    if (formNeeded()) {
      openModal(true);
    }
  },
  view: ({ attrs, children: [componentNode] }) => (
    <div id="layout" className="w-full h-full">
      <Modal spinnerNeeded={attrs.spinnerState} formNeeded={attrs.formNeeded} />
      <LogoLink />
      <div id="app" className="flex flex-col justify-between min-h-screen">
        <MaskHeader />
        <MainStage index={attrs.index}>{componentNode}</MainStage>
      </div>
      <Footer />
    </div>
  ),
};
