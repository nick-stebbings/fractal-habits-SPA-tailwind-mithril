import DateTime from "luxon/src/datetime.js";
import DateStore from '../../../../store/date-store';

import DateCard from './UI/DateCard.jsx';

import { changedDate } from "../../../../assets/scripts/controller";

const CalendarWidget = {
  oninit: ({ attrs: { calendarDates, statuses } }) => {

    changedDate(false);
  },
  view: ({ attrs: { calendarDates, statuses } }) => (
    <div className="top-28 rounded-3xl lg:flex right-6 flex-nowrap absolute justify-end hidden w-full h-full pt-1">
      <div
        className="date-card-wrapper rounded-3xl flex-end -mt-14 border-1 flex justify-end w-full gap-2 bg-transparent"
        style="max-width:75%"
      >
        {calendarDates()?.map((date, idx) => (
          <DateCard
            date={date}
            today={
              date.toLocaleString() ===
              DateTime.fromSQL(DateStore.current()?.h_date).toLocaleString()
            }
            completedStatus={statuses() && statuses()[idx]?.completed_status}
          />
        ))}
      </div>
    </div>
  ),
};

export default CalendarWidget;