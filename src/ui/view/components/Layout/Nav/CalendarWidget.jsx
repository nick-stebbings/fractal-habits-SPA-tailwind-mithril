import stream from "mithril/stream";

import HabitStore from '../../../../store/habit-store';
import HabitDateStore from '../../../../store/habit-date-store';
import DateStore from '../../../../store/date-store';

import DateCard from './UI/DateCard.jsx';

const calendarDates = stream(['','','','','','','',]);
const statuses = stream([]);

const CalendarWidget = {
  oninit: () => {
    console.log('!DateStore.current()?.h_date :>> ', !DateStore.current()?.h_date);
    !DateStore.current()?.h_date && DateStore.index().then(() => {
      DateStore.indexDatesOfHabit(HabitStore.current()?.id);
    })
    const currentHabit = HabitStore.current();
    let trackedDates = HabitDateStore.list().length;
    trackedDates === 0 && HabitDateStore.indexForHabitPeriod(currentHabit.id, 7).then(
      (data) => {
        statuses(
          data.map((date) => ({
            date_id: date.date_id,
            completed_status: date.completed_status,
          }))
        );
        console.log(data, 'habit statuses');
        const dates = statuses().map((statusObj) => {
          return DateStore.dateFromDateObjectArray(
            statusObj.date_id,
            DateStore.list()
          );
        });

        calendarDates(dates);
      }
    );
  },
  view: () => (
    <div className="h-full top-28 rounded-3xl lg:flex right-6 flex-nowrap absolute justify-end hidden w-full pt-1">
      <div className="date-card-wrapper rounded-3xl flex-end -mt-14 border-1 flex w-full gap-2 bg-transparent" style="max-width:60%">
        {calendarDates().map((date, idx) => <DateCard date={date} completedStatus={statuses()[idx]?.completed_status} />)}
      </div>
    </div>
  ),
};

export default CalendarWidget;
