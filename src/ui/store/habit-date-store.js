import stream from 'mithril/stream';
import { clientRoutes, handleErrorType } from './client';

const basePath = '/habit_dates';

const HabitDateStore = Object.assign(clientRoutes(basePath), {
  current: stream({}),

  clear: () => {
    HabitDateStore.current = stream({});
    HabitDateStore.list = stream([]);
    HabitDateStore.fullList = stream([]);
  },

  list: stream([]),
  fullList: stream([]),

  showPeriodForHabit: (habitId, periodLength = 6) => clientRoutes(`/habits/${habitId}/habit_dates?length=${periodLength}`).show_all(),

  index: () => HabitDateStore.show_all()
    .then((response) => JSON.parse(response.data).habit_dates)
    .then(HabitDateStore.fullList)
    .catch(handleErrorType),

  indexForHabitPeriod: (id, length) => HabitDateStore.showPeriodForHabit(id, length)
    .then((response) => JSON.parse(response.data).habit_dates)
    .then(HabitDateStore.list)
    .catch(handleErrorType),

  submit: (attrs) => {
    HabitDateStore.create(attrs)
      .then(HabitDateStore.current)
      .catch(handleErrorType);
  },

  filterListByHabitId: (habitId) => HabitDateStore.fullList().filter(
    (habitDate) => habitDate.habit_id == +habitId,
  ),

  filterByDate: (dateId) => HabitDateStore.list()?.filter((habitDate) => habitDate.date_id === +dateId),

  runFilter: (habitId) => HabitDateStore.list(HabitDateStore.filterListByHabitId(habitId)),

  runDateFilterOnCurrentList: (dateId) => HabitDateStore.list(HabitDateStore.filterByDate(dateId)),

  runUpdate: (isDemo, values, domainId) => {
    const payload = JSON.stringify(values);
    return (
      isDemo
        ? clientRoutes(
          `/demo/domains/${domainId}/habit_dates/${values.date_id}`,
        ).replace('', payload)
        : HabitDateStore.replace('', payload)
    )
      .then(HabitDateStore.current)
      .catch(handleErrorType);
  },
});

export default HabitDateStore;
