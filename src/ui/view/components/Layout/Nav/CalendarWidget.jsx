import { select } from 'd3-selection';
import {
  positiveCol, negativeCol, noNodeCol, neutralCol,
} from '../../../../assets/scripts/d3-utilities';
import HabitStore from '../../../../store/habit-store';
import HabitDateStore from '../../../../store/habit-date-store';

const CalendarWidget = {
  oncreate: () => {
    const nodeRadius = 12;
    const currentHabit = HabitStore.current();
    console.log('currentHabit :>> ', currentHabit);
    HabitDateStore.indexForHabitPeriod(currentHabit.id).then((data) => {
      console.log(data);
      const dates = data.map((date) => ({
        date_id: date.date_id,
        completed_status: date.completed_status,
      }));
      console.log(select('.this').selectAll('circle').data(dates));
      select('.this')
        .append('g')
        .attr('transform', 'translate(150, 0)')
        .selectAll('circle')
        .data(dates)
        .enter()
        .append('circle')
        .attr('r', nodeRadius)
        .attr('fill', (d) => (d.completed_status == 'true' ? positiveCol : negativeCol))
        .attr('cx', (d, i) => i * 25);
    });
  },
  view: () => <svg className="this w-full h-full bg-white" />,
};

export default CalendarWidget;
