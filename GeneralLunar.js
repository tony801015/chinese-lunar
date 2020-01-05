/* eslint-disable no-param-reassign */
const moment = require('moment');
const {
  lunarLeap,
  solarTermGeneral,
  lunarMonths,
  lunarMonthLeap,
} = require('./config');
const path = require('path');
const fs = require('fs');

class GeneralLunar {
  constructor(year, month, day) {
    if (year === '' || year === undefined) {
      throw Error('請輸入「年」參數');
    }
    if (month === '' || month === undefined) {
      throw Error('請輸入「月」參數');
    }
    if (day === '' || day === undefined) {
      throw Error('請輸入「日」參數');
    }
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
    const start = moment('19000131');
    const end = moment(`${this.year}${this.month}${this.day}`);
    let dayDistance = end.diff(start, 'day');
    lunarLeap.forEach((val) => {
      // console.log(index, val[1], val[0]);
      val[1].split('').forEach((monthVal, monthIndex) => {
        const result = monthVal === '0' ? (dayDistance -= 29) : (dayDistance -= 30);
        if (result >= 0) {
          // console.log(result, min);
          min = Math.min(result + 1, min);
        }
        if (result < 0) {
          if (saveMonth === '') {
            if (monthIndex === 13) {
              monthIndex -= 1;
            }
            saveMonth = monthIndex;
            if (val[0] !== 0 && saveMonth > val[0]) {
              saveMonth--;
            }
            // console.log(parseInt(val[0], 10) + 1, monthIndex);
            if (parseInt(val[0], 10) === monthIndex && monthIndex !== 0) {
              saveMonth = lunarMonthLeap[monthIndex - 1];
            }
          }
        }
      });
    });
    return {
      month: (typeof saveMonth === 'number') ? lunarMonths[saveMonth] : saveMonth,
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
    const solarTerms = JSON.parse(txt);
    solarTerms.forEach(val => {
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

        if (dayDistance === 0
          && solarTermGeneral.indexOf(val.title.substring(5, 7)) >= 0) {
          result.solarTermsSplit = true; //分節前節後
        }
      }
    });
    return result;
  }
}

module.exports = GeneralLunar;