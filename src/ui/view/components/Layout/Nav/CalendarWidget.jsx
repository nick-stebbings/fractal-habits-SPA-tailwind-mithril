import stream from "mithril/stream";
import DateTime from "luxon/src/datetime.js";

import HabitStore from '../../../../store/habit-store';
import HabitDateStore from '../../../../store/habit-date-store';
import DateStore from '../../../../store/date-store';

import DateCard from './UI/DateCard.jsx';

import { changeOfModelContext, changedDate } from "../../../../assets/scripts/controller";
export const calendarDates = stream([]);
const statuses = stream();

const CalendarWidget = {
  oninit: () => {
    const notUptoDate =
      HabitDateStore.filterByDate(DateStore.current()?.id)?.length === 0;
    const currentHabit = HabitStore.current();
    const noParams = !m.route.param("demo");
    console.log(notUptoDate, 'notUptoDate')
    console.log(calendarDates(), "calendarDates()");

    if (!m.route.param("demo") && (calendarDates()?.length === 0 || calendarDates().some(date => date === ''))) {
      HabitDateStore.indexForHabitPeriod(currentHabit?.id, 28)
        .then((data) => {
          statuses(
            data?.map((date) => ({
              date_id: date.date_id,
              completed_status: date.completed_status,
            }))
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
          calendarDates(dates);
        })
        .then(m.redraw)
        .catch(console.log);
    } else if ((noParams && DateStore.listForHabit().length === 0) || changedDate() == "updating" || changeOfModelContext()) {
      calendarDates(
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
          .slice(-7)
      );
    }
    changedDate(false);
  },
  view: () => (
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
