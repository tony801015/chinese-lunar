// Not DEV
const lunar = require('./index');

const data = lunar('2020', '01', '09').getJson();
console.log(data.year); // 2020

// DEV
// const lunar = require('./index');

// console.log(lunar().getJson());｀