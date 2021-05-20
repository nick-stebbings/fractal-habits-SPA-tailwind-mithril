import DateTime from 'luxon/src/datetime.js';
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
import { openModal, addSwipeGestures } from "../../assets/scripts/animations";
import { setRouteToBasePath, invert } from "../../assets/scripts/utilities";

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
      NodeStore.index();
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
      m.redraw();
    });
    document.getElementById("sort-date-desc").addEventListener("click", (e) => {
      invert(dateOrderAsc);
      HabitStore.sortByDate(dateOrderAsc());
      m.redraw();
    });
    document
      .getElementById("sort-completion-desc")
      .addEventListener("click", (e) => {
        invert(statusOrderAsc);
        HabitStore.sortByStatus(statusOrderAsc());
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

    // Add hover/active styles
    [...document.querySelectorAll("table tr")].forEach((row) => {
      row.addEventListener("mouseover", (e) => {
        e.stopPropagation();
        if (e.currentTarget.tagName === "TR") {
          e.currentTarget.style.backgroundColor = "#F0F0F0";
        }
      });
      // Add click event for TR (Rows)
      row.addEventListener("click", (e) => {
        if (e.currentTarget.tagName === "TR") {
          // Stop the query parameters from persisting past first load
          if (m.route.param("currentHabit") && e.target.tagName !== "BUTTON")
            setRouteToBasePath();

          // Add selected styles
          const habitName = e.currentTarget.querySelector("p:first-child")
            ?.textContent;
          document.querySelector(".selected").classList.remove("selected");
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
              .then(HabitDateStore.index)
              .then(m.redraw);
          }

          // Add delete  event
          if (e.target.tagName == "BUTTON") {
            attrs.modalType("confirm");
            openModal(true);
          }
          m.redraw();
        }
      });

      row.addEventListener("mouseout", (e) => {
        e.stopPropagation();
        if (e.currentTarget.tagName === "TR") {
          e.currentTarget.style.backgroundColor = "white";
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
            <table class="min-w-full leading-normal table-fixed">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="w-1/2 px-2 py-1 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Habit
                    <i
                      id="sort-name-desc"
                      class={
                        nameOrderAsc()
                          ? "relative left-2 fa fa-sort-asc"
                          : "relative left-2 fa fa-sort-desc"
                      }
                      aria-hidden="true"
                    ></i>
                  </th>
                  <th
                    scope="col"
                    class="px-2 py-1 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
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
                    class="w-1/12 text-center px-2 py-1 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
                  >
                    Initiated
                    <i
                      id="sort-date-desc"
                      class={
                        dateOrderAsc()
                          ? "relative left-2 fa fa-sort-asc"
                          : "relative left-2 fa fa-sort-desc"
                      }
                      aria-hidden="true"
                    ></i>
                  </th>
                  <th
                    scope="col"
                    class="flex w-1/12 text-center px-2 py-1 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal"
                  >
                    Completion
                    <i
                      id="sort-completion-desc"
                      class={
                        statusOrderAsc()
                          ? "relative left-2 fa fa-sort-asc"
                          : "relative left-2 fa fa-sort-desc"
                      }
                      aria-hidden="true"
                    ></i>
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 px-2 py-1 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal"
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
                    <td class="bg-transparent px-2 py-2 border-b border-gray-200 bg-white text-lg">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {DomainStore.current().name}
                      </p>
                    </td>
                    <td class="bg-transparent px-2 py-2 border-b border-gray-200 bg-white text-lg">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {DateTime.fromSQL(
                          habit.initiation_date
                        ).toLocaleString()}
                      </p>
                    </td>
                    <td class="bg-transparent h-24 flex items-center justify-center px-2 py-2 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
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
            <div class="px-2 bg-white py-2 flex flex-col xs:flex-row items-center xs:justify-between">
              <div class="flex items-center">
                <button
                  type="button"
                  class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
                >
                  1
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  4
                </button>
                <button
                  type="button"
                  class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default HabitDashboard;