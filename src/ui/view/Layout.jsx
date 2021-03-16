import LogoLink from "./components/layout/LogoLink.jsx";
import Modal from "./components/layout/Modal.jsx";
import MaskHeader from "./components/layout/MaskHeader.jsx";
import MainStage from "./components/layout/MainStage.jsx";
import Footer from "./components/layout/Footer.jsx";

export default {
  view: ({ attrs, children: [mainPage] }) => (
    <div id="layout" class="w-full h-full">
      <div
        id="modal_overlay"
        class="absolute hidden inset-0 z-50 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0"
      ></div>
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
