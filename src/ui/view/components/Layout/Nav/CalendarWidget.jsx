import { select } from 'd3-selection';
import stream from "mithril/stream";

import {
  positiveCol, negativeCol, noNodeCol, neutralCol,
} from '../../../../assets/scripts/d3-utilities';

import HabitStore from '../../../../store/habit-store';
import HabitDateStore from '../../../../store/habit-date-store';
import DateStore from '../../../../store/date-store';

import DateCard from './UI/DateCard.jsx';

const calendarDates = stream();

const CalendarWidget = {
  oninit: () => {
    DateStore.index().then(() => {
      DateStore.indexDatesOfHabit(HabitStore.current()?.id);
    });
  },
  oncreate: () => {
    const nodeRadius = 24;
    const currentHabit = HabitStore.current();
    HabitDateStore.indexForHabitPeriod(currentHabit.id).then((data) => {
      const statuses = data.map((date) => ({
        date_id: date.date_id,
        completed_status: date.completed_status,
      }));
      const dates = statuses.map((statusObj) => {
        return DateStore.dateFromDateObjectArray(
          statusObj.date_id,
          DateStore.list()
        );
      });
      calendarDates(dates);
      console.log("dates :>> ", dates);
      console.log("statuses :>> ", statuses);

      select(".this")
        .append("g")
        .attr("transform", "translate(75, 100)")
        .selectAll("circle")
        .data(statuses.reverse())
        .enter()
        .append("circle")
        .attr("r", nodeRadius)
        .attr("fill", (d) =>
          d.completed_status == "true" ? positiveCol : negativeCol
        )
        .attr("cx", (d, i) => i * 158);
    });
  },
  view: () => (
    <div className="h-1/2 left-32 top-28 rounded-3xl lg:static absolute hidden w-5/6">
      <svg className="this z-20 mr-4 bg-transparent" />
      <div className="date-card-wrapper h-1/2 rounded-3xl flex-end z-10 flex gap-1 -mt-32 bg-transparent">
        {calendarDates() &&
          calendarDates().map((date) => <DateCard date={date} />)
        }
      </div>
    </div>
  ),
};

export default CalendarWidget;
