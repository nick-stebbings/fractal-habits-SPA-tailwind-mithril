import stream from "mithril/stream";

import HabitStore from '../../../../store/habit-store';
import HabitDateStore from '../../../../store/habit-date-store';
import DateStore from '../../../../store/date-store';

import DateCard from './UI/DateCard.jsx';

const calendarDates = stream(['','','','','','','',]);
const statuses = stream([]);

const CalendarWidget = {
  oninit: () => {
    console.log(DateStore.current());
    !DateStore.current() && DateStore.index().then(() => {
      DateStore.indexDatesOfHabit(HabitStore.current()?.id);
    })
    const currentHabit = HabitStore.current();
    HabitDateStore.indexForHabitPeriod(currentHabit.id).then((data) => {
      statuses(data.map((date) => ({
        date_id: date.date_id,
        completed_status: date.completed_status,
      })));
      console.log(statuses().length);
      const dates = statuses().map((statusObj) => {
        // console.log(
        //   statusObj, DateStore.listForHabit()
        //   );
          return DateStore.dateFromDateObjectArray(
            statusObj.date_id,
            DateStore.list()
          );
      });

      calendarDates(dates);
    });
  },
  view: () => (
    <div className="h-3/4 left-32 top-28 rounded-3xl lg:flex absolute justify-end hidden w-5/6">
      <div className="date-card-wrapper rounded-3xl flex-end flex gap-1 -mt-8 bg-transparent">
        {calendarDates().map((date, idx) => <DateCard date={date} completedStatus={statuses()[idx]?.completed_status} />)}
      </div>
    </div>
  ),
};

export default CalendarWidget;
