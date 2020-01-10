# 命理基本的查詢

![npm](https://img.shields.io/npm/v/@tony801015/chinese-lunar)
![npm](https://img.shields.io/npm/dm/@tony801015/chinese-lunar)
[![Build Status](https://travis-ci.org/tony801015/chinese-lunar.svg?branch=master)](https://travis-ci.org/tony801015/chinese-lunar)
[![Coverage Status](https://coveralls.io/repos/github/tony801015/chinese-lunar/badge.svg?branch=master)](https://coveralls.io/github/tony801015/chinese-lunar?branch=master)

目前已提供`年柱`,`月柱`,`日柱`,`時柱`,`農曆月`,`農曆日`,`節氣`,`星期`,`生肖`,`星座`的資訊

# ChangeLog

- 2020/01/08 `0.12.1-beta`版本提供更簡單的使用方式，預設當前時間，也可以自訂自己使用的時間。
- 2019/10/24 `0.9.0`版本提供了此年的農曆中每個月有多少天`getLunarPerMonthHasDays`，這裡可以搭配`0.6.4`版推出的閏月是哪一天來應用。
- 2019/10/23 `0.8.0`版本提供了`星座`，可以從`.getJson()`的`constellation`property 拿到
- 2019/10/23 `0.8.1`版本修復十神，十神需提供使用者出生的年柱做搭配
- 2019/10/21 `0.7.0`版本提供了更長的範圍，從 1956 到 1900 補齊囉～接下來應該就會再往 2050 年之後邁進
- 2019/10/19 `0.6.4`版本提供了此年的閏月是哪一個月份的查詢，新增在`AdvancedLunar`。
- 2019/10/18 `0.6.2`版本提供了十神的查詢，新增在`ApplicationLunar`，所以要使用此方法需 new ApplicationLunar()。
- 2019/10/17 `0.6.0`版本提供了`生肖`的查詢。
- 2019/10/16 `0.5.0`版本提供了`.getJson()`的方法讓大家可以方便取得所有資訊。

# 使用範例

```
npm i @tony801015/chinese-lunar -S
```

### 預設使用方式

```js
const lunar = require("@tony801015/chinese-lunar");
console.log(lunar().getJson()); // 抓取目前的年,月,日
```

### 自定日期

```js
const lunar = require("@tony801015/chinese-lunar");
console.log(lunar("2020", "01", "09").getJson()); // 抓取目前的年,月,日
```

### 取得參數

```js
const lunar = require("@tony801015/chinese-lunar");
const data = lunar("2020", "01", "09").getJson();
console.log(data.year); // 2020
console.log(data.week); // 4
console.log(data.constellation); // 魔羯座
```

|      中文名稱      |       參數名稱       |  型態   |                                                範例                                                |
| :----------------: | :------------------: | :-----: | :------------------------------------------------------------------------------------------------: |
|         年         |         year         | string  |                                                2020                                                |
|         月         |        month         | string  |                                                 01                                                 |
|         日         |         day          | string  |                                                 09                                                 |
|        節氣        |      solarTerms      | string  |                                                小寒                                                |
|       農曆月       |      lunarMonth      | string  |                                                腊月                                                |
|       農曆日       |       lunarDay       | string  |                                                十五                                                |
|     年柱     |     chineseYear      | string  |                                                己亥                                                |
|     月柱     |     chineseMonth     | string  |                                                丁丑                                                |
|     日柱    |      chineseDay      | string  |                                                辛亥                                                |
|     時柱     |     chineseTime      |  array  | [ '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥' ] |
|        星期        |         week         | string  |                                                 4                                                  |
|        生肖        |        animal        | string  |                                                 鼠                                                 |
|        星座        |    constellation     | string  |                                               魔羯座                                               |
| 國曆二月是否有閏月 |      chineseFeb      | boolean |                                                true                                                |
|        登貴        |       dengGui        | string  |                                                戌午                                                |
|     農曆潤幾月     |      leapMonth       | number  |                                                 4                                                  |
|   農曆每月有幾日   | lunarPerMonthHasDays |  array  |                [ '29','30','30','30','29','30','29','29','30','29','30','29','30' ]                |

# 分享

設定檔 `config.js` 裡面有一些整理過的資訊，希望可以幫助到大家對於命理上的研究。歡迎大家找我討論～

# 注意事項

- 目前計算的時間以 1900 年開始至 2050 年，1900 以前的都無法計算。

# 未來規劃

未來會再增加

- 星座 `BasicLunar` 2019/10/23 完成 `0.8.0`
- 此年的閏月是幾月 `AdvancedLunar` 2019/10/19 完成 `0.6.4`
- 此年的農曆中每個月有多少天 `AdvancedLunar` 2019/10/24 完成 `0.9.0`
- 農曆日期的差距有幾天 `ApplicationLunar`
- 十神的查詢 `ApplicationLunar` 2019/10/17 完成 `0.6.2`
- 提供時間的輸入，在八字裡面其實就是把`年`,`月`,`日`,`時`轉成`年柱`,`月柱`,`日柱`,`時柱`，因此要把八字更精準推出命理相關的數據，需要`時`的協助囉。
