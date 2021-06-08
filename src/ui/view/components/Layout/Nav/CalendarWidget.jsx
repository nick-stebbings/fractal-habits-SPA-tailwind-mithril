import { select } from 'd3-selection';
import {
  positiveCol, negativeCol, noNodeCol, neutralCol,
} from '../../../../assets/scripts/d3-utilities';
import HabitStore from '../../../../store/habit-store';
import HabitDateStore from '../../../../store/habit-date-store';
import DateStore from '../../../../store/date-store';

const CalendarWidget = {
  oninit: () => {
    DateStore.index().then(() => {
      DateStore.indexDatesOfHabit(HabitStore.current()?.id)
    });
  },
  oncreate: () => {
    const nodeRadius = 24;
    const currentHabit = HabitStore.current();
    HabitDateStore.indexForHabitPeriod(currentHabit.id).then((data) => {
      console.log(data);
      const statuses = data.map((date) => ({
        date_id: date.date_id,
        completed_status: date.completed_status,
      }));
      const dates = statuses.map((statusObj) => {
        return DateStore.dateFromDateObjectArray(statusObj.date_id, DateStore.list())
      });
      console.log('dates :>> ', dates);
      console.log('statuses :>> ', statuses);

      select('.this')
        .append('g')
        .attr('transform', 'translate(50, 85)')
        .selectAll('circle')
        .data(statuses)
        .enter()
        .append('circle')
        .attr('r', nodeRadius)
        .attr('fill', (d) => (d.completed_status == 'true' ? positiveCol : negativeCol))
        .attr('cx', (d, i) => i * 25);
    });
  },
  view: () => (
    <div className="w-4/5">
      <svg className="this bg-balance-tershades-gray left-32 top-28 rounded-3xl h-3/4 absolute w-full ml-2 mr-4" />
    </div>
  ),
};

export default CalendarWidget;
