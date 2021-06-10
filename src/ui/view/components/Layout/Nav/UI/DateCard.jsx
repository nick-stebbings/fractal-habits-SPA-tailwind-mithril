import {
  positiveCol,
  negativeCol,
  noNodeCol,
  neutralCol,
} from '../../../../../assets/scripts/d3-utilities';

const DateCard = {
  view: ({ attrs: { date, completedStatus } }) => {
    console.log(completedStatus);
    const [weekday, month, monthday] = date
      .toLocaleString({
        month: 'short',
        weekday: 'short',
        day: 'numeric',
      })
      .split(/\W+/);
    return (
      <div
        className="date-card bg-gray-50 rounded-2xl flex flex-col items-center justify-start h-48 gap-1 p-2 pt-3 -mt-2"
      >
        <span className="font-std block uppercase">{weekday}</span>
        <span className="font-std block text-5xl">{monthday}</span>
        <span className="block">{month}</span>
        <svg className="w-12 h-12 mt-1" viewBox="0 0 48 48">
          <g transform="translate(12, 14)">
            <circle
              r="20"
              cx="12"
              cy="12"
              fill={completedStatus ? positiveCol : negativeCol}
              stroke="black"
            />
          </g>
        </svg>
        <button>DETAILS</button>
      </div>
    );
  },
};

export default DateCard;
