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
        HabitStore.indexHabitsOfDomain(+DomainStore.current()?.id, true);
        if (isVisPage()) loadTreeData();
        spinnerState(true);
        fetching(true);
        Promise.all([preLoadHabitDateData()]).then(() => populateCalendar()).then(() => {
          resetContextStates();
          fetching(false);
          spinnerState(false);
          m.redraw();
        });
      });
    });
  },
  oninit: ({ attrs: { spinnerState } }) => {
    if (changedDate()) {
      changedDate(false);
      if (isVisPage()) loadTreeData().then(m.redraw);
      return;
    }
    if (!defaultHabit && DateStore.list().length > 0 && changeOfModelContext()) {
      let habitReload = (newRecord() || newDate()) && HabitStore.index();
      let dateReload = newDate() && DateStore.index();
      fetching(true);
      spinnerState(true);
      openModal(true);
      Promise.all([dateReload, habitReload])
        .then(() => preLoadHabitDateData())
        .then(() => populateCalendar())
        .then(() => {
          DateStore.indexDatesOfHabit(HabitStore.current());
          resetContextStates();
          fetching(false);
          spinnerState(false);
          openModal(false);
          m.route.set(m.route.get(), null);
        });
    }
  },
  onupdate: ({ attrs: { spinnerState } }) => {
    if (fetching()) return;
    if (defaultHabit) return;
    console.log('rerender :>> ', fetching());
    console.log("istree :>> ", isVisPage());
    let treeReload = isVisPage() && loadTreeData();
    changeOfModelContext() &&
      fetching(true) &&
      spinnerState(true) &&
      openModal(true) &&
      Promise.all([treeReload, preLoadHabitDateData()]).then(() => populateCalendar()).then(
        () => {
          resetContextStates();
          fetching(false);
          spinnerState(false);
          openModal(false);
          m.redraw();
        }
      );
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