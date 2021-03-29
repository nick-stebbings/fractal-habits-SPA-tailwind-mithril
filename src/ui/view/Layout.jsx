import LogoLink from './components/Layout/LogoLink.jsx';
import Modal from './components/Layout/Modal.jsx';
import MaskHeader from './components/Layout/MaskHeader.jsx';
import MainStage from './components/Layout/MainStage.jsx';
import Footer from './components/Layout/Footer.jsx';

import DateStore from '../store/date-store';

export default {
  oncreate: () => {
    document.getElementById('date-today').value = DateStore.currentDate();
  },
  view: ({ attrs, children: [mainPage] }) => (
    <div id="layout" className="w-full h-full">
      <Modal />
      <LogoLink />
      <div id="app" className="flex flex-col justify-between min-h-screen">
        <MaskHeader />
        <MainStage index={attrs.index}>{mainPage}</MainStage>
      </div>
      <Footer />
    </div>
  ),
};
