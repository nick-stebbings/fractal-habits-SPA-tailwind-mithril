import {
  positiveCol,
  negativeCol,
  noNodeCol
} from '../../../../../assets/scripts/d3-utilities';

import HabitStore from '../../../../../store/habit-store'

const DateCard = {
  view: ({ attrs: { date, completedStatus, today } }) => {
    const [weekday, month, monthday] = date
      .toLocaleString({
        month: 'short',
        weekday: 'short',
        day: 'numeric',
      })
      .split(/\W+/);
    const statusColour = (function () {
      switch (completedStatus) {
        case true:
          return positiveCol
        case false:
          return negativeCol
        default:
          return noNodeCol
      }
    }());
    return (
      <div
        className="date-card bg-gray-50 rounded-3xl flex flex-col items-center justify-start flex-grow gap-1 p-2 pt-1 -mt-2.5"
        style={`border-color: ${
          today ? "#e3922f" : "#fefefe"
        }; box-sizing: initial; border-width: 3px; max-width:125px`}
      >
        <span className="font-std block uppercase">{weekday||<br></br>}</span>
        <span className="font-std block text-xl">{monthday}</span>
        <span className="block">{month}</span>
        <svg className="w-10 h-10 mt-1" viewBox="0 0 48 48">
          <g transform="translate(12, 14)">
            <circle
              r="20"
              cx="12"
              cy="12"
              fill={statusColour}
              stroke="black"
            />
          </g>
        </svg>
        <i className="fa-solid fa-circle-info" />
        <m.route.Link
          href={
            !m.route.param("demo")
              ? `habits/list?currentHabit=${HabitStore.current()?.id}`
              : `habits/list?demo=true&currentHabit=${HabitStore.current()?.id}`
          }
          selector="a"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        </m.route.Link>
      </div>
    );
  },
};

export default DateCard;
