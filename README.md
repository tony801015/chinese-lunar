# 命理基本的查詢

![npm](https://img.shields.io/npm/v/@tony801015/chinese-lunar)
![npm](https://img.shields.io/npm/dm/@tony801015/chinese-lunar)
[![Build Status](https://travis-ci.org/tony801015/chinese-lunar.svg?branch=master)](https://travis-ci.org/tony801015/chinese-lunar)
[![Coverage Status](https://coveralls.io/repos/github/tony801015/chinese-lunar/badge.svg?branch=master)](https://coveralls.io/github/tony801015/chinese-lunar?branch=master)

只要輸入年月日，就可以轉換成`年柱`,`月柱`,`日柱`,`時柱`,`農曆月`,`農曆日`,`節氣`,`星期`,`生肖`,`星座`的資訊

近期會頻繁的更新，但整體的架構未來會劃分為三個 `BasicLunar`、`AdvancedLunar`、 `ApplicationLunar` 可以依照你的需求去使用唷。 小提醒：Application 包含前面兩者的功能，如果使用 Advance 就無法使用 Application 的功能。

# ChangeLog

- 2019/10/16 `0.5.0`版本提供了`.getJson()`的方法讓大家可以方便取得所有資訊。
- 2019/10/17 `0.6.0`版本提供了`生肖`的查詢。
- 2019/10/18 `0.6.2`版本提供了十神的查詢，新增在`ApplicationLunar`，所以要使用此方法需 new ApplicationLunar()。
- 2019/10/19 `0.6.4`版本提供了此年的閏月是哪一個月份的查詢，新增在`AdvancedLunar`。
- 2019/10/21 `0.7.0`版本提供了更長的範圍，從 1956 到 1900 補齊囉～接下來應該就會再往 2050 年之後邁進
- 2019/10/23 `0.8.0`版本提供了`星座`，可以從`.getJson()`的`constellation`property 拿到
- 2019/10/23 `0.8.1`版本修復十神，十神需提供使用者出生的年柱做搭配

# 使用範例

```
npm i @tony801015/chinese-lunar -S
```

```js
const {
  AdvancedLunar,
  AdvancedLunar,
  ApplicationLunar
} = require("@tony801015/chinese-lunar");

const Lunar = new ApplicationLunar("2020", "03", "05", "壬子");

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
//   animal: '鼠',
//   constellation: '雙魚座',
//   chineseTimeTenGod: [ 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官', 'ㄗ', '印' ],
//   dengGui: '亥丑',
//   leapMonth: 4
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
console.log(Lunar.leapMonth); // 4

// ApplicationLunar
console.log(Lunar.getTenGod("壬", Lunar.chineseDay.split("")[0])); // 財
```

# 分享

設定檔 `config.js` 裡面有一些整理過的資訊，希望可以幫助到大家對於命理上的研究。歡迎大家找我討論～

# 注意事項

- 目前計算的時間以 1900 年開始至 2050 年，1900 以前的都無法計算。

# 未來規劃

未來會再增加

- 星座 `BasicLunar` 2019/10/23 完成 `0.8.0`
- 此年的閏月是幾月 `AdvancedLunar` 2019/10/19 完成 `0.6.4`
- 此年的農曆中每個月有多少天 `AdvancedLunar`
- 農曆日期的差距有幾天 `AdvancedLunar`
- 十神的查詢 `ApplicationLunar` 2019/10/17 完成 `0.6.2`
- 提供時間的輸入，在八字裡面其實就是把`年`,`月`,`日`,`時`轉成`年柱`,`月柱`,`日柱`,`時柱`，因此要把八字更精準推出命理相關的數據，需要`時`的協助囉。
