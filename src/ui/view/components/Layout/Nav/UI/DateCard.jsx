import DateTime from 'luxon/src/datetime.js';

const DateCard = {
  view: ({ attrs: { date } }) => {
    debugger;
    return (
      <div
        className="date-card bg-balance-tershades-gray rounded-3xl flex flex-col"
        style="width:150px"
      >
        {console.log(date)}
      </div>
    );
  },
};

export default DateCard;
