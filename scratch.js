const stream = require('mithril/stream');

const s1 = stream(1);
console.log(s1());
const s2 = s1.map((val) => new Promise((resolve) => setTimeout(() => resolve(new Date()), 3000)));
s2().then((val) => {
  console.log(val * 2);
});

function sanitiseForValueChange(date) {
  return typeof date === 'string' && date.h_date
    ? date.h_date.split(' ')[0]
    : new Date().toDateInputValue();
}
