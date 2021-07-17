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
  changedDate,
  changedHabit,
  changedFromDemo,
  changeOfModelContext,
  updateDomainSelectors,
  resetContextStates,
  calendarDates,
  newRecord,
  statuses,
  preLoadHabitDateData,
  loadTreeData,
  populateCalendar,
  newDate,
} from "../assets/scripts/controller";
import { isTouchDevice } from '../assets/scripts/utilities.js';

const isVisPage = () => m.route.get().split('/')[1] === 'vis';
const defaultHabit = () => [
    "Select a Life-Domain to start tracking", "There are no habits yet for this domain"].includes(HabitStore.current()?.name);
const clearTheDecks = (spinnerState) => {
  resetContextStates();
  spinnerState(false);
  openModal(false);
  m.redraw();
};

export default {
  oncreate: ({ attrs: { spinnerState, modalType } }) => {
    openSpinner(true);
    spinnerState.map(openSpinner);
    if (modalType()) openModal(true);
    if(isTouchDevice()) addSwipeGestures();
    addIntersectionObserver();

    // Domain change event handling
    const domainSelectors = document.querySelectorAll(".domain-selector");
    [...domainSelectors].forEach((selector) => {
      selector.addEventListener("change", (e) => {
        DomainStore.runFilterCurrent(e.target.selectedOptions[0].value);
        updateDomainSelectors();
        HabitStore.indexHabitsOfDomain(+DomainStore.current()?.id, true);
        DateStore.indexDatesOfHabit(HabitStore.current());
        if (isVisPage()) loadTreeData();
        if (m.route.param("demo")) return;
        spinnerState(true);
        fetching(true);
        preLoadHabitDateData().then(() => populateCalendar()).then(() => {
          resetContextStates();
          spinnerState(false);
          m.redraw();
        });
      });
    });
  },
  oninit: ({ attrs: { spinnerState } }) => {
    addTooltips();
    if (changedDate()) {
      changedDate(false);
      if (isVisPage())
        DomainStore.current() &&
          DateStore.current() &&
          loadTreeData().then(m.redraw);
      return m.redraw();
    }
    if (
      !defaultHabit() &&
      !fetching() &&
      DateStore.listForHabit().length > 0 &&
      changeOfModelContext() || changedHabit()
    ) {
      let habitReload = (newRecord() || newDate()) && HabitStore.index();
      let dateReload = newDate() && DateStore.index();
      fetching(true);
      spinnerState(true);
      openModal(true);
      Promise.all([dateReload, habitReload])
        .then(() => preLoadHabitDateData())
        .then(() => (newRecord() || newDate() || changedHabit()) && populateCalendar())
        .then(() => {
          let curHabit = HabitStore.current();
          if (!changedHabit()) DateStore.indexDatesOfHabit(curHabit);
          changedHabit(false);
          clearTheDecks(spinnerState);
        })
    }
  },
  onupdate: ({ attrs: { spinnerState } }) => {
    if (fetching()) return;
    if (defaultHabit()) return;
    let treeReload = isVisPage() && loadTreeData();
    changeOfModelContext() || changedHabit() &&
      fetching(true) &&
      spinnerState(true) &&
      openModal(true) &&
      Promise.all([treeReload, preLoadHabitDateData()]).then(() => populateCalendar()).then(() => clearTheDecks(spinnerState));
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