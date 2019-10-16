const moment = require('moment');
const { lunarLeap } = require('./config');
const path = require('path');
const fs = require('fs');

class GeneralLunar {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;

    const start = moment('19120101');
    const end = moment(year + month + day);
    this.distanceDay = end.diff(start, 'day');
    this.getLunarMonthAndDayNumber = this.getLunarMonthAndDayNumber();
    this.parserFile = this.parserFileAndSplitSolarTerm();
  }

  /**
   * 取得農曆月日的值
   * @returns {Object} { month, day }
  */
  getLunarMonthAndDayNumber() {
    let min = 100000000;
    let saveMonth = '';
    const start = moment('19560212');
    const end = moment(`${this.year}${this.month}${this.day}`);
    let daydistance = end.diff(start, 'day');
    lunarLeap.forEach((val) => {
      val[1].split('').forEach((monthVal, monthIndex) => {
        const result = monthVal === '0' ? (daydistance -= 29) : (daydistance -= 30);
        if (result >= 0) {
          // console.log(result, min);
          min = Math.min(result + 1, min);
        }
        if (result < 0) {
          if (saveMonth === '') {
            saveMonth = monthIndex;
          }
        }
      });
    });
    return {
      month: saveMonth,
      day: min
    };
  }

  /**
* 分析文檔並回傳結果和是否節前日期
* @returns {Object} { title, solarTermsSplit }
*/
  parserFileAndSplitSolarTerm() {
    const txt = fs.readFileSync(
      path.join(__dirname, `./source/${this.year}.json`),
      'utf8'
    );
    const result = {
      title: '',
      solarTermsSplit: false
    };
    let min = 1000;
    const myobj = JSON.parse(txt);
    myobj.forEach(val => {
      const dateCh = val.title.split(' ')[1]; // ex:2017年01月24日
      const date = dateCh
        .replace('年', '')
        .replace('月', '')
        .replace('日', ''); // ex:20170124
      const start = moment(date);
      const end = moment(this.year + this.month + this.day);
      const dayDistance = end.diff(start, 'day');

      // 2048戊辰年沒有2/3
      if (dayDistance >= 0 && dayDistance < min) {
        min = Math.min(dayDistance, min);
        result.title = `${val.title}`;
        if (dayDistance === 0) {
          result.solarTermsSplit = true; //分節前節後
        }
      }
    });
    return result;
  }
}

module.exports = GeneralLunar;