import cloudMan from '../assets/images/cloud-man-vector.svg';

import DomainSelector from './components/Layout/Nav/UI/Inputs/DomainSelector.jsx';
import DateSelector from './components/Layout/Nav/UI/Inputs/DateSelector.jsx';
import LogoLink from './components/Layout/Nav/UI/Buttons/LogoLink.jsx';
import Modal from './components/Layout/Modal.jsx';
import MaskHeader from './components/Layout/Nav/MaskHeader.jsx';
import MainStage from './components/Layout/MainStage.jsx';
import Footer from './components/Layout/Footer.jsx';

import DateStore from '../store/date-store';
import DomainStore from '../store/domain-store';
import HabitStore from '../store/habit-store';

import {
  openModal,
  openSpinner,
  addSwipeGestures,
  addIntersectionObserver,
  addTooltips
} from "../assets/scripts/animations";
import {
  fetching,
  changedFromDemo,
  changeOfModelContext,
  updateDomainSelectors,
  resetContextStates,
  calendarDates,
  statuses,
  preLoadHabitDateData,
  loadTreeData,
  populateCalendar
} from "../assets/scripts/controller";
import { isTouchDevice } from '../assets/scripts/utilities.js';

const isVisPage = () => m.route.get().split('/')[1] === 'vis';

export default {
  oncreate: ({ attrs: { spinnerState, modalType } }) => {
    openSpinner(true);
    spinnerState.map(openSpinner);
    if (modalType()) openModal(true);
    if(isTouchDevice()) addSwipeGestures();
    addIntersectionObserver();
    addTooltips();

    // Domain change event handling
    const domainSelectors = document.querySelectorAll(".domain-selector");
    [...domainSelectors].forEach((selector) => {
      selector.addEventListener("change", (e) => {
        DomainStore.runFilterCurrent(e.target.selectedOptions[0].value);
        updateDomainSelectors();
        HabitStore.indexHabitsOfDomain(DomainStore.current()?.id);
        if (isVisPage()) loadTreeData();
        resetContextStates();
        populateCalendar()
          .then(m.redraw);
      });
    });
  },
  oninit: ({ attrs: { spinnerState } }) => {
    DateStore.list().length > 0 && populateCalendar(spinnerState, openModal);
  },
  onupdate: ({ attrs: { spinnerState } }) => {
    if (fetching()) return;
    console.log('rerender :>> ', fetching());
    let treeReload = isVisPage() && loadTreeData();
    let habitDateReload = preLoadHabitDateData();
    let calendarReload = populateCalendar();
    changeOfModelContext() && fetching(true) && 
    spinnerState(true) && openModal(true) &&
      Promise.all([treeReload, habitDateReload, calendarReload]).then(() => {
        resetContextStates();
        fetching(false);
        spinnerState(false);
        openModal(false);
        m.redraw();
      });
  },
  view: ({
    attrs: { spinnerState, isIndex, modalType },
    children: componentNodes,
  }) => (
    <div>
      <Modal spinnerNeeded={spinnerState} modalType={modalType} />
      <LogoLink isDemo={changedFromDemo} />
      <div
        id="app"
        className="bg-gray-50 flex flex-col items-center m-0 overflow-x-hidden"
      >
        <MaskHeader calendarDates={calendarDates} statuses={statuses} />
        <div className="sm-selector-container top-1 md:top-1 inset-x-16 absolute z-40 flex flex-wrap w-2/3">
          <DomainSelector />
          <DateSelector />
        </div>
        <MainStage isIndex={isIndex} modalType={modalType} isVis={isVisPage()}>
          {componentNodes[0]}
          {componentNodes[1]}
          {componentNodes[2]}
          {componentNodes[3]}
          {isIndex && (
            <div class="cloud-man-vector object-cover w-full col-span-5">
              <img src={cloudMan} alt="Man thinking outside the box" />
            </div>
          )}
        </MainStage>
        {componentNodes[4]}
      </div>
      <Footer></Footer>
    </div>
  ),
};