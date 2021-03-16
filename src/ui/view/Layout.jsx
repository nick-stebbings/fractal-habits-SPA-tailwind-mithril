import LogoLink from "./components/layout/LogoLink.jsx";
import Modal from "./components/layout/Modal.jsx";
import MaskHeader from "./components/layout/MaskHeader.jsx";
import MainStage from "./components/layout/MainStage.jsx";
import Footer from "./components/layout/Footer.jsx";

export default {
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
