const BasicLunar = require('./BasicLunar');

const Lunar = new BasicLunar('2021', '02', '13');

console.log(Lunar.year, Lunar.month, Lunar.day);
console.log(`${Lunar.chineseYear}/${Lunar.chineseMonth}/${Lunar.chineseDay}`);
console.log(`${Lunar.lunarMonth}/${Lunar.lunarDay}`);
console.log(`${Lunar.solarTerms}`);
console.log(`${Lunar.week}`);
console.log(`${Lunar.chineseTime}`);