/* eslint-disable no-useless-constructor */
const AdvancedLunar = require('./AdvancedLunar');
const lunarTools = require('./tools');
const config = require('./config');
const dayjs = require('dayjs');
const { mingAndShen } = require('./tools');

class ApplicationLunar extends AdvancedLunar {
  /**
   * 
   * @param {String} year 西元年 YYYY (ex: 2020, 1992)
   * @param {String} month 月 MM (ex: 01, 08, 12)
   * @param {String} day  日 DD (ex: 01, 08, 23, 28) 
   * @param {String} time 24小時制 TT (ex: 01, 03, 08, 23, 24)
   */
  constructor(year, month, day) {
    const {
      year: handlerYear,
      month: handlerMonth,
      day: handlerDay,
    } = lunarTools.setDate(year, month, day);

    super(handlerYear, handlerMonth, handlerDay);
    this.time = lunarTools.setTime();
    this.chineseTime = this.getChineseTime(lunarTools.setTime());
    this.solarTermDistance = this.getSolarTermDistance();
  }

  /**
   * 設定農曆轉公曆
   * @param {boolean} leap is true or false, the default is false
   * @returns {Object} ApplicationLunar
   * @example
   * lunarToSolar();
   * // return  <Object> ApplicationLunar
   */
  lunarToSolar(leap = false) {
    const lunarPerMonthHasDays = this.getLunarPerMonthHasDays();
    const monthDay = config.lunarLeap[this.year - 1900][2];
    let day = 0;
    let month = parseInt(this.month, 10);
    if (leap) {
      month++;
    }
    for (let index = 0; index < month - 1; index++) {
      day += parseInt(lunarPerMonthHasDays[index], 10);
    }
    day += parseInt(this.day, 10) - 1;
    const yearMonthDay = dayjs(this.year + monthDay)
      .add(day, 'days')
      .format('YYYY-MM-DD').split('-');
    return new ApplicationLunar(yearMonthDay[0], yearMonthDay[1], yearMonthDay[2]);
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
   * 減
   * @param {Integer} number 
   * @param {String} unit 
   * @returns {Object} Lunar
   */
  subtract(number, unit) {
    return this.formatCompute(dayjs(this.year + this.month + this.day).subtract(number, unit));
  }

  /**
   * 加
   * @param {Integer} number 
   * @param {String} unit 
   * @returns {Object} Lunar
   */
  add(number, unit) {
    return this.formatCompute(dayjs(this.year + this.month + this.day).add(number, unit));
  }

  formatCompute(data) {
    const result = data.format('YYYY-MM-DD').split('-');
    return new ApplicationLunar(result[0], result[1], result[2]);
  }

  /**
   * 取得當年的紫白
   * @param {String} chineseYear 
   * @returns {Array} Lunar
   * 參考算法：https://kknews.cc/zh-tw/geomantic/r8llgb4.html
   * 子午卯酉年 八白
   * 辰戍丑未年 五黃
   * 寅申巳亥年 二黑
   */
  getPurpleWhites(chineseYear = this.chineseYear) {
    if ('子午卯酉'.indexOf(chineseYear[1]) >= 0) {
      return config.purpleＷhites[0];
    }

    if ('辰戌丑未'.indexOf(chineseYear[1]) >= 0) {
      return config.purpleＷhites[1];
    }

    if ('寅申巳亥'.indexOf(chineseYear[1]) >= 0) {
      return config.purpleＷhites[2];
    }
    return '請檢查輸入年份';
  }

  /**
   * 取得胎元
   * @param {String} chineseMonth 月柱
   * @returns {String} TaiYuan
   */
  getTaiYuan(chineseMonth = this.chineseMonth) {
    const top = config.decimalCycle.indexOf(chineseMonth.split('')[0]);
    const down = config.duodecimalCycleMonth.indexOf(chineseMonth.split('')[1]);
    return config.taiYuan[top][down];
  }

  /**
   * 取得藏幹
   * @param {String} duodecimalCycle 地支
   * @returns {String} CangGan
   */
  getCangGan(duodecimalCycle) {
    return config.cangGan[config.duodecimalCycle.indexOf(duodecimalCycle)];
  }

  /**
   * 取得空亡
   * @param {String} duodecimalCycle 地支
   * @param {String} decimalCycle 天干
   * @returns {String} kongWang
   */
  getKongWang(duodecimalCycle, decimalCycle) {
    const down = config.duodecimalCycle.indexOf(duodecimalCycle);
    const top = config.decimalCycle.indexOf(decimalCycle);
    return config.kongWang[down][top];
  }

  /**
   * 取得命宮
   * @param {String} chineseMonth 
   * @param {String} chineseTime 
   */
  getMingGong(
    chineseYear = this.chineseYear,
    chineseMonth = this.chineseMonth,
    chineseTime = this.chineseTime) {
    return mingAndShen(chineseYear, chineseMonth, chineseTime, 'Ming');
  }

  /**
   * 取得身宮
   * @param {String} chineseMonth 
   * @param {String} chineseTime 
   */
  getShenGong(
    chineseYear = this.chineseYear,
    chineseMonth = this.chineseMonth,
    chineseTime = this.chineseTime
  ) {
    return mingAndShen(chineseYear, chineseMonth, chineseTime, 'Shen');
  }

  /**
  * 取得Json格式
  */
  getJson() {
    return {
      ...super.getJson(),
      purpleWhites: this.getPurpleWhites(),
      taiYuan: this.getTaiYuan(),
      mingGong: this.getMingGong(),
      shenGong: this.getShenGong(),
    };
  }
}

module.exports = ApplicationLunar;
