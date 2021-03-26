const stream = require('mithril/stream');

const s1 = stream(1);
console.log(s1());
const s2 = s1.map((val) => new Promise((resolve) => setTimeout(() => resolve(val * 3), 3000)));
s2().then((val) => {
  console.log(val * 2);
});
