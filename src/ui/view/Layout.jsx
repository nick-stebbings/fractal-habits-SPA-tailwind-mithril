import LogoLink from "./components/Layout/Nav/UI/Buttons/LogoLink.jsx";
import Modal from "./components/Layout/Modal.jsx";
import MaskHeader from "./components/Layout/Nav/MaskHeader.jsx";
import MainStage from "./components/Layout/MainStage.jsx";
import Footer from "./components/Layout/Footer.jsx";

import DateStore from "../store/date-store";
import DomainStore from "../store/domain-store";
import { openSpinner } from "../assets/scripts/animations.js";

export default {
  oncreate: ({ attrs: { spinnerState } }) => {
    openSpinner(true);
    spinnerState.map(openSpinner);

    document.getElementById("date-today").value = DateStore.currentDate();
    document.getElementById("domain-selector").selectedIndex = Math.max(
      0,
      DomainStore.list().indexOf(DomainStore.current())
    );
  },
  view: ({ attrs, children: [componentNode] }) => (
    <div id="layout" className="w-full h-full">
      <Modal spinnerNeeded={attrs.spinnerState} />
      <LogoLink />
      <div id="app" className="flex flex-col justify-between min-h-screen">
        <MaskHeader />
        <MainStage index={attrs.index}>{componentNode}</MainStage>
      </div>
      <Footer />
    </div>
  ),
};
