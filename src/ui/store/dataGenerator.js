import * as fc from 'd3fc';

const mapToHash = function (ary) {
  const jsonObj = {};
  ary.forEach((el, i) => {
    jsonObj[String(i)] = el;
  });
  return jsonObj;
};

const trueOrFalse = function (num) {
  return Math.round(num) >= 1 ? 'true' : 'false';
};

const generateData = function (numHabits = 1, length = 28) {
  let data = [];
  for (let i = 1; i <= numHabits; i++) {
    data.push(
      mapToHash(
        fc
        .randomGeometricBrownianMotion()
        .mu(0.75)
        .sigma(0.65)
        .period(2)
        .steps(length - 1)(0.35)
        .map(trueOrFalse)
      )
    );
  }
  return data
};

export { generateData };