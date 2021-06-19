import stream from "mithril/stream";
import DateTime from "luxon/src/datetime.js";

import HabitStore from '../../../../store/habit-store';
import HabitDateStore from '../../../../store/habit-date-store';
import DateStore from '../../../../store/date-store';

import DateCard from './UI/DateCard.jsx';
import { changeOfModelContext } from "../../../../assets/scripts/controller";

const calendarDates = stream([]);
const statuses = stream([]);

const CalendarWidget = {
  oninit: () => {
    const notUptoDate =
      HabitDateStore.filterByDate(DateStore.current()?.id)?.length === 0;
    const currentHabit = HabitStore.current();

    if (DateStore.listForHabit().length === 0 || notUptoDate || changeOfModelContext()) {
      console.log('reloaded habit date list :>> ');
      DateStore.index().then(() => {
        DateStore.indexDatesOfHabit(
          currentHabit?.id
        );
      });
    }

    const trackedDates = HabitDateStore.list()?.length;
    if (calendarDates()?.length === 0 || notUptoDate) {
      HabitDateStore.indexForHabitPeriod(currentHabit?.id, 28)
        .then((data) => {
          statuses(
            data?.map((date) => ({
              date_id: date.date_id,
              completed_status: date.completed_status,
            }))
          );
          console.log(data, "habit statuses");
          console.log(
            "DateStore.listForHabit().reverse() ",
            DateStore.listForHabit().reverse()
          );
          const dates =
            statuses() &&
            statuses()
              .map((statusObj) => {
                return (
                  DateStore.dateFromDateObjectArray(
                    statusObj.date_id,
                    DateStore.listForHabit().reverse()
                  ) || ""
                );
              })
              .slice(-7);
          
          console.log(dates, 'dates');
          calendarDates(dates);
        }).then(m.redraw)
        .catch(console.log);
    }
  },
  view: () => (
    <div className="top-28 rounded-3xl lg:flex right-6 flex-nowrap absolute justify-end hidden w-full h-full pt-1">
      <div
        className="date-card-wrapper rounded-3xl flex-end -mt-14 border-1 flex w-full gap-2 bg-transparent"
        style="max-width:60%"
      >
        {calendarDates()?.map((date, idx) => (
          <DateCard
            date={date}
            today={date.toLocaleString() === DateTime.now().startOf("day").toLocaleString()}
            completedStatus={statuses() && statuses()[idx]?.completed_status}
          />
        ))}
      </div>
    </div>
  ),
};

export default CalendarWidget;
