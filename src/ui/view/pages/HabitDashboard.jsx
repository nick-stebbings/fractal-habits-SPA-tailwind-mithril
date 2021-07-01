import DateTime from "luxon/src/datetime.js";
import stream from "mithril/stream";

import HabitStore from "../../store/habit-store";
import HabitDateStore from "../../store/habit-date-store";
import DateStore from "../../store/date-store";
import DomainStore from "../../store/domain-store";
import NodeStore from "../../store/habit-node-store";

import {
  positiveCol,
  neutralCol,
  negativeCol,
  noNodeCol,
  makePatchOrPutRequest,
} from "../../assets/scripts/d3-utilities";

import FilterList from "../components/Layout/FilterList.jsx";
import CancelButton from "../components/Layout/Nav/UI/Buttons/CancelButton.jsx";
import {calendarDates} from "../Layout.jsx";
import { openModal, addSwipeGestures } from "../../assets/scripts/animations";
import { setRouteToBasePath, invert, isTouchDevice } from "../../assets/scripts/utilities";

const nameOrderAsc = stream(true);
const dateOrderAsc = stream(true);
const statusOrderAsc = stream(true);

const getStatusColor = (habit) => {
  let status;
  if (
    HabitDateStore.runFilter(habit.id) &&
    DateStore.current()?.id &&
    HabitDateStore.runDateFilterOnCurrentList(DateStore.current().id).length > 0
  ) {
    status = String(HabitDateStore.list()[0].completed_status);
  }
  switch (status) {
    case "true":
      return positiveCol;
    case "false":
      return negativeCol;
    case "incomplete":
      return neutralCol;
    default:
      return noNodeCol;
  }
};

const HabitDashboard = {
  oninit: () => {
    // When being linked from a visualisation page:
    if (m.route.param("currentHabit")) {
      HabitStore.current(
        HabitStore.filterById(m.route.param("currentHabit"))[0]
        );
    }
    HabitStore.current() &&
      NodeStore.runCurrentFilterByHabit(HabitStore.current());
  },
  oncreate: ({ attrs }) => {
    const demoData = m.route.param("demo");
    addSwipeGestures();

    // Add sorting events
    document.getElementById("sort-name-desc").addEventListener("click", (e) => {
      invert(nameOrderAsc);
      HabitStore.sortByName(nameOrderAsc());
      setRouteToBasePath();
      m.redraw();
    });
    document.getElementById("sort-date-desc").addEventListener("click", (e) => {
      invert(dateOrderAsc);
      HabitStore.sortByDate(dateOrderAsc());
      setRouteToBasePath();
      m.redraw();
    });
    document
      .getElementById("sort-completion-desc")
      .addEventListener("click", (e) => {
        invert(statusOrderAsc);
        HabitStore.sortByStatus(statusOrderAsc());
        setRouteToBasePath();
        m.redraw();
      });

    // Add selected habit row styles
    const selectedHabitName = [
      ...document.querySelectorAll("p:first-of-type"),
    ].filter((node) => node.textContent == HabitStore.current()?.name)[0];
    if (selectedHabitName)
      selectedHabitName.parentNode.parentNode.parentNode.parentNode.classList.add(
        "selected"
      );
    
    if (m.route.param("currentHabit")) {
      setRouteToBasePath();
      if (isTouchDevice()) return;
      let param = m.route.param('currentHabit');
      document.querySelector(`tr:nth-child(${Math.max(param - 1, 1)})`)?.scrollIntoView();
    }

    // Add hover/active styles
    [...document.querySelectorAll("table tr")].forEach((row, index) => {
      if (index === 0) return;

      // Add click event for TR (Rows)
      row.addEventListener("click", (e) => {
        if (e.currentTarget.tagName === "TR") {
          // Add selected styles
          const habitName =
            e.currentTarget.querySelector("p:first-child")?.textContent;
          document.querySelector(".selected")?.classList.remove("selected");
          e.currentTarget.classList.add("selected");
          // Set the current habit and node
          HabitStore.current(HabitStore.filterByName(habitName)[0]);
          NodeStore.runCurrentFilterByHabit(HabitStore.current());
          // Add toggle status event
          if (e.target.tagName == "circle") {
            if (demoData) return;
            const currentStatusCol = e.target.getAttribute("fill");
            const currentStatus = currentStatusCol === positiveCol;
            e.target.setAttribute(
              "fill",
              currentStatusCol === positiveCol ? negativeCol : positiveCol
              );
            makePatchOrPutRequest(demoData, String(currentStatus))
              .then(HabitDateStore.index);
            }

          // Add delete  event
          if (e.target.tagName == "BUTTON") {
            attrs.modalType("confirm");
            openModal(true);
          }
          calendarDates([]);
          // Stop the query parameters from persisting past first load
          if (!e.target.tagName == "circle") setRouteToBasePath(HabitStore.current()?.id);
        }
      });
    });
  },
  view: ({ attrs }) => (
    <div class="container mx-auto max-w-3/4">
      {/* List component from www.tailwind-kit.com */}
      <div class="py-8">
        <FilterList></FilterList>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal table-auto">
              <thead>
                <tr class="flex flex-nowrap">
                  <th
                    scope="col"
                    class="flex flex-col px-2 py-1 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    <i
                      id="sort-name-desc"
                      class={
                        nameOrderAsc()
                          ? "relative text-center md:text-left left-2 fa mr-4 fa-sort-asc"
                          : "relative text-center md:text-left left-2 fa mr-4 fa-sort-desc"
                      }
                      aria-hidden="true"
                    ></i>
                    Habit
                  </th>
                  <th
                    scope="col"
                    class="py-1 mt-auto flex flex-col justify-end bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Domain
                    {/* <i
                      id="sort-domain-desc"
                      class={dateOrderAsc() ? "relative left-2 fa fa-sort-asc": "relative left-2 fa fa-sort-desc"}
                      aria-hidden="true"
                    ></i> */}
                  </th>
                  <th
                    scope="col"
                    class="flex flex-col text-center md:text-left px-2 py-1 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
                    Domain
                  >
                    <i
                      id="sort-date-desc"
                      class={
                        dateOrderAsc()
                          ? "relative left-2 text-center md:text-left fa mr-4 fa-sort-asc"
                          : "relative left-2 text-center md:text-left fa mr-4 fa-sort-desc"
                      }
                      aria-hidden="true"
                    ></i>
                    Initiated
                  </th>
                  <th
                    scope="col"
                    class="flex flex-col text-center md:text-left px-2 py-1 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal"
                  >
                    <i
                      id="sort-completion-desc"
                      class={
                        statusOrderAsc()
                          ? "relative left-2 text-center md:text-left fa mr-4 fa-sort-asc"
                          : "relative left-2 text-center md:text-left fa mr-4 fa-sort-desc"
                      }
                      aria-hidden="true"
                    ></i>
                    Completion
                  </th>
                  <th
                    scope="col"
                    class=" mt-auto px-2 py-1 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {HabitStore.list().map((habit) => (
                  <tr>
                    <td class="bg-transparent px-2 py-2 border-b border-gray-200 bg-white text-lg">
                      <div class="flex items-center">
                        <div>
                          <p class="text-gray-900 whitespace-no-wrap font-semibold">
                            {habit.name}
                          </p>
                          <p class="text-gray-900 whitespace-no-wrap">
                            {habit.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="bg-transparent py-2 border-b border-gray-200 bg-white text-lg">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {DomainStore.current().name}
                      </p>
                    </td>
                    <td class="bg-transparent px-2 py-2 border-b border-gray-200 bg-white text-lg">
                      <p class="text-gray-900 whitespace-no-wrap text-center md:text-left">
                        {DateTime.fromSQL(
                          habit.initiation_date
                        ).toLocaleString()}
                      </p>
                    </td>
                    <td class="border-b border-gray-200 justify-center">
                      <span class="relative inline-block px-3 py-1 font-semibold leading-tight">
                        <span class="relative">
                          <svg class="h-12 w-12">
                            <circle
                              r="20"
                              fill={getStatusColor(habit)}
                              transform="translate(25, 25)"
                            ></circle>
                          </svg>
                        </span>
                      </span>
                    </td>
                    <td class="bg-transparent px-2 py-2 border-b border-gray-200 bg-white text-sm">
                      {!m.route.param("demo") && (
                        <CancelButton
                          id={`delete-habit-${habit.id}`}
                          name={"d"}
                          disabled={false}
                          label={"Delete"}
                          modalType={attrs.modalType}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default HabitDashboard;
