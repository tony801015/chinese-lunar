# 命理基本的查詢

[![npm version](https://badge.fury.io/js/%40tony801015%2Fchinese-lunar.svg)](https://badge.fury.io/js/%40tony801015%2Fchinese-lunar)
[![npm](https://badgen.net/npm/dt/@tony801015/chinese-lunar)](https://badge.fury.io/js/%40tony801015%2Fchinese-lunar)
[![Build Status](https://travis-ci.org/tony801015/chinese-lunar.svg?branch=master)](https://travis-ci.org/tony801015/chinese-lunar)
[![Coverage Status](https://coveralls.io/repos/github/tony801015/chinese-lunar/badge.svg?branch=master)](https://coveralls.io/github/tony801015/chinese-lunar?branch=master)
[![codebeat badge](https://codebeat.co/badges/9ee77feb-968f-476b-9563-b2af9f03c0f3)](https://codebeat.co/projects/github-com-tony801015-chinese-lunar-master)

目前已提供`年柱`,`月柱`,`日柱`,`時柱`,`農曆月`,`農曆日`,`節氣`,`星期`,`生肖`,`星座`,`紫白`,`納音`,`胎元`,`命宮`,`身宮`,`藏幹`,`副星`的資訊

# ChangeLog
- 2021/01/30 `0.20.0` 版本修復[#16](https://github.com/tony801015/chinese-lunar/issues/16)
- 2020/11/16 `0.19.0` 版本移除`moment.js`改用`day.js`
- 2020/04/05 `0.18.0` 版本提供胎元, 命宮, 身宮 `.getTaiYuan()` `.getMingGong()` `.getShenGong()`
- 2020/02/21 `0.17.0` 版本提供取得紫白九星的方法和取得納音屬性 `.getNayin()` `.getPurpleＷhites()`
- 2020/02/08 `0.16.0` 版本提供日期加減的計算 `.add()` `.subtract()`
- 2020/02/02 `0.15.0` 版本提供上(下)一個節氣的距離天數 `.getSolarTermDistance()`
- 2020/01/25 `0.14.0` 版本農曆轉公(國)曆的功能囉 `.lunarToSolar()`
- 2020/01/18 `0.13.0` 版本提供`時`讓八字有更精準的計算。底下的`特殊方法`有介紹八字計算，歡迎大家試算看看唷～
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
console.log(lunar("2020", "01", "09").getJson()); 
```

### 取得參數

```js
const lunar = require("@tony801015/chinese-lunar");
const data = lunar("2020", "01", "09").getJson();
console.log(data.year); // 2020
console.log(data.week); // 4
console.log(data.constellation); // 魔羯座
```

### 提供特殊方法
#### setTime() 自訂時間
> 如果沒有輸入，程式會抓取當前時間
```js
const lunar = require("@tony801015/chinese-lunar");
const data = lunar('2021', '02', '13')
  .setTime('00')
  .getJson();
console.log(data.chineseTime); // 庚子
```
#### setChineseAge() 自訂出生年(天干地支)
> 如果沒有輸入程式會顯示提醒 `請輸入年齡`
```js
const lunar = require("@tony801015/chinese-lunar");
const data = lunar('2021', '02', '13') // 出生年月日
  .setTime('00') // 出生時
  .setChineseAge('壬子') // 出生年
  .getJson();
console.log(data.chineseYearTenGod); // 印
console.log(data.chineseMonthTenGod); // ㄗ
console.log(data.chineseDayTenGod); // 比
console.log(data.chineseTimeTenGod); // ㄗ

// 這樣簡單的八字計算就出來囉。 歡迎自己算算看唷～
console.log(`年=> ${data.chineseYear}, 十神=> ${data.chineseYearTenGod}`); // 年=> 辛丑, 十神=> 印
console.log(`月=> ${data.chineseMonth}, 十神=> ${data.chineseMonthTenGod}`); // 月=> 庚寅, 十神=> ㄗ
console.log(`日=> ${data.chineseDay}, 十神=> ${data.chineseDayTenGod}`); // 日=> 壬辰, 十神=> 比
console.log(`時=> ${data.chineseTime}, 十神=> ${data.chineseTimeTenGod}`); // 時=> 庚子, 十神=> ㄗ
```
#### lunarToSolar() 農曆轉公(國)曆
```js
const lunar = require("@tony801015/chinese-lunar");
const data = lunar(
  '2020', '04', '16'
)
  .lunarToSolar() 
  // 如果有遇到閏月,要轉國曆請記得加true, 不然預設都會是false 非閏月的月份
  // lunarToSolar({{true|false}})
  .setTime('00')
  .setChineseAge('壬子')
  .getJson();
console.log(`農曆月=> ${data.lunarMonth}, 農曆日=> ${data.lunarDay}`); 
// 農曆月=> 四月, 農曆日=> 十六
console.log(`國曆月=> ${data.month}, 國曆日=> ${data.day}`);
// 國曆月=> 05, 國曆日=> 08
```

#### getSolarTermDistance() 查看距離上(下)一個節氣天數
```js
const lunar = require("@tony801015/chinese-lunar");
const data = lunar(
  '2019', '07', '07'
).getSolarTermDistance();
// 因節氣會看到小時，這裡有提供 diffDistanceDetail 這個參數再乘上24即可得知幾個小時
// { previous: 
//    { solarTerm: '夏至',
//      diffDistanceDay: 16,
//      diffDistanceDetail: 15.004062500000002 },
//   next: 
//    { solarTerm: '大暑',
//      diffDistanceDay: 16,
//      diffDistanceDetail: 16.451574074074074 } }
```

#### subtract()、add() 計算加減
```js
const lunar = require("@tony801015/chinese-lunar");
const demoAdd = lunar('2019', '07', '07').add(1,'d').day // 08
const demoSubtract = lunar('2019', '07', '07').subtract(1,'d').day // 06
// add()與subtract()這背後是使用moment.js這個好用的套件所完成的，因此有用過moment.js的朋友一定不陌生
``` 
兩個method的文件如下:  
[subtract()](https://day.js.org/docs/en/manipulate/subtract#docsNav) 減的使用方式  
[add()](https://day.js.org/docs/en/manipulate/add#docsNav) 加的使用方式  

#### 紫白與納音
```js
const lunar = require("@tony801015/chinese-lunar");
lunar('2020', '02', '21').getNayin(); // 土

lunar('2020', '02', '21').getPurpleＷhites(); 
// [ '八白', '七赤', '六白', '五黃', '四綠', '三碧', '二黑', '一白', '九紫', '八白', '七赤', '六白' ]
```

#### 胎元,命宮,身宮,藏幹,副星
```js
const lunar = require("@tony801015/chinese-lunar");
// 身宮
lunar('2020', '04', '05').getShenGong(); // 戊子
// 命宮
lunar('2020', '04', '05').getMingGong(); // 壬午
// 空亡
lunar('2020', '04', '05').getKongWang('子', '甲');  // 戌亥
// 藏幹
lunar('2020', '04', '05').getCangGan('子'); // 癸
// 胎元
lunar('2020', '04', '05').getTaiYuan(); // 辛未
```


#### 使用`getJson()`會得到以下參數


|      中文名稱      |       參數名稱       |  型態   |                                                範例                                                | 備註 | 
| :----------------: | :------------------: | :-----: | :------------------------------------------------------------------------------------------------: | :--: | 
|         年         |         year         | string  |                                                2020                                                | |
|         月         |        month         | string  |                                                 01                                                 ||
|         日         |         day          | string  |                                                 09                                                 ||
|        節氣        |      solarTerms      | string  |                                                小寒                                                ||
|       農曆月       |      lunarMonth      | string  |                                                腊月                                                ||
|       農曆日       |       lunarDay       | string  |                                                十五                                                ||
|       農曆月數值       |       lunarMonthDigit       | number  |                                              12                                                  ||
|       農曆日數值       |       lunarDayDigit       | number  |                                                15                                                ||
|       當前農曆月份是否閏月       |       isLunarLeapMonth       | boolean  |                                                false                                                ||
|     當年閏幾月     |     leapMonth      | number  |                                                0                                                ||
|     年柱     |     chineseYear      | string  |                                                己亥                                                ||
|     月柱     |     chineseMonth     | string  |                                                丁丑                                                ||
|     日柱    |      chineseDay      | string  |                                                辛亥                                                ||
|     時柱     |     chineseTime     |  string  | 戊子 | 需要先 `setTime()` 如果沒有就會是目前的時間 |
|     年柱十神     |     chineseYearTenGod     |  string  | 殺 |需要先 `setChineseAge()`|
|     月柱十神     |     chineseMonthTenGod     |  string  | 印 |需要先 `setChineseAge()`|
|     日柱十神     |     chineseDayTenGod     |  string  | ㄗ |需要先 `setChineseAge()`|
|     時柱十神     |     chineseTimeTenGod     |  string  | 比 |需要先 `setChineseAge()`|
|     時柱十神清單     |     chineseTimesTenGod     |  array  | [ 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官', 'ㄗ', '印' ] |需要先 `setChineseAge()`|
|     時柱清單     |     chineseTimes      |  array  | [ '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥' ] ||
|        星期        |         week         | string  |                                                 4                                                  ||
|        生肖        |        animal        | string  |                                                 鼠                                                 ||
|        星座        |    constellation     | string  |                                               魔羯座                                               ||
| 國曆二月是否有閏月 |      chineseFeb      | boolean |                                                true                                                ||
|        登貴        |       dengGui        | string  |                                                戌午                                                ||
|     農曆潤幾月     |      leapMonth       | number  |                                                 4                                                  ||
|   農曆每月有幾日   | lunarPerMonthHasDays |  array  |                [ '29','30','30','30','29','30','29','29','30','29','30','29','30' ]                ||

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
- 提供時間的輸入，在八字裡面其實就是把`年`,`月`,`日`,`時`轉成`年柱`,`月柱`,`日柱`,`時柱`，因此要把八字更精準推出命理相關的數據，需要`時`的協助囉。 2020/01/18 完成 `0.13.0`
- 輸入農曆轉換成國曆 2020/1/25 完成 `0.14.0`
- 製作前端使用js 2020/1/25 完成 `0.14.3`
- 加強節氣資訊，距離前(後)節氣天數 2020/2/2 完成 `0.15.0`
- 加減 subtract(), add() 2020/02/08 完成 `0.16.0`
- 取得紫白九星的方法 2020/02/21 完成 `0.17.0`
- 取得納音屬性 2020/02/21 完成 `0.17.0`
- 提供「農曆的日期」數字的形式呈現 [#7](https://github.com/tony801015/chinese-lunar/issues/7) 感謝 @creatxrgithub 大大提供建議 `0.17.3`
- 提供胎元,命宮,身宮,藏幹,副星 `0.18.0`
- 支援較舊的版本 IOS6 感謝 @921010wxm 大大提供建議 `0.20.0` [#16](https://github.com/tony801015/chinese-lunar/issues/16)
- 製作萬年曆
- 查詢農曆年的API
- 查詢流年,流月,大運
- 建立使用手冊
