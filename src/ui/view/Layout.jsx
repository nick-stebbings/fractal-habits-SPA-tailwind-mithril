import LogoLink from "./components/layout/LogoLink.jsx";
import MaskHeader from "./components/layout/MaskHeader.jsx";
import MainStage from "./components/layout/MainStage.jsx";
import Footer from "./components/layout/Footer.jsx";

import CreateForm from "./components/pages/forms/CreateForm.jsx";
import HabitNodeList from "./components/pages/HabitNodeList.jsx";

export default {
  view: (vnode) => (
    <div id="layout" class="w-full h-full">
      {<LogoLink />}
      <div id="app" class="flex flex-col justify-between min-h-screen">
        {<MaskHeader />}
        {<MainStage />}
      </div>
      {<CreateForm></CreateForm>}
      {<HabitNodeList />}
    </div>
  ),
};
