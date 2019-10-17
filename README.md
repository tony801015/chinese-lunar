# 命理基本的查詢
![npm](https://img.shields.io/npm/v/@tony801015/chinese-lunar)
![npm](https://img.shields.io/npm/dm/@tony801015/chinese-lunar)
[![Build Status](https://travis-ci.org/tony801015/chinese-lunar.svg?branch=master)](https://travis-ci.org/tony801015/chinese-lunar)
[![Coverage Status](https://coveralls.io/repos/github/tony801015/chinese-lunar/badge.svg?branch=master)](https://coveralls.io/github/tony801015/chinese-lunar?branch=master)

只要輸入年月日，就可以轉換成`年柱`,`月柱`,`日柱`,`時柱`,`農曆月`,`農曆日`,`節氣`,`星期`,`生肖`的資訊  

近期會頻繁的更新，但整體的架構未來會劃分為三個 `BasicLunar`、`AdvancedLunar`、 `ApplicationLunar` 可以依照你的需求去使用唷。 小提醒：Application包含前面兩者的功能，如果使用Advance就無法使用Application的功能。

# ChangeLog
- 2019/10/16 `0.5.0`版本提供了`.getJson()`的方法讓大家可以方便取得所有資訊。  
- 2019/10/17 `0.6.0`版本提供了`生肖`的查詢。

# 使用範例
```
npm i @tony801015/chinese-lunar -S
```

```js
const { AdvancedLunar, AdvancedLunar, ApplicationLunar } = require('@tony801015/chinese-lunar');

const Lunar = new AdvancedLunar('2020', '03', '05');

// Json format
console.log(Lunar.getJson());
// { 
//   year: '2020',
//   month: '03',
//   day: '05',
//   solarTerms: '驚蟄',
//   lunarMonth: '二月',
//   lunarDay: '十二',
//   chineseYear: '庚子',
//   chineseMonth: '己卯',
//   chineseDay: '丁未',
//   chineseTime: [ '庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥' ],
//   week: '4',
//   chineseTimeTenGod: [ '財', '才', '官', '殺', '印', 'ㄗ', '劫', '比', '傷', '食', '財', '才' ],
//   dengGui: '亥丑',
//   animal: '鼠' 
// }

// BasicLunar
console.log(Lunar.year, Lunar.month, Lunar.day); // 2020 03 05
console.log(`${Lunar.chineseYear}/${Lunar.chineseMonth}/${Lunar.chineseDay}`); // 庚子/己卯/丁未
console.log(`${Lunar.lunarMonth}/${Lunar.lunarDay}`); // 二月/十二
console.log(`${Lunar.solarTerms}`); // 驚蟄
console.log(`${Lunar.week}`); // 4
console.log(`${Lunar.chineseTime}`); // 庚子,辛丑,壬寅,癸卯,甲辰,乙巳,丙午,丁未,戊申,己酉,庚戌,辛亥
console.log(`${Lunar.animal}`); // 鼠

// AdvancedLunar 時間的十神, 登貴
console.log(`${Lunar.chineseTimeTenGod}`); // 財,才,官,殺,印,ㄗ,劫,比,傷,食,財,才
console.log(`${Lunar.dengGui}`); // 亥丑

// ApplicationLunar
// To be continued.
```

# 分享

設定檔 `config.js` 裡面有一些整理過的資訊，希望可以幫助到大家對於命理上的研究。歡迎大家找我討論～

# 注意事項
- 目前計算的時間以1956年開始至2050年，1956以前的都無法計算。

# 未來規劃

未來會再增加 
- 星座 `BasicLunar`
- 此年的閏月是幾月 `AdvancedLunar`
- 此年的農曆中每個月有多少天 `AdvancedLunar`
- 農曆日期的差距有幾天 `AdvancedLunar`
- 十神的查詢 `ApplicationLunar` 2019/10/17 完成 `0.6.2`
- 
