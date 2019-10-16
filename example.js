const { AdvancedLunar } = require('./index');

const Lunar = new AdvancedLunar('2020', '03', '05');

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

// ApplicationLunar