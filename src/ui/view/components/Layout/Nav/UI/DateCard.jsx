import {
  positiveCol,
  negativeCol,
  noNodeCol,
  neutralCol,
} from '../../../../../assets/scripts/d3-utilities';

import tree from '../../../../../assets/images/icons/tree.svg';

const DateCard = {
  view: ({ attrs: { date, completedStatus } }) => {
    const [weekday, month, monthday] = date
      .toLocaleString({
        month: 'short',
        weekday: 'short',
        day: 'numeric',
      })
      .split(/\W+/);
    return (
      <div className="date-card bg-gray-50 rounded-2xl flex flex-col items-center justify-start flex-grow h-48 gap-1 p-2 pt-2 -mt-2">
        <span className="font-std block uppercase">{weekday}</span>
        <span className="font-std block text-5xl">{monthday}</span>
        <span className="block">{month}</span>
        {console.log(completedStatus)}
        <svg className="w-10 h-10 mt-1" viewBox="0 0 48 48">
          <g transform="translate(12, 14)">
            <circle
              r="20"
              cx="12"
              cy="12"
              fill={completedStatus === 'true' ? positiveCol : negativeCol}
              stroke="black"
            />
          </g>
        </svg>
        <i className="fa-solid fa-circle-info" />
        <m.route.Link
          href={m.route.param('demo') ? '/' : '/?demo=true'}
          selector="a"
        >
          <img src={tree} className="w-12 h-12" alt="Link to habit tree page" />
        </m.route.Link>
        <m.route.Link
          href={m.route.param('demo') ? '/' : '/?demo=true'}
          selector="a"
        >
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
