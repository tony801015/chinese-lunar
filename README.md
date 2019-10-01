# 命理基本的查詢

只要輸入年月日，就可以轉換成`年柱`,`月柱`,`日柱`,`農曆月`,`農曆日`,`節氣`,`星期`的資訊

使用範例如下:
```js
const BasicLunar = require('./BasicLunar');

const Lunar = new BasicLunar('2020', '03', '05');
console.log(Lunar.year, Lunar.month, Lunar.day); // 2020 03 05
console.log(`${Lunar.chineseYear}/${Lunar.chineseMonth}/${Lunar.chineseDay}`); // 庚子/己卯/丁未
console.log(`${Lunar.lunarMonth}/${Lunar.lunarDay}`); // 二月/十二
console.log(`${Lunar.solarTerms}`); // 驚蟄
console.log(`${Lunar.week}`); // 4
```

設定檔 `config.js` 裡面有一些整理過的資訊，希望可以幫助到大家對於命理上的研究。歡迎大家找我討論～

注意:目前計算的時間以2009年開始至2050年，2009以後的都無法計算。

未來會再增加`時柱`,`生肖`,`星座`等等作轉換
