import LogoLink from "./components/layout/LogoLink.jsx";
import Modal from "./components/Layout/Modal.jsx";
import MaskHeader from "./components/Layout/MaskHeader.jsx";
import MainStage from "./components/Layout/MainStage.jsx";
import Footer from "./components/Layout/Footer.jsx";

import DateStore from "../store/date-store";

export default {
  oninit: () => {
    const todaysDate = new Date().toDateInputValue();
    DateStore.current(todaysDate)
  },
  oncreate: () => {
    document.getElementById("initiation-date");
  },
  view: ({ attrs, children: [mainPage] }) => (
    <div id="layout" class="w-full h-full">
      <Modal />
      <LogoLink />
      <div id="app" class="flex flex-col justify-between min-h-screen">
        <MaskHeader />
        <MainStage index={attrs.index}>{mainPage}</MainStage>
      </div>
      <Footer></Footer>
    </div>
  ),
};
