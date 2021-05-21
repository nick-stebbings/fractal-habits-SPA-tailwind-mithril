import DomainSelector from './components/Layout/Nav/UI/Inputs/DomainSelector.jsx';
import DateSelector from './components/Layout/Nav/UI/Inputs/DateSelector.jsx';
import LogoLink from './components/Layout/Nav/UI/Buttons/LogoLink.jsx';
import Modal from './components/Layout/Modal.jsx';
import MaskHeader from './components/Layout/Nav/MaskHeader.jsx';
import MainStage from './components/Layout/MainStage.jsx';
import Footer from './components/Layout/Footer.jsx';

import DomainStore from '../store/domain-store';
import HabitStore from '../store/habit-store';
import NodeStore from '../store/habit-node-store';
import DateStore from '../store/date-store';
import TreeStore from '../store/habit-tree-store';
import HabitDateStore from '../store/habit-date-store.js';
import { openModal, openSpinner, addIntersectionObserver } from '../assets/scripts/animations';
import {
  changedFromDemo,
  preLoadHabitDateData,
  changeOfModelContext,
  updateDomainSelectors,
  resetContextStates,
  changedDate,
  changedDomain,
} from '../assets/scripts/controller';

function loadTreeData() {
  if (DomainStore.current() && DateStore.current()) {
    TreeStore.index(
      m.route.param("demo"),
      DomainStore.current()?.id,
      DateStore.current()?.id
    ).then(m.redraw);
  }
};

const resetNeeded = () => (changeOfModelContext() || changedDate() || changedDomain());

const isVisPage = () => m.route.get().split('/')[1] === 'vis';

export default {
  oncreate: ({ attrs: { spinnerState, modalType } }) => {
    openSpinner(true);
    spinnerState.map(openSpinner);
    if (modalType()) openModal(true);
    addIntersectionObserver();

    const domainSelectors = document.querySelectorAll('.domain-selector');
    [...domainSelectors].forEach((selector) => {
      selector.addEventListener('change', (e) => {
        DomainStore.runFilterCurrent(e.target.selectedOptions[0].value);
        HabitStore.indexHabitsOfDomain(DomainStore.current().id);
        loadTreeData();
        if (changeOfModelContext()) {
          HabitStore.indexHabitsOfDomain(DomainStore.current().id);
          updateDomainSelectors();
          resetContextStates();
          m.redraw();
        }
      });
    });
  },
  oninit: () => {
    if (resetNeeded() && isVisPage()) {
      loadTreeData();
      resetContextStates();
    }
    if (changeOfModelContext()) {
      HabitStore.indexHabitsOfDomain(DomainStore.current().id);
      updateDomainSelectors();
      resetContextStates();
      m.route.set(m.route.get(), null);
    }
    if (
      HabitDateStore.fullList().length === 0 ||
      NodeStore.list().length === 0 ||
      m.route.param("currentHabit")
    ) {
      preLoadHabitDateData();
    }
  },
  view: ({
    attrs: { spinnerState, isIndex, modalType },
    children: componentNodes,
  }) => (
    <div id="layout" className="w-full h-full">
      <Modal spinnerNeeded={spinnerState} modalType={modalType} />
      <LogoLink isDemo={changedFromDemo} />
      <div id="app" className="flex flex-col justify-between min-h-screen">
        <MaskHeader />
        <div className="sm-selector-container top-3 md:top-1 inset-x-16 absolute z-40 flex w-2/3">
          <DomainSelector />
          <DateSelector />
        </div>
        <MainStage isIndex={isIndex} modalType={modalType}>
          {componentNodes[0]}
          {componentNodes[1]}
        </MainStage>
        <Footer />
      </div>
    </div>
  ),
};
