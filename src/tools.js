'use strict';
const {
  duodecimalCycleMonth,
  monthToken,
  decimalCycle,
  solarTerms,
  sixty,
  dengGui,
  tenGod,
  duodecimalCycle,
  mingGongDuoDecimalCycle,
  shenGong,
  duodecimalCycleToDecimalCycle
} = require('./config');

const tools = {
  setTime: () => {
    return new Date().getHours().toString();
  },
  setDate: (year, month, day) => {
    const yearDate = new Date().getFullYear();
    const monthDate = new Date().getMonth();
    const date = new Date().getDate();

    if (year === '' || year === undefined) {
      year = yearDate.toString();
    }
    if (month === '' || month === undefined) {
      month = monthDate + 1 < 9
        ? (`0${(monthDate + 1).toString()}`)
        : (monthDate + 1).toString();
      // month = (monthDate + 1).toString();
    }
    if (day === '' || day === undefined) {
      day = date < 9
        ? (`0${(date).toString()}`)
        : (date).toString();
      // day = (date).toString();
    }
    return {
      year, month, day
    };
  },
  /**
   * @param {string} chinese first word 配
   * @param {string} chinese first word 命
   * @returns {string} 十神
   */
  findTenGod: (_with, _life) => {
    return tenGod[decimalCycle.indexOf(_with)][decimalCycle.indexOf(_life)];
  },
  /**
   * @param {string} chineseDay first word
   * @param {string} twentyFourWeather
   * @returns {string} 登貴
   */
  findDengGui: (countryDay, twentyFourWeather) => {
    const decimalNumber = decimalCycle.indexOf(countryDay);
    const solarTermsNumber = tools.dengGuiSolarTerms(twentyFourWeather);
    return dengGui[decimalNumber][solarTermsNumber];
  },
  /**
   * 此年度所有的月令(柱)
   * @param {string} 丁卯
   * @returns {array} [壬寅, 癸卯, 甲辰, 乙巳, 丙午...]
   */
  lunarMonthByYear: year => {
    const yearFirstCh = year.toString().split('')[0];
    const baseYear = decimalCycle.indexOf(yearFirstCh);
    if (baseYear === 0 || baseYear === 5) {
      return monthToken[0].map((val, index) => {
        return decimalCycle[val] + duodecimalCycleMonth[index];
      });
    } else if (baseYear === 1 || baseYear === 6) {
      return monthToken[1].map((val, index) => {
        return decimalCycle[val] + duodecimalCycleMonth[index];
      });
    } else if (baseYear === 2 || baseYear === 7) {
      return monthToken[2].map((val, index) => {
        return decimalCycle[val] + duodecimalCycleMonth[index];
      });
    } else if (baseYear === 3 || baseYear === 8) {
      return monthToken[3].map((val, index) => {
        return decimalCycle[val] + duodecimalCycleMonth[index];
      });
    }
    return monthToken[4].map((val, index) => {
      return decimalCycle[val] + duodecimalCycleMonth[index];
    });
  },
  /**
   * 節氣(月令) --> 月份
   * @param {string} 節氣
   * @returns {string} 二月 正月
   */
  solarTermToLunarMonth: solarTerm => {
    const num = solarTerms.indexOf(solarTerm);
    if (num === 0 || num === 23) {
      return '正月';
    } else if (num === 1 || num === 2) {
      return '二月';
    } else if (num === 3 || num === 4) {
      return '三月';
    } else if (num === 5 || num === 6) {
      return '四月';
    } else if (num === 7 || num === 8) {
      return '五月';
    } else if (num === 9 || num === 10) {
      return '六月';
    } else if (num === 11 || num === 12) {
      return '七月';
    } else if (num === 13 || num === 14) {
      return '八月';
    } else if (num === 15 || num === 16) {
      return '九月';
    } else if (num === 17 || num === 18) {
      return '十月';
    } else if (num === 19 || num === 20) {
      return '十一月';
    }
    return '十二月';
  },
  /**
   * 節前節後
   * @param {string} hour
   * @returns {string} 地支
   */
  hourToDuodecimalCycle: time => {
    if (time === '23' || time === '00') {
      return '子';
    } else if (time === '01' || time === '02') {
      return '丑';
    } else if (time === '03' || time === '04') {
      return '寅';
    } else if (time === '05' || time === '06') {
      return '卯';
    } else if (time === '07' || time === '08') {
      return '辰';
    } else if (time === '09' || time === '10') {
      return '巳';
    } else if (time === '11' || time === '12') {
      return '午';
    } else if (time === '13' || time === '14') {
      return '未';
    } else if (time === '15' || time === '16') {
      return '申';
    } else if (time === '17' || time === '18') {
      return '酉';
    } else if (time === '19' || time === '20') {
      return '戌';
    }
    return '亥';
  },
  findTime: (lunarDayFirstWord) => {
    let result = [];
    if (lunarDayFirstWord === '甲' || lunarDayFirstWord === '己') {
      result = tools.findTimeCompute(0, 11);
    } else if (lunarDayFirstWord === '乙' || lunarDayFirstWord === '庚') {
      result = tools.findTimeCompute(12, 23);
    } else if (lunarDayFirstWord === '丙' || lunarDayFirstWord === '辛') {
      result = tools.findTimeCompute(24, 35);
    } else if (lunarDayFirstWord === '丁' || lunarDayFirstWord === '壬') {
      result = tools.findTimeCompute(36, 47);
    } else {
      result = tools.findTimeCompute(48, 59);
    }
    return result;
  },
  findTimeCompute: (start, end) => {
    const timeArray = [];
    for (let i = start; i <= end; i++) {
      timeArray.push(sixty[i]);
    }
    return timeArray;
  },
  /**
   * 登貴節氣 deng_gui[X][Y]
   * return Y
   */
  dengGuiSolarTerms: solarTerm => {
    const num = solarTerms.indexOf(solarTerm);
    if (num === 0 || num === 1) {
      return 0;
    } else if (num === 2 || num === 3) {
      return 1;
    } else if (num === 4 || num === 5) {
      return 2;
    } else if (num === 6 || num === 7) {
      return 3;
    } else if (num === 8 || num === 9) {
      return 4;
    } else if (num === 10 || num === 11) {
      return 5;
    } else if (num === 12 || num === 13) {
      return 6;
    } else if (num === 14 || num === 15) {
      return 7;
    } else if (num === 16 || num === 17) {
      return 8;
    } else if (num === 18 || num === 19) {
      return 9;
    } else if (num === 20 || num === 21) {
      return 10;
    }
    return 11;
  },
  mingAndShen: (chineseYear, chineseMonth, chineseTime, item) => {
    const down = duodecimalCycleMonth.indexOf(chineseMonth.split('')[1]);
    const top = duodecimalCycle.indexOf(chineseTime.split('')[1]);
    let decimalCycleResult;
    if (item === 'Ming') {
      decimalCycleResult = tools.getDuodecimalCycleToDecimalCycle(
        mingGongDuoDecimalCycle[top][down], chineseYear
      );
      return `${decimalCycleResult}${mingGongDuoDecimalCycle[top][down]}`;
    }
    decimalCycleResult = tools.getDuodecimalCycleToDecimalCycle(shenGong[top][down], chineseYear);
    return `${decimalCycleResult}${shenGong[top][down]}`;
  },
  /**
   * 地支查天干  使用於身宮和命宮
   * @param {String} decimalCycle 地支
   * @param {String} chineseYear 
   */
  getDuodecimalCycleToDecimalCycle: (decimalCycleInput, chineseYear) => {
    const down = duodecimalCycleMonth.indexOf(decimalCycleInput);
    const word = chineseYear.split('')[0];
    switch (true) {
      case '甲己'.indexOf(word) >= 0:
        return duodecimalCycleToDecimalCycle[0][down];
      case '乙庚'.indexOf(word) >= 0:
        return duodecimalCycleToDecimalCycle[1][down];
      case '丙辛'.indexOf(word) >= 0:
        return duodecimalCycleToDecimalCycle[2][down];
      case '丁壬'.indexOf(word) >= 0:
        return duodecimalCycleToDecimalCycle[3][down];
      default:
        return duodecimalCycleToDecimalCycle[4][down];
    }
  },
  verifyAge(chineseAge) {
    if (chineseAge === '請輸入年齡' || chineseAge === undefined) {
      return false;
    }
    return true;
  }
};

module.exports = tools;
