// src/ui/view/components/DashboardDashboard.jsx

const Dashboard = {
  view: ({ attrs, children }) => (
    <div class="container mt-8 w-full">
      <div class="mb-16 w-full leading-normal text-gray-800 md:px-0 md:mt-8">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 xl:w-1/3 p-3">
            <div class="p-2 bg-white rounded border shadow">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="p-3 bg-green-600 rounded">
                    <i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h5 class="font-bold text-gray-500 uppercase">
                    Total Revenue
                  </h5>
                  <h3 class="text-3xl font-bold">
                    $3249{" "}
                    <span class="text-green-500">
                      <i class="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 p-3">
            <div class="p-2 bg-white rounded border shadow">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="p-3 bg-pink-600 rounded">
                    <i class="fas fa-users fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h5 class="font-bold text-gray-500 uppercase">Total Users</h5>
                  <h3 class="text-3xl font-bold">
                    249{" "}
                    <span class="text-pink-500">
                      <i class="fas fa-exchange-alt"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 p-3">
            <div class="p-2 bg-white rounded border shadow">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="p-3 bg-yellow-600 rounded">
                    <i class="fas fa-user-plus fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h5 class="font-bold text-gray-500 uppercase">New Users</h5>
                  <h3 class="text-3xl font-bold">
                    2{" "}
                    <span class="text-yellow-600">
                      <i class="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 p-3">
            <div class="p-2 bg-white rounded border shadow">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="p-3 bg-blue-600 rounded">
                    <i class="fas fa-server fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h5 class="font-bold text-gray-500 uppercase">
                    Server Uptime
                  </h5>
                  <h3 class="text-3xl font-bold">152 days</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 p-3">
            <div class="p-2 bg-white rounded border shadow">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="p-3 bg-indigo-600 rounded">
                    <i class="fas fa-tasks fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h5 class="font-bold text-gray-500 uppercase">To Do List</h5>
                  <h3 class="text-3xl font-bold">7 tasks</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 p-3">
            <div class="p-2 bg-white rounded border shadow">
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="p-3 bg-balance-buttonbg-close rounded">
                    <i class="fas fa-inbox fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h5 class="font-bold text-gray-500 uppercase">Issues</h5>
                  <h3 class="text-3xl font-bold">
                    3{" "}
                    <span class="text-balance-buttonbg-close">
                      <i class="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-8 mx-4 border-b-2 border-gray-400" />

        <div class="flex flex-row flex-wrap flex-grow mt-2">
          <div class="w-full md:w-1/2 xl:w-1/3 p-3">
            <div class="bg-white rounded border shadow">
              <div class="p-3 border-b">
                <h5 class="font-bold text-gray-600 uppercase">Template</h5>
              </div>
              <div class="p-5"></div>
            </div>
          </div>

          <div class="p-3 w-full">
            <div class="bg-white rounded border shadow">
              <div class="p-3 border-b">
                <h5 class="font-bold text-gray-600 uppercase">Table</h5>
              </div>
              <div class="p-5">
                <table class="p-5 w-full text-gray-700">
                  <thead>
                    <tr>
                      <th class="text-left text-blue-900">Name</th>
                      <th class="text-left text-blue-900">Side</th>
                      <th class="text-left text-blue-900">Role</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Obi Wan Kenobi</td>
                      <td>Light</td>
                      <td>Jedi</td>
                    </tr>
                    <tr>
                      <td>Greedo</td>
                      <td>South</td>
                      <td>Scumbag</td>
                    </tr>
                    <tr>
                      <td>Darth Vader</td>
                      <td>Dark</td>
                      <td>Sith</td>
                    </tr>
                  </tbody>
                </table>

                <p class="py-2">
                  <a href="#">See More issues...</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default Dashboard;
