import DomainSelector from './components/Layout/Nav/UI/Inputs/DomainSelector.jsx';
import DateSelector from './components/Layout/Nav/UI/Inputs/DateSelector.jsx';
import LogoLink from './components/Layout/Nav/UI/Buttons/LogoLink.jsx';
import Modal from './components/Layout/Modal.jsx';
import MaskHeader from './components/Layout/Nav/MaskHeader.jsx';
import MainStage from './components/Layout/MainStage.jsx';

import DomainStore from '../store/domain-store';
import HabitStore from '../store/habit-store';
import HabitDateStore from '../store/habit-date-store';
import DateStore from '../store/date-store';
import TreeStore from '../store/habit-tree-store';

import stream from "mithril/stream";
export const calendarDates = stream([]);
const statuses = stream();

import cloudMan from '../assets/images/cloud-man-vector.svg';
import { openModal, openSpinner } from '../assets/scripts/animations';
import {
  changedFromDemo,
  changeOfModelContext,
  updateDomainSelectors,
  resetContextStates,
  changedDate,
  preLoadHabitDateData,
  newRecord,
  changedDomain
} from "../assets/scripts/controller";

function loadTreeData() {
  if (DomainStore.current() && DateStore.current()) {
    TreeStore.index(
      m.route.param("demo"),
      DomainStore.current()?.id,
      DateStore.current()?.id
    ).then(m.redraw);
  }
};
const isVisPage = () => m.route.get().split('/')[1] === 'vis';

export default {
  oncreate: ({ attrs: { spinnerState, modalType } }) => {
    openSpinner(true);
    spinnerState.map(openSpinner);
    if (modalType()) openModal(true);

    const domainSelectors = document.querySelectorAll(".domain-selector");
    [...domainSelectors].forEach((selector) => {
      selector.addEventListener("change", (e) => {
        DomainStore.runFilterCurrent(e.target.selectedOptions[0].value);
        HabitStore.indexHabitsOfDomain(DomainStore.current().id);
        console.log('hi');
        updateDomainSelectors();
        resetContextStates();
        calendarDates([]);
        if (isVisPage()) loadTreeData();
        m.redraw();
      });
    });
  },
  oninit: () => {
        const noParams = !m.route.param("demo");
        if (
          noParams &&
          (calendarDates()?.length === 0 ||
            calendarDates().some((date) => date === ""))
        ) {
          HabitDateStore.indexForHabitPeriod(HabitStore.current()?.id, 28)
            .then((data) => {
              statuses(
                data?.map((date) => ({
                  date_id: date.date_id,
                  completed_status: date.completed_status,
                }))
              );
              const dates =
                statuses() &&
                statuses()
                  .map((statusObj) => {
                    return (
                      DateStore.dateFromDateObjectArray(
                        statusObj.date_id,
                        DateStore.listForHabit().reverse()
                      ) || ""
                    );
                  })
                  .slice(-7);
              calendarDates(dates);
              changedDate(true);
            })
            .then(m.redraw)
            .catch(console.log);
        } else if (
          (noParams && DateStore.listForHabit().length === 0) ||
          changeOfModelContext()
        ) {
          calendarDates(
            statuses() &&
              statuses()
                .map((statusObj) => {
                  return (
                    DateStore.dateFromDateObjectArray(
                      statusObj.date_id,
                      DateStore.listForHabit().reverse()
                    ) || ""
                  );
                })
                .slice(-7)
          );
        }
    if (changeOfModelContext() || changedDate()) {
      console.log("changeOfModelContext() :>> ", changeOfModelContext());
      updateDomainSelectors();
      if (isVisPage()) loadTreeData();
      if (!(newRecord() || changedDomain() || changedDate()))
        preLoadHabitDateData();
      resetContextStates();
    }
    if (isVisPage() && changedDate()) {
      console.log("visRedrawn :>> ", TreeStore.root());
      resetContextStates();
      loadTreeData();
    }
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
        <MainStage
          isIndex={isIndex}
          modalType={modalType}
        >
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
    </div>
  ),
};