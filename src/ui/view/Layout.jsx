import stream from "mithril/stream";
import LogoLink from "./components/Layout/LogoLink.jsx";
import Modal from "./components/Layout/Modal.jsx";
import MaskHeader from "./components/Layout/MaskHeader.jsx";
import MainStage from "./components/Layout/MainStage.jsx";
import Footer from "./components/Layout/Footer.jsx";

import DateStore from "../store/date-store";
import DomainStore from "../store/domain-store";
import { openSpinner } from "../assets/scripts/animations.js";

export default {
  oncreate: ({attrs: {spinnerState}}) => {
    document.getElementById("date-today").value = DateStore.currentDate();
    openSpinner(true);
    spinnerState.map(openSpinner)
    console.log(spinnerState());
    console.log(DateStore.list(), "datelist");
    console.log(DateStore.current(), "dcurr");
    document.getElementById("domain-selector").selectedIndex = Math.max(
      0,
      DomainStore.list().indexOf(DomainStore.current())
      );
    },
    view: ({ attrs, children: [mainPage] }) => (
      <div id="layout" className="w-full h-full">
      <Modal spinnerNeeded={attrs.spinnerState} />
      <LogoLink />
      <div id="app" className="flex flex-col justify-between min-h-screen">
        <MaskHeader />
        <MainStage index={attrs.index}>{mainPage}</MainStage>
      </div>
      <Footer />
    </div>
  ),
};
