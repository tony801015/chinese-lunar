/* eslint-disable no-useless-constructor */
const AdvancedLunar = require('./AdvancedLunar');
const lunarTools = require('./tools');

class ApplicationLunar extends AdvancedLunar {
  /**
   * 
   * @param {String} year 西元年 YYYY (ex: 2020, 1992)
   * @param {String} month 月 MM (ex: 01, 08, 12)
   * @param {String} day  日 DD (ex: 01, 08, 23, 28) 
   * @param {String} time 24小時制 TT (ex: 01, 03, 08, 23, 24)
   * @param {String} chineseAge 天干 (ex: 甲子, 丙戌, 癸亥)
   */
  constructor(year, month, day, chineseAge) {
    const {
      year: handlerYear,
      month: handlerMonth,
      day: handlerDay,
    } = lunarTools.setDate(year, month, day);

    super(handlerYear, handlerMonth, handlerDay, chineseAge);
    this.time = lunarTools.setTime();
    this.chineseTime = this.getChineseTime(lunarTools.setTime());
  }

  /**
   * 設定天干地支年齡，能取得十神
   * @param {String} age 
   */
  setChineseAge(age) {
    this.chineseAge = age;
    this.chineseTimesTenGod = this.getChineseTimesTenGod(age);
    return this;
  }

  /**
   * 設定時間能取得時柱
   * @param {String} time 
   */
  setTime(time) {
    this.time = time;
    this.chineseTime = this.getChineseTime(time);
    return this;
  }

  /**
   * 取得時柱 十神
   * @param {String} time 
   * @param {String} chineseAge 
   * @returns {String} chineseTimeTenGod
   */
  getChineseTimeTenGod(chineseAge = this.chineseAge) {
    if (chineseAge === '請輸入年齡' || chineseAge === undefined) {
      return '請輸入年齡';
    }
    return lunarTools.findTenGod(chineseAge.split('')[0], this.chineseTime.split('')[0]);
  }

  /**
  * 取得年柱 十神
  * @param {String} chineseAge 
  * @returns {String} chineseYearTenGod
  */
  getChineseYearTenGod(chineseAge = this.chineseAge) {
    if (chineseAge === '請輸入年齡' || chineseAge === undefined) {
      return '請輸入年齡';
    }
    return lunarTools.findTenGod(chineseAge.split('')[0], this.chineseYear.split('')[0]);
  }

  /**
  * 取得月柱 十神
  * @param {String} chineseAge 
  * @returns {String} chineseMonthTenGod
  */
  getChineseMonthTenGod(chineseAge = this.chineseAge) {
    if (chineseAge === '請輸入年齡' || chineseAge === undefined) {
      return '請輸入年齡';
    }
    return lunarTools.findTenGod(chineseAge.split('')[0], this.chineseMonth.split('')[0]);
  }

  /**
   * 取得日柱 十神
   * @param {String} chineseAge 
   * @returns {String} chineseDayTenGod
   */
  getChineseDayTenGod(chineseAge = this.chineseAge) {
    if (chineseAge === '請輸入年齡' || chineseAge === undefined) {
      return '請輸入年齡';
    }
    return lunarTools.findTenGod(chineseAge.split('')[0], this.chineseDay.split('')[0]);
  }

  /**
   * 取得時柱
   * @param {String} time 01, 03, 22, 23 
   */
  getChineseTime(time = this.time) {
    if (time === '00' || time === '23') {
      return this.chineseTimes[0];
    } else if (time === '01' || time === '02') {
      return this.chineseTimes[1];
    } else if (time === '03' || time === '04') {
      return this.chineseTimes[2];
    } else if (time === '05' || time === '06') {
      return this.chineseTimes[3];
    } else if (time === '07' || time === '08') {
      return this.chineseTimes[4];
    } else if (time === '09' || time === '10') {
      return this.chineseTimes[5];
    } else if (time === '11' || time === '12') {
      return this.chineseTimes[6];
    } else if (time === '13' || time === '14') {
      return this.chineseTimes[7];
    } else if (time === '15' || time === '16') {
      return this.chineseTimes[8];
    } else if (time === '17' || time === '18') {
      return this.chineseTimes[9];
    } else if (time === '19' || time === '20') {
      return this.chineseTimes[10];
    }
    return this.chineseTimes[11];
  }

  /**
   * 取得十神
   * @param {string} chineseAge first word 
   * @param {string} decimalCycle chineseYear,chineseMonth,chineseDay,chineseTime
   * @returns {string} tenGod 傷, 食, 財, 才, 官, 殺, 印, ㄗ
   */
  getTenGod(_with, _life) {
    return lunarTools.findTenGod(_with, _life);
  }

  /**
  * 取得Json格式
  */
  getJson() {
    return {
      ...super.getJson(),
      chineseTime: this.getChineseTime(),
      chineseTimeTenGod: this.getChineseTimeTenGod(),
      chineseYearTenGod: this.getChineseYearTenGod(),
      chineseMonthTenGod: this.getChineseMonthTenGod(),
      chineseDayTenGod: this.getChineseDayTenGod(),
    };
  }
}

module.exports = ApplicationLunar;