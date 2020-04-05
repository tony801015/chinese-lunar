/* eslint-disable no-unused-expressions */
let lunar;
process.env.DEV === 'true' ? lunar = require('./index') : lunar = require('./main');
const lunarTools = require('./src/tools');
const { cangGan, duodecimalCycle } = require('./src/config');

// console.log(process.memoryUsage());
// console.log(lunarTools.findTenGod('癸', '己')); // 副星
// console.log(cangGan[duodecimalCycle.indexOf('未')]); // 藏幹
const data = lunar('2008', '08', '01')
  // .setTime('00')
  // .setChineseAge('戊子')
  .getJson(); // '2008', '08', '01'
console.log(data);

// const lunar = require('@tony801015/chinese-lunar');
// console.log(lunar('2020', '04', '05').getShenGong()); // 身宮
// console.log(lunar('2020', '04', '05').getMingGong()); // 命宮
// console.log(lunar('2020', '04', '05').getKongWang('子', '甲')); // 空亡
// console.log(lunar('2020', '04', '05').getCangGan('子')); // 藏幹
// console.log(lunar('2020', '04', '05').getTaiYuan()); // 胎元  
// 八字
// console.log(`年=> ${data.chineseYear}, 十神=> ${data.chineseYearTenGod}`);
// console.log(`月=> ${data.chineseMonth}, 十神=> ${data.chineseMonthTenGod}`);
// console.log(`日=> ${data.chineseDay}, 十神=> ${data.chineseDayTenGod}`);
// console.log(`時=> ${data.chineseTime}, 十神=> ${data.chineseTimeTenGod}`);

// 胎元  月柱 己未  月干后位胎元干，月支后三胎元支。  己 -1 = 庚, 未 -3 = 未 申 酉 戌
const TaiYuan = lunar('2008', '08', '01')
  .setTime('00')
  .setChineseAge('戊子')
  .getJson();
// .getDuodecimalCycleToDecimalCycle('子');

// console.log(TaiYuan);
// 命宮  壬戌
// 身宮  庚申
// 陽(甲、丙、戊、庚、壬) 陰(乙、丁、己、辛、癸)
// 小運 時柱 分陽年(順推) 陰年(逆推)
// 大運 月柱 分陽年(順推) 陰年(逆推)
// 流年  年柱(出生年) 繼續往後推
// 流月  月柱(出生月) 繼續往後推


// console.log(`農曆月=> ${data.lunarMonth}, 農曆日=> ${data.lunarDay}`);
// console.log(`國曆月=> ${data.month}, 國曆日=> ${data.day}`);
// console.log(data);
// DEV
// const lunar = require('./index');

// console.log(lunar().getJson());｀
