import HabitStore from "../../store/habit-store";
import HabitDateStore from "../../store/habit-date-store";
import DateStore from "../../store/date-store";
import DomainStore from "../../store/domain-store";

import {
  positiveCol,
  neutralCol,
  negativeCol,
} from "../../assets/scripts/d3-utilities";

import FilterList from "../components/Layout/FilterList.jsx";
import CancelButton from "../components/Layout/Nav/UI/Buttons/CancelButton.jsx";

const getStatusColor = (habit) => {
  // TODO refactor filter running into store
  let status =
    HabitDateStore.runFilter(habit.id).filter(
      (habitDate) => habitDate.date_id === DateStore.current().id
    ).length > 0 &&
    String(
      HabitDateStore.list().filter(
        (habitDate) => habitDate.date_id === DateStore.current().id
      )[0].completed_status
    );
  switch (status) {
    case "true":
      return positiveCol;
    case "false":
      return negativeCol;
    default:
      return neutralCol;
  }
};

const HabitDashboard = {
  oninit: () => {},
  view: () => (
    <div class="container mx-auto max-w-3xl">
      {/* List component from www.tailwind-kit.com */}
      <div class="py-8">
        <FilterList></FilterList>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Habit
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Domain
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Initiated On
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Completion Today
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {HabitStore.list().map((habit) => (
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <div>
                          <p class="text-gray-900 whitespace-no-wrap">
                            {habit.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {DomainStore.current().name}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {habit.initiation_date}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
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
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <CancelButton
                        id={`delete-habit-${habit.id}`}
                        name={"d"}
                        disabled={"false"}
                        label={"Delete"}
                        // class={""}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
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
