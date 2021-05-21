import DomainSelector from './components/Layout/Nav/UI/Inputs/DomainSelector.jsx';
import DateSelector from './components/Layout/Nav/UI/Inputs/DateSelector.jsx';
import LogoLink from './components/Layout/Nav/UI/Buttons/LogoLink.jsx';
import Modal from './components/Layout/Modal.jsx';
import MaskHeader from './components/Layout/Nav/MaskHeader.jsx';
import MainStage from './components/Layout/MainStage.jsx';
import Footer from './components/Layout/Footer.jsx';

import DomainStore from '../store/domain-store';
import HabitStore from '../store/habit-store';
import DateStore from '../store/date-store';
import TreeStore from '../store/habit-tree-store';
import { openModal, openSpinner } from '../assets/scripts/animations';
import {
  preLoadHabitDateData,
  changeOfModelContext,
  updateDomainSelectors,
  updateSelectorStates,
} from '../assets/scripts/controller';

export default {
  oncreate: ({ attrs: { spinnerState, modalType } }) => {
    openSpinner(true);
    spinnerState.map(openSpinner);
    if (modalType()) openModal(true);

    preLoadHabitDateData();

    const domainSelectors = document.querySelectorAll('.domain-selector');
    [...domainSelectors].forEach((selector) => {
      selector.addEventListener('change', (e) => {
        DomainStore.runFilterCurrent(e.target.selectedOptions[0].value);
        HabitStore.indexHabitsOfDomain(DomainStore.current().id);

        if (m.route.get().split('/')[1] === 'vis') {
          TreeStore.index(
            m.route.param('demo'),
            DomainStore.current().id,
            DateStore.current().id,
          ).then(m.redraw);
        }
        updateDomainSelectors();

        m.redraw();
      });
    });
  },
  onupdate: () => {
    if (changeOfModelContext()) updateSelectorStates();
  },
  oninit: () => {
    if (changeOfModelContext()) updateSelectorStates();
  },
  view: ({
    attrs: { spinnerState, isIndex, modalType },
    children: [componentNode],
  }) => (
    <div id="layout" className="w-full h-full">
      <Modal spinnerNeeded={spinnerState} modalType={modalType} />
      <LogoLink />
      <div id="app" className="flex flex-col justify-between min-h-screen">
        <MaskHeader />
        <div className="sm-selector-container top-3 md:top-1 inset-x-16 absolute z-40 flex w-2/3">
          <DomainSelector />
          <DateSelector />
        </div>
        <MainStage isIndex={isIndex} modalType={modalType}>
          {componentNode}
        </MainStage>
        <Footer />
      </div>
    </div>
  ),
};
