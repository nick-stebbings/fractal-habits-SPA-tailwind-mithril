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
        weekday: "short",
        day: "numeric",
      })
      .split(/\W+/);
    return (
      <div
        className="date-card bg-gray-50 rounded-3xl flex flex-col items-center justify-start h-48 gap-1 pt-1 -mt-1"
        style="width:120px"
      >
        <span className="font-std block uppercase">{weekday}</span>
        <span className="font-std block text-5xl">{monthday}</span>
        <span className="block">{month}</span>
        <svg class="h-12 mt-1 w-12" viewBox="0 0 48 52">
          <g transform="translate(12, 16)">
            <circle
              r="24"
              cx="12"
              cy="12"
              fill={completedStatus ? positiveCol : negativeCol}
              stroke="black"
            />
          </g>
        </svg>
      </div>
    );
  },
};

export default DateCard;
