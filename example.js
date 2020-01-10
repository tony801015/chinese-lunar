// Not DEV
const lunar = require('./index');

const data = lunar('2020', '01', '09').setChineseAge('甲子').getJson();
console.log(data); // 2020

// DEV
// const lunar = require('./index');

// console.log(lunar().getJson());｀