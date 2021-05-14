import CreateForm from './view/components/Layout/Forms/CreateForm.jsx';
import AppendHabit from './view/pages/AppendHabit.jsx';

// Pages
import HabitDashboard from './view/pages/HabitDashboard.jsx';
import HabitTree from './view/pages/HabitTree.jsx';
import RadialTree from './view/pages/RadialTree.jsx';

const MenuRoutes = [
  {
    label: 'Visualise',
    path: '/vis',
    subpaths: {
      '/vis/habit-tree': {
        status: 'enabled',
        title: 'Habit Tree',
        description:
          'Traditional hierarchical Tree diagram showing habit nodes.',
        component: HabitTree,
        icon: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120.53"><defs><style>.cls-1{fill:none;stroke:#505050;stroke-miterlimit:10;stroke-width:2px;}</style></defs><title>tick-rosette</title><path class="cls-1" d="M90.68,115.61h0a11.7,11.7,0,0,0-17.7,5.6v0a3.09,3.09,0,0,1-5.55.54l0,0A11.69,11.69,0,0,0,49,119.69h0a3.09,3.09,0,0,1-5.29-1.76v0a11.7,11.7,0,0,0-16-9.37h0a3.09,3.09,0,0,1-4.12-3.76l0-.06A11.7,11.7,0,0,0,12.71,89.64h0a3.1,3.1,0,0,1-2.24-5.11l0,0A11.7,11.7,0,0,0,6.75,66.33h0a3.09,3.09,0,0,1,0-5.57l.07,0a11.7,11.7,0,0,0,3.95-18.1v0a3.09,3.09,0,0,1,2.29-5.08h.08a11.7,11.7,0,0,0,11-14.92v0a3.09,3.09,0,0,1,4.16-3.7l.06,0A11.72,11.72,0,0,0,44.45,9.73V9.68A3.1,3.1,0,0,1,49.77,8l0,0A11.71,11.71,0,0,0,68.24,6.24l0-.06a3.09,3.09,0,0,1,5.54.63v0a11.7,11.7,0,0,0,17.57,5.87l.06,0a3.09,3.09,0,0,1,4.8,2.83v0a11.7,11.7,0,0,0,13.66,12.52H110a3.09,3.09,0,0,1,3.24,4.54h0a11.71,11.71,0,0,0,7.38,17h.07a3.1,3.1,0,0,1,1.11,5.47h0a11.71,11.71,0,0,0-.18,18.55l0,0a3.09,3.09,0,0,1-1.21,5.45h0A11.7,11.7,0,0,0,112.73,96l0,0a3.09,3.09,0,0,1-3.31,4.49h0a11.69,11.69,0,0,0-13.89,12.3v0A3.09,3.09,0,0,1,90.68,115.61Z" transform="translate(-4 -3.74)"/><circle class="cls-1" cx="60" cy="60.26" r="38.71"/><polyline class="cls-1" points="46.18 60.26 57.23 71.32 76.59 46.44"/></svg>',
      },
      '/vis/habit-triangle': {
        title: 'Habit Triangle',
        description:
          'Fractal pyramid of habits. Navigate all the way up to the sky or drill down into the minutiae.',
        component: CreateForm,
        icon: '<svg class="w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path class="fill-current stroke-current" d="M66.513,111.15h51.061v-0.065a10.307,10.307,0,0,1-.9-1.58c-0.745-1.219-1.4-2.506-2.153-3.74-1.159-1.9-2.177-3.89-3.342-5.8-0.375-.617-0.707-1.271-1.092-1.9a4.46,4.46,0,0,1-.514-0.871H79.623V92.482h27.218V92.418a5.777,5.777,0,0,1-.707-1.225c-0.621-1.02-1.17-2.094-1.8-3.127-2-3.289-3.8-6.743-5.817-10.027-0.632-1.032-1.177-2.11-1.8-3.127-0.173-.282-0.318-0.57-0.482-0.838a1.213,1.213,0,0,0-.193-0.387H79.623V69.107H93.377V69.043l-9.865-17.12H44.468a16.3,16.3,0,0,1-.932,1.58c-0.709,1.159-1.323,2.37-2.025,3.514-0.3.489-.5,0.993-0.8,1.483-0.955,1.562-1.839,3.21-2.8,4.772-0.254.415-.421,0.841-0.675,1.257-0.622,1.019-1.168,2.094-1.8,3.127a6.968,6.968,0,0,0-.835,1.451h13.85v4.546a6.146,6.146,0,0,1-1.575.032H31.936l-10.8,18.8H48.453v4.675a3.542,3.542,0,0,1-.9.032H18.407a5.062,5.062,0,0,1-.643,1.1c-0.511.831-.946,1.7-1.446,2.515-1.212,1.982-2.264,4.061-3.47,6.029-0.254.416-.421,0.842-0.675,1.258-0.409.67-.772,1.378-1.189,2.063a4.456,4.456,0,0,0-.578,1H54.3a3.7,3.7,0,0,0,.514.129,2.746,2.746,0,0,1,1.221,1.064,2.509,2.509,0,0,1-1.414,3.578,4.675,4.675,0,0,1-1.253.065H8.51c-2.026,0-3.308.2-4.145-1.064a2.681,2.681,0,0,1-.193-2.289,10,10,0,0,1,.739-1.225c0.577-.942,1.074-1.905,1.607-2.87,0.781-1.415,1.631-2.847,2.474-4.223,0.3-.49.5-0.994,0.8-1.484,0.786-1.287,1.526-2.647,2.314-3.933,0.3-.489.5-0.994,0.8-1.483,1.2-1.971,2.261-4.042,3.47-6.029,3.209-5.269,6.065-10.8,9.287-16.056,0.969-1.582,1.8-3.237,2.764-4.8,0.255-.416.421-0.842,0.675-1.257,1-1.636,1.922-3.362,2.924-5,0.423-.69.735-1.4,1.157-2.1,1.291-2.112,2.467-4.338,3.76-6.448,0.468-.764.818-1.557,1.285-2.321,1.581-2.588,3.011-5.313,4.6-7.9,0.591-.965,1.049-1.969,1.639-2.934,2.254-3.688,4.266-7.567,6.523-11.252,0.591-.965,1.049-1.968,1.639-2.934,2.422-3.963,4.586-8.126,7.005-12.09,0.63-1.033,1.178-2.108,1.8-3.127,0.632-1.038.836-1.807,2.217-2.128a2.291,2.291,0,0,1,1.671.387,4.076,4.076,0,0,1,1.061,1.451c0.575,0.946,1.087,1.942,1.671,2.9,2.627,4.317,4.976,8.846,7.616,13.155,0.714,1.165,1.28,2.381,1.992,3.547,2.254,3.688,4.266,7.567,6.523,11.252,0.591,0.964,1.049,1.969,1.639,2.934C87.575,49.53,89.15,52.543,90.9,55.4c0.423,0.69.735,1.4,1.157,2.1,1.291,2.112,2.467,4.338,3.76,6.448,0.3,0.489.5,0.994,0.8,1.483,0.954,1.562,1.839,3.211,2.8,4.772,0.3,0.489.5,0.994,0.8,1.483,0.786,1.287,1.525,2.647,2.313,3.933,0.3,0.489.5,0.994,0.8,1.483,3.507,5.739,6.617,11.766,10.122,17.507,0.712,1.167,1.279,2.38,1.992,3.547,2.254,3.688,4.274,7.562,6.524,11.253,0.376,0.616.652,1.253,1.028,1.87a8.019,8.019,0,0,1,.9,1.612,2.6,2.6,0,0,1-.29,2.031c-0.809,1.221-2.095,1.064-4.081,1.064H66.255c-1.591,0-3.132.18-3.824-.742-0.772-1.028-.611-2.206-0.61-3.965V72.654H61.789v0.032a5.7,5.7,0,0,0-.578.87c-0.439.662-.887,1.337-1.35,2-1.033,1.479-2.05,3-3.085,4.482-0.417.6-.756,1.227-1.189,1.805a2.441,2.441,0,0,1-3.374.226,2.394,2.394,0,0,1-.707-2.354,4.623,4.623,0,0,1,.771-1.322c0.281-.4.5-0.817,0.771-1.225,1.023-1.541,2.088-3.1,3.149-4.611,1.369-1.954,2.623-3.987,3.985-5.932,0.566-.808,1.1-1.639,1.639-2.45a3.152,3.152,0,0,1,1.317-1.386c2.3-.969,3.313,1.343,4.113,2.547C69.8,69.173,72.441,72.977,75,76.813c0.364,0.546.683,1.1,1.06,1.644a5.274,5.274,0,0,1,.611.9,2.64,2.64,0,0,1-.289,2.386A2.369,2.369,0,0,1,73,82.133,4.281,4.281,0,0,1,72.168,81c-0.433-.653-0.877-1.3-1.317-1.967-0.694-1.046-1.434-2.1-2.153-3.127-0.325-.464-0.575-0.954-0.9-1.419a16.344,16.344,0,0,1-1.253-1.838H66.513v38.5ZM63.974,18a9.455,9.455,0,0,1-.643,1.1c-0.418.684-.779,1.395-1.189,2.064-0.97,1.581-1.8,3.237-2.764,4.8-0.591.964-1.049,1.969-1.639,2.934-1.75,2.863-3.324,5.876-5.077,8.737-0.377.616-.653,1.253-1.028,1.87-1.034,1.7-1.947,3.48-2.989,5.191-0.331.544-.625,1.119-0.964,1.677a3.548,3.548,0,0,0-.482.838H80.78V47.151a3.6,3.6,0,0,1-.321-0.58c-0.286-.468-0.54-0.968-0.835-1.451-0.914-1.494-1.713-3.069-2.635-4.578-3-4.915-5.668-10.08-8.676-14.992-1.09-1.78-2.035-3.648-3.117-5.416-0.3-.483-0.549-0.983-0.835-1.451A2.463,2.463,0,0,0,63.974,18Z"/></svg>',
      },
      // '/vis/date-lines': {
      //   title: 'Date Compare',
      //   description:
      //     'See how your different habits have overlapped over time using this line diagram.',
      //   component: CreateForm,
      //   icon: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 102.27"><defs><style>.cls-1{fill:none;stroke:#505050;stroke-miterlimit:10;stroke-width:4px;}</style></defs><title>Untitled-1</title><path class="cls-1" d="M77.81,30.27c-6.07-2-11.76-1.49-15.23,2L56.44,38.4c-6.11,6.11-5.37,21.34,4.48,31.18s22.79,12.87,28.9,6.76l8.43-8.44c3.41-3.4,4-8.93,2.09-14.86" transform="translate(-10 -12.49)"/><path class="cls-1" d="M76.1,66.56a33.13,33.13,0,0,0,4.8,2.53C87.75,72,94.38,71.78,98.25,67.9" transform="translate(-10 -12.49)"/><path class="cls-1" d="M62.58,32.25c-6.11,6.11-3.07,19,6.78,28.89" transform="translate(-10 -12.49)"/><path class="cls-1" d="M114.22,35.71c3.39-3.39,1.79-10.49-3.58-15.86s-12.48-7-15.88-3.58l-1.39,1.39C90,21.06,91.59,28.16,97,33.53s12.48,7,15.87,3.58Z" transform="translate(-10 -12.49)"/><path class="cls-1" d="M92.54,26.66c-.44.43-15.62,15.62-16.06,16.06-2.3,2.3-1.64,6.7,1.48,9.82s7.52,3.77,9.82,1.47L103.84,38" transform="translate(-10 -12.49)"/><polyline class="cls-1" points="18.05 72.75 27.23 81.93 43.28 61.29"/><path class="cls-1" d="M66.77,81.3',
      // },
      '/vis/radial-tree': {
        title: 'Radial Tree',
        description:
          'A pretty hierarchical tree diagram where your habits branch off from the centre of a circle.',
        component: RadialTree,
        icon: '<svg class="w-14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 358.4 358.4" style="enable-background:new 0 0 358.4 358.4;" xml:space="preserve"><path class="stroke-current" d="M345.135,12.4c-7.2-8-17.6-12.4-28.4-12.4s-21.2,4.4-28.8,12c-7.6,7.6-12,18-12,28.8c0,8.8,2.8,17.2,8,24.4l-14.4,14.4    c-18.4-16.4-42-25.6-66.8-25.6c-27.2,0-52.4,10.4-71.6,29.6c-14.8,14.8-24.4,33.2-28,53.6l-20-2.4c-0.4-8.8-3.2-17.2-8.8-24    c-6.8-8.4-16.4-14-27.2-15.2c-22.8-2.8-42.8,13.6-45.6,35.6c-1.2,10.8,1.6,21.6,8.4,30c6.8,8.4,16.4,14,27.2,15.2    c1.6,0,3.2,0.4,4.8,0.4c18.4,0,34.4-12.4,39.2-30l20,2.4c0,2-0.4,4-0.4,6c0,27.2,10.4,52.4,29.6,71.6    c19.2,19.2,44.4,29.6,71.6,29.6c2.4,0,5.2,0,7.6-0.4l2.8,22c-19.2,5.2-32.4,24-29.6,44.4c2.4,20.4,20,36,40.4,36    c1.6,0,3.2,0,4.8-0.4c10.8-1.2,20.4-6.8,27.2-15.2c6.8-8.4,9.6-19.2,8.4-30c-2.4-20-19.2-35.2-39.2-36l-2.8-22    c19.6-4,37.6-13.2,52-27.6c19.2-19.2,29.6-44.4,29.6-71.6c0-24.8-9.2-48.4-25.6-67.2l14.4-14.4c6.8,5.2,15.6,8,24.4,8    c10.8,0,21.2-4.4,28.8-12C361.135,54,361.135,28,345.135,12.4z M70.735,140c-1.6,15.2-15.6,26.8-32,24.8    c-7.6-0.8-14.4-4.8-19.2-10.8s-6.8-13.6-6-21.2c1.6-14.4,14-25.2,28.4-25.2c1.2,0,2.4,0,3.6,0.4c7.6,0.8,14.4,4.8,19.2,10.8    S71.535,132.4,70.735,140z M139.535,92.4c16.8-16.8,39.2-26,62.8-26c21.6,0,42.4,8,58.4,22l-23.2,23.2c-10-8-22.4-12.4-35.2-12.4    c-14.8,0-29.2,6-39.6,16.4c-7.6,7.6-12.8,16.8-14.8,27.2l-32.8-4C118.335,121.2,126.735,105.2,139.535,92.4z M202.735,244.4    c-23.6,0-46-9.2-62.8-26s-26-39.2-26-62.8c0-1.6,0-3.2,0.4-4.4l32.8,4c0,0.4,0,0.4,0,0.8c0,15.2,6,29.2,16.4,39.6    c10.8,10.8,24.8,16.4,39.6,16.4c0.8,0,1.6,0,2.4,0l4,32.8C206.735,244,204.735,244.4,202.735,244.4z M202.735,199.2    c-11.6,0-22.8-4.4-31.2-12.8c-8.4-8.4-12.8-19.6-12.8-31.2s4.4-22.8,12.8-31.2c8.4-8.4,19.2-12.8,31.2-12.8    c11.6,0,22.8,4.4,31.2,12.8c17.2,17.2,17.2,45.2,0,62.4C225.535,194.8,214.335,199.2,202.735,199.2z M223.935,288.4    c14.4,0,26.4,11.2,28.4,25.6c0.8,7.6-1.2,15.2-6,21.2s-11.6,10-19.2,10.8c-16,2-30-9.6-32-25.2c-2-15.6,9.2-30,25.2-32    C221.535,288.8,222.735,288.4,223.935,288.4z M291.535,155.2c0,23.6-9.2,46-26,62.8c-12.4,12.4-28,20.8-44.8,24.4l-4-32.8    c9.6-2.4,18.4-7.6,25.6-14.4c20.4-20.4,21.6-52.8,4-74.8l23.2-23.2C283.935,112.8,291.535,133.6,291.535,155.2z M337.135,61.6    c-5.6,5.6-12.8,8.4-20.4,8.4c-7.6,0-14.8-2.8-20.4-8.4c-5.6-5.6-8.4-12.8-8.4-20.4c0-7.6,2.8-14.8,8.4-20.4    c5.6-5.6,12.8-8.4,20.4-8.4c7.6,0,14.8,2.8,20.4,8.4C348.335,32,348.335,50.4,337.135,61.6z"/></svg>',
      },
    },
  },
  {
    label: 'Habits',
    path: '/habits',
    subpaths: {
      '/habits/new': {
        title: 'Append Habit',
        status: 'enabled',
        description:
          'Create a completely blank habit and attach it to your other habits.',
        component: AppendHabit,
        icon: '<svg class="w-14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 358.4 358.4" style="enable-background:new 0 0 358.4 358.4;" xml:space="preserve"><path class="stroke-current" d="M345.135,12.4c-7.2-8-17.6-12.4-28.4-12.4s-21.2,4.4-28.8,12c-7.6,7.6-12,18-12,28.8c0,8.8,2.8,17.2,8,24.4l-14.4,14.4    c-18.4-16.4-42-25.6-66.8-25.6c-27.2,0-52.4,10.4-71.6,29.6c-14.8,14.8-24.4,33.2-28,53.6l-20-2.4c-0.4-8.8-3.2-17.2-8.8-24    c-6.8-8.4-16.4-14-27.2-15.2c-22.8-2.8-42.8,13.6-45.6,35.6c-1.2,10.8,1.6,21.6,8.4,30c6.8,8.4,16.4,14,27.2,15.2    c1.6,0,3.2,0.4,4.8,0.4c18.4,0,34.4-12.4,39.2-30l20,2.4c0,2-0.4,4-0.4,6c0,27.2,10.4,52.4,29.6,71.6    c19.2,19.2,44.4,29.6,71.6,29.6c2.4,0,5.2,0,7.6-0.4l2.8,22c-19.2,5.2-32.4,24-29.6,44.4c2.4,20.4,20,36,40.4,36    c1.6,0,3.2,0,4.8-0.4c10.8-1.2,20.4-6.8,27.2-15.2c6.8-8.4,9.6-19.2,8.4-30c-2.4-20-19.2-35.2-39.2-36l-2.8-22    c19.6-4,37.6-13.2,52-27.6c19.2-19.2,29.6-44.4,29.6-71.6c0-24.8-9.2-48.4-25.6-67.2l14.4-14.4c6.8,5.2,15.6,8,24.4,8    c10.8,0,21.2-4.4,28.8-12C361.135,54,361.135,28,345.135,12.4z M70.735,140c-1.6,15.2-15.6,26.8-32,24.8    c-7.6-0.8-14.4-4.8-19.2-10.8s-6.8-13.6-6-21.2c1.6-14.4,14-25.2,28.4-25.2c1.2,0,2.4,0,3.6,0.4c7.6,0.8,14.4,4.8,19.2,10.8    S71.535,132.4,70.735,140z M139.535,92.4c16.8-16.8,39.2-26,62.8-26c21.6,0,42.4,8,58.4,22l-23.2,23.2c-10-8-22.4-12.4-35.2-12.4    c-14.8,0-29.2,6-39.6,16.4c-7.6,7.6-12.8,16.8-14.8,27.2l-32.8-4C118.335,121.2,126.735,105.2,139.535,92.4z M202.735,244.4    c-23.6,0-46-9.2-62.8-26s-26-39.2-26-62.8c0-1.6,0-3.2,0.4-4.4l32.8,4c0,0.4,0,0.4,0,0.8c0,15.2,6,29.2,16.4,39.6    c10.8,10.8,24.8,16.4,39.6,16.4c0.8,0,1.6,0,2.4,0l4,32.8C206.735,244,204.735,244.4,202.735,244.4z M202.735,199.2    c-11.6,0-22.8-4.4-31.2-12.8c-8.4-8.4-12.8-19.6-12.8-31.2s4.4-22.8,12.8-31.2c8.4-8.4,19.2-12.8,31.2-12.8    c11.6,0,22.8,4.4,31.2,12.8c17.2,17.2,17.2,45.2,0,62.4C225.535,194.8,214.335,199.2,202.735,199.2z M223.935,288.4    c14.4,0,26.4,11.2,28.4,25.6c0.8,7.6-1.2,15.2-6,21.2s-11.6,10-19.2,10.8c-16,2-30-9.6-32-25.2c-2-15.6,9.2-30,25.2-32    C221.535,288.8,222.735,288.4,223.935,288.4z M291.535,155.2c0,23.6-9.2,46-26,62.8c-12.4,12.4-28,20.8-44.8,24.4l-4-32.8    c9.6-2.4,18.4-7.6,25.6-14.4c20.4-20.4,21.6-52.8,4-74.8l23.2-23.2C283.935,112.8,291.535,133.6,291.535,155.2z M337.135,61.6    c-5.6,5.6-12.8,8.4-20.4,8.4c-7.6,0-14.8-2.8-20.4-8.4c-5.6-5.6-8.4-12.8-8.4-20.4c0-7.6,2.8-14.8,8.4-20.4    c5.6-5.6,12.8-8.4,20.4-8.4c7.6,0,14.8,2.8,20.4,8.4C348.335,32,348.335,50.4,337.135,61.6z"/></svg>',
      },
      '/habits/list': {
        title: 'Habit List',
        status: 'enabled',
        description: 'A flat list of all Habits for your perusal.',
        component: HabitDashboard,
        icon: '<svg class="w-16 pl-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path id="magnify_1" style="fill: black; stroke-linecap:round;stroke-linejoin:round; stroke-width: 1px;" data-name="magnify 1" class="cls-1" d="M59.429,15.01A38.892,38.892,0,0,1,78.77,19.4a41,41,0,0,1,15.3,13.392,32.951,32.951,0,0,1,3.278,5.379c0.786,1.8,1.361,3.591,2.076,5.489h0.109v-0.11c2.374-1.553,4.07-4.1,6.338-5.818l1.639-1.756c0.836-.635,3.536-2.891,3.933-3.732-1.686-1.34-1.4-6.128-.437-8.013,1.325-2.589,5.214-5.964,9.726-4.5a11.617,11.617,0,0,1,3.278,1.647c3.338,2.494,4.039,8.169,1.311,11.856-1.085,1.466-4.6,3.913-7.758,3.183-1.111-.257-2.054-0.716-3.06-0.988a6.839,6.839,0,0,1-.983.878,33.385,33.385,0,0,1-3.279,3.074l-1.2,1.317a25.169,25.169,0,0,1-2.513,2.2l-1.639,1.756a31.74,31.74,0,0,0-3.169,2.964c-0.433.433-.993,0.527-1.092,1.317,0.381,0.575.158,1.512,0.327,2.305a17.482,17.482,0,0,1,.219,6.257c-0.288,1.323.069,2.494-.219,3.732-0.747,3.218-1.15,6.317-2.294,9.111a39.535,39.535,0,0,1-2.513,5.379c-0.519.857-1.442,1.754-1.639,2.854,1.4,0.933,2.532,2.543,3.715,3.732l7.758,7.794c3.66,3.677,7.376,7.3,11.036,10.978,1.63,1.637,3.657,3.181,5.027,5.049,2.192,2.99,2.084,8.38-.765,10.648-2.55,2.029-6.4,3.247-9.835,1.1a23.519,23.519,0,0,1-3.715-3.623l-7.43-7.464L88.714,95.145,84.889,91.3a11.77,11.77,0,0,1-1.639-1.647c-2.016.96-3.891,2.463-6.01,3.4a63.188,63.188,0,0,1-7.1,2.415c-4.9,1.5-13.516,1.479-18.358,0a62.481,62.481,0,0,1-6.338-1.866A42.386,42.386,0,0,1,27.085,78.679a39.929,39.929,0,0,1-3.715-6.806c-0.459-1.056-.926-3.5-1.53-4.281a14.38,14.38,0,0,1-1.967,1.976l-1.639,1.866A5.345,5.345,0,0,0,16.7,73.08c1.595,1.66,1.191,5.875.219,7.794-1.458,2.877-5.284,6.031-9.944,4.5a10.631,10.631,0,0,1-2.95-1.537C-0.048,80.793.075,73.4,4.138,70.446c1.381-1.005,4.019-2.3,6.556-1.647,1.049,0.269,1.986.829,2.95,1.1,1.1-1.675,3.166-3.289,4.589-4.72a18.317,18.317,0,0,1,2.513-2.634A24.047,24.047,0,0,1,20.2,58.7V56.175c-0.56-2.809.631-8.419,1.311-10.648a53.765,53.765,0,0,1,1.858-5.818A41.272,41.272,0,0,1,45.442,17.974a56.271,56.271,0,0,1,9.179-2.525ZM59.32,19.4l-4.48.439a53.792,53.792,0,0,0-8.3,2.415A36.95,36.95,0,0,0,26.866,42.673a51.062,51.062,0,0,0-1.858,6.7c-0.713,2.78-.433,6.009-0.437,9.111h0.109l10.709-11.2c-1.149-1.2-1.43-4.231-.874-6.147,1.16-4,3.411-5.775,7.758-6.586,1.393-.26,3.581.727,4.371,1.208,2.724,1.656,3.568,2.85,4.371,6.477a4.924,4.924,0,0,1,.109,1.756l-0.437,1.866a9.9,9.9,0,0,1,2.295,1.427c1.8,1.129,3.608,2.184,5.354,3.293,3.451,2.192,6.976,4.208,10.381,6.367,1.5,0.952,3.693,1.764,4.917,2.964,1.023-.362,2.034-1.586,3.278-2.086,2.621-1.053,5.007,0,7.1.549a14.345,14.345,0,0,1,3.169-2.964l1.2-1.317a25.94,25.94,0,0,1,2.623-2.305l1.639-1.756c0.73-.555,3.052-2.342,3.169-3.293-0.532-.8-0.494-2.037-0.874-2.964a45.028,45.028,0,0,0-3.06-6.586C85.666,27.135,75.522,19.441,59.32,19.4Zm59.334,4.281V23.9a3.954,3.954,0,0,0-4.043,3.074c-0.738,2.8,2.1,5.744,4.808,5.05,2.153-.552,4.512-3.35,2.841-6.147C121.291,24.254,120.287,24.491,118.654,23.682ZM42.711,38.831a4.147,4.147,0,0,1-1.093.22,4.833,4.833,0,0,0-2.295,1.537,4.283,4.283,0,0,0,2.623,6.586c2.684,0.655,5.568-2.627,4.917-4.83C46.135,39.878,44.9,39.755,42.711,38.831Zm5.464,10.648c-0.966,1.274-4.586,2.619-7.1,1.976-0.976-.25-1.793-0.81-2.732-0.988a29.442,29.442,0,0,1-3.934,4.062c-1.876,1.885-3.588,3.933-5.464,5.818-0.812.816-3.347,2.761-3.5,3.952,0.661,1,.626,2.595,1.093,3.732a42.671,42.671,0,0,0,2.732,5.928C34.54,82.616,41.8,88.188,52.654,91.3c5.259,1.51,13.11,1.016,17.811-.549,11.77-3.918,19.064-10.251,23.712-21.3a54.392,54.392,0,0,0,2.295-7.684c0.346-1.375,0-2.685.328-4.171a15.01,15.01,0,0,0-.109-5.269H96.582v0.11l-9.507,8.892a14.935,14.935,0,0,1,1.2,3.183,7.8,7.8,0,0,1-.437,3.952c-1.227,3.363-3.135,4.838-6.884,5.708a7.338,7.338,0,0,1-3.278-.11c-4.172-1.349-6.718-4.709-6.01-10.319a51.5,51.5,0,0,1-6.01-3.732c-3.771-2.368-7.587-4.447-11.364-6.806-1.462-.913-2.977-1.795-4.48-2.744A5.838,5.838,0,0,0,48.174,49.479ZM79.863,61.664a9.944,9.944,0,0,1-1.311.219,5,5,0,0,0-2.076,1.537A4.313,4.313,0,0,0,78.989,69.9a4.218,4.218,0,0,0,4.917-5.05C83.37,62.908,82,62.04,79.863,61.664ZM9.383,72.971a7.182,7.182,0,0,1-1.2.22A4.832,4.832,0,0,0,6.1,74.617c-2.089,2.926-.042,6.067,2.732,6.7,2.708,0.615,5.4-2.6,4.48-5.379C12.679,74.01,11.31,73.646,9.383,72.971Zm82.282,9a21.647,21.647,0,0,1-4.917,4.94v0.219L108.6,108.976l3.606,3.623a6.847,6.847,0,0,0,1.967,1.756,4.482,4.482,0,0,0,3.606-.329,3.764,3.764,0,0,0,1.093-1.537c1.523-3.033-2.194-5.607-3.715-7.135L98.439,88.668l-4.7-4.72C93.14,83.345,92.511,82.278,91.664,81.972Z"/> </svg>',
      },
      '/habits/edit': {
        title: 'Link Habits',
        description:
          'Link existing behaviors to a new habit or move habits around.',
        component: CreateForm,
        icon: '<svg class="w-14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 358.4 358.4" style="enable-background:new 0 0 358.4 358.4;" xml:space="preserve"><path class="stroke-current" d="M345.135,12.4c-7.2-8-17.6-12.4-28.4-12.4s-21.2,4.4-28.8,12c-7.6,7.6-12,18-12,28.8c0,8.8,2.8,17.2,8,24.4l-14.4,14.4    c-18.4-16.4-42-25.6-66.8-25.6c-27.2,0-52.4,10.4-71.6,29.6c-14.8,14.8-24.4,33.2-28,53.6l-20-2.4c-0.4-8.8-3.2-17.2-8.8-24    c-6.8-8.4-16.4-14-27.2-15.2c-22.8-2.8-42.8,13.6-45.6,35.6c-1.2,10.8,1.6,21.6,8.4,30c6.8,8.4,16.4,14,27.2,15.2    c1.6,0,3.2,0.4,4.8,0.4c18.4,0,34.4-12.4,39.2-30l20,2.4c0,2-0.4,4-0.4,6c0,27.2,10.4,52.4,29.6,71.6    c19.2,19.2,44.4,29.6,71.6,29.6c2.4,0,5.2,0,7.6-0.4l2.8,22c-19.2,5.2-32.4,24-29.6,44.4c2.4,20.4,20,36,40.4,36    c1.6,0,3.2,0,4.8-0.4c10.8-1.2,20.4-6.8,27.2-15.2c6.8-8.4,9.6-19.2,8.4-30c-2.4-20-19.2-35.2-39.2-36l-2.8-22    c19.6-4,37.6-13.2,52-27.6c19.2-19.2,29.6-44.4,29.6-71.6c0-24.8-9.2-48.4-25.6-67.2l14.4-14.4c6.8,5.2,15.6,8,24.4,8    c10.8,0,21.2-4.4,28.8-12C361.135,54,361.135,28,345.135,12.4z M70.735,140c-1.6,15.2-15.6,26.8-32,24.8    c-7.6-0.8-14.4-4.8-19.2-10.8s-6.8-13.6-6-21.2c1.6-14.4,14-25.2,28.4-25.2c1.2,0,2.4,0,3.6,0.4c7.6,0.8,14.4,4.8,19.2,10.8    S71.535,132.4,70.735,140z M139.535,92.4c16.8-16.8,39.2-26,62.8-26c21.6,0,42.4,8,58.4,22l-23.2,23.2c-10-8-22.4-12.4-35.2-12.4    c-14.8,0-29.2,6-39.6,16.4c-7.6,7.6-12.8,16.8-14.8,27.2l-32.8-4C118.335,121.2,126.735,105.2,139.535,92.4z M202.735,244.4    c-23.6,0-46-9.2-62.8-26s-26-39.2-26-62.8c0-1.6,0-3.2,0.4-4.4l32.8,4c0,0.4,0,0.4,0,0.8c0,15.2,6,29.2,16.4,39.6    c10.8,10.8,24.8,16.4,39.6,16.4c0.8,0,1.6,0,2.4,0l4,32.8C206.735,244,204.735,244.4,202.735,244.4z M202.735,199.2    c-11.6,0-22.8-4.4-31.2-12.8c-8.4-8.4-12.8-19.6-12.8-31.2s4.4-22.8,12.8-31.2c8.4-8.4,19.2-12.8,31.2-12.8    c11.6,0,22.8,4.4,31.2,12.8c17.2,17.2,17.2,45.2,0,62.4C225.535,194.8,214.335,199.2,202.735,199.2z M223.935,288.4    c14.4,0,26.4,11.2,28.4,25.6c0.8,7.6-1.2,15.2-6,21.2s-11.6,10-19.2,10.8c-16,2-30-9.6-32-25.2c-2-15.6,9.2-30,25.2-32    C221.535,288.8,222.735,288.4,223.935,288.4z M291.535,155.2c0,23.6-9.2,46-26,62.8c-12.4,12.4-28,20.8-44.8,24.4l-4-32.8    c9.6-2.4,18.4-7.6,25.6-14.4c20.4-20.4,21.6-52.8,4-74.8l23.2-23.2C283.935,112.8,291.535,133.6,291.535,155.2z M337.135,61.6    c-5.6,5.6-12.8,8.4-20.4,8.4c-7.6,0-14.8-2.8-20.4-8.4c-5.6-5.6-8.4-12.8-8.4-20.4c0-7.6,2.8-14.8,8.4-20.4    c5.6-5.6,12.8-8.4,20.4-8.4c7.6,0,14.8,2.8,20.4,8.4C348.335,32,348.335,50.4,337.135,61.6z"/></svg>',
      },
    },
  },
  // {
  //   label: 'Objectives',
  //   path: '/obj',
  //   subpaths: {
  //     '/obj/list': {
  //       title: 'List Objectives',
  //       description: 'A flat list of all objectives for your perusal.',
  //       component: HabitNodeList,
  //       icon:
  //         '<svg class="w-14 pl-2 mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1,.cls-2,.cls-3{fill:none;stroke:#000;stroke-linecap:round; stroke-width: 1px;}.cls-1,.cls-2{stroke-linejoin:round;}.cls-3{stroke-miterlimit:10;stroke-width:0.94px;}</style></defs><title/><path class="stroke-current cls-1" d="M15,5.5a2,2,0,0,0-2-2,2,2,0,0,0-4,0,2,2,0,0,0-2,2v1h8Z"/><path class="stroke-current cls-1" d="M18.5,20.5a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1h1"/><path class="stroke-current cls-1" d="M16.5,4.5h1a1,1,0,0,1,1,1v3"/><polyline class="cls-2" points="16.57 14.29 17.97 16 20.43 13"/><circle class="cls-3" cx="18.5" cy="14.5" r="4.5"/><line class="cls-2" x1="6.5" x2="13" y1="10.5" y2="10.5"/><line class="cls-2" x1="6.5" x2="11.5" y1="13.5" y2="13.5"/><line class="cls-2" x1="6.5" x2="12" y1="16.5" y2="16.5"/></svg>',
  //     },
  //     '/obj/new': {
  //       title: 'New Objective',
  //       description: 'Create a completely blank objective.',
  //       component: HabitNodeList,
  //       icon:
  //         '<svg class="w-14 pl-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;stroke-linecap:round; stroke-width: 1px;stroke-linejoin:round;}</style></defs><title/><path class="stroke-current cls-1" d="M8.79,11.93l3.82-6.48a.76.76,0,0,1,1.44,0l9,15.21"/><path class="stroke-current cls-1" d="M11.05,16l1.42-1.43a1.21,1.21,0,0,1,1.71,0l1.92,1.92a1.21,1.21,0,0,0,1.71,0L19.37,15"/><path class="stroke-current cls-1" d="M1,20.66l4.85-8.24c.21-.37.56-.37.78,0l4.85,8.24"/><path class="stroke-current cls-1" d="M3,17.57l.85.85a.65.65,0,0,0,.93,0l1-1a.66.66,0,0,1,.92,0l1,1a.65.65,0,0,0,.93,0l.84-.85"/><path class="stroke-current cls-1" d="M8.45,6.34a1.22,1.22,0,0,0-1,1.38"/><path class="stroke-current cls-1" d="M7.42,7.72A1.21,1.21,0,0,0,6,6.7"/><path class="stroke-current cls-1" d="M5.45,3.34a1.22,1.22,0,0,0-1,1.38"/><path class="stroke-current cls-1" d="M4.42,4.72A1.21,1.21,0,0,0,3,3.7"/></svg>',
  //     },
  //     '/obj/edit': {
  //       title: 'Compose with Habits',
  //       description:
  //         'Link existing behaviors to a new objective, or move habits from one objective to the other.',
  //       component: HabitNodeList,
  //       icon:
  //         '<svg class="w-14 pl-2 mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;stroke-linecap:round; stroke-width: 1px;stroke-linejoin:round;}</style></defs><title/><polyline class="cls-1" points="14.63 20.5 14.63 12.5 20.63 12.5 18.63 14.5 20.63 16.5 16.63 16.5"/><path class="stroke-current cls-1" d="M6.75,4.5H10.1c6,0,6.53,2.94,1.21,6.53L6.94,14C1.62,17.56,2.17,20.5,8.15,20.5h4.22"/><circle class="cls-1" cx="5" cy="4.5" r="1.5"/></svg>',
  //     },
  //   },
  // },
];

MenuRoutes.selected = 'Habits'; // Default Page

export default MenuRoutes;
