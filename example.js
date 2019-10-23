const { ApplicationLunar } = require('./index');

const Lunar = new ApplicationLunar('2020', '03', '05', '壬子');

// Json format
console.log(Lunar.getJson());

// BasicLunar
console.log(Lunar.year, Lunar.month, Lunar.day);
console.log(`${Lunar.chineseYear}/${Lunar.chineseMonth}/${Lunar.chineseDay}`);
console.log(`${Lunar.lunarMonth}/${Lunar.lunarDay}`);
console.log(`${Lunar.solarTerms}`);
console.log(`${Lunar.week}`);
console.log(`${Lunar.chineseTime}`);
console.log(`${Lunar.animal}`);

// AdvancedLunar
console.log(`${Lunar.chineseTimeTenGod}`);
console.log(`${Lunar.dengGui}`);
console.log(Lunar.leapMonth);
console.log(Lunar.lunarPerMonthHasDays);

// ApplicationLunar
console.log(Lunar.getTenGod('壬', Lunar.chineseDay.split('')[0]));