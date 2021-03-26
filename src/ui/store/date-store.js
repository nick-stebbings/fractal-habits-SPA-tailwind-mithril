import stream from 'mithril/stream';
import { clientRoutes, handleErrorType } from './client';

const basePath = '/dates';

function sanitiseForValueChange(date) {
  return (typeof date() === 'object' && typeof date().h_date === 'string')
    ? date().h_date.split(' ')[0]
    : new Date().toDateInputValue();
}

const DateStore = Object.assign(clientRoutes(basePath), {
  current: stream(),

  get: (id) => DateStore.show_one(id)
    .then((response) => JSON.parse(response.data))
    .then(DateStore.current)
    .catch(handleErrorType),

  clear: () => {
    DateStore.current = stream({});
  },

  list: stream([]),

  index: () => DateStore.show_all()
    .then((response) => JSON.parse(response.data).dates)
    .then(DateStore.list)
    .then((list) => {
      DateStore.current(list[list.length - 1]);
    })
    .catch(handleErrorType),

  submit: (attrs) => DateStore.create(attrs)
    .then((response) => {
      const date = response.data;
      console.log('date response', response);
      return date;
    })
    .then(DateStore.current)
    .then(() => {
      window.FlashMessage.success('Dates were added to the database!');
    })
    .catch(handleErrorType),
});

DateStore.currentDate = stream.combine(
  sanitiseForValueChange,
  [DateStore.current,
  ],
);
export default DateStore;
