import LogoLink from "./components/layout/LogoLink.jsx";
import MaskHeader from "./components/layout/MaskHeader.jsx";
import MainStage from "./components/layout/MainStage.jsx";
import Footer from "./components/layout/Footer.jsx";

export default {
  view: ({ children: [mainPage] }) => (
    <div id="layout" class="w-full h-full">
      <LogoLink />
      <div id="app" class="flex flex-col justify-between min-h-screen">
        <MaskHeader />
        <MainStage>{mainPage}</MainStage>
      </div>
      <Footer></Footer>
    </div>
  ),
};
