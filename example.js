// Not DEV
const lunar = require('./index');

const data = lunar(
  '2021', '02', '13'
)
  .setTime('00')
  .setChineseAge('壬子')
  .getJson();
console.log(`年=> ${data.chineseYear}, 十神=> ${data.chineseYearTenGod}`); // 年=> 辛丑, 十神=> 印
console.log(`月=> ${data.chineseMonth}, 十神=> ${data.chineseMonthTenGod}`); // 月=> 庚寅, 十神=> ㄗ
console.log(`日=> ${data.chineseDay}, 十神=> ${data.chineseDayTenGod}`); // 日=> 壬辰, 十神=> 比
console.log(`時=> ${data.chineseTime}, 十神=> ${data.chineseTimeTenGod}`); // 時=> 庚子, 十神=> ㄗ


// DEV
// const lunar = require('./index');

// console.log(lunar().getJson());｀