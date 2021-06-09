import {
  positiveCol,
  negativeCol,
  noNodeCol,
  neutralCol,
} from "../../../../../assets/scripts/d3-utilities";

const DateCard = {
  view: ({ attrs: { date, completedStatus } }) => {
    console.log(completedStatus);
    const [weekday, month, monthday] = date
      .toLocaleString({
        month: "short",
        weekday: "long",
        day: "numeric",
      })
      .split(/\W+/);
    return (
      <div
        className="date-card bg-balance-tershades-gray rounded-3xl flex flex-col items-center justify-start pt-2"
        style="width:150px"
      >
        <span className="block">{weekday}</span>
        <span className="block text-4xl">{monthday}</span>
        <span className="block">{month}</span>
        <svg class="h-12 mt-1 w-12" viewBox="0 0 48 52">
          <g transform="translate(12, 16)">
            <circle
              r="24"
              cx="12"
              cy="12"
              fill={completedStatus ? positiveCol : negativeCol}
            />
          </g>
        </svg>
      </div>
    );
  },
};

export default DateCard;
