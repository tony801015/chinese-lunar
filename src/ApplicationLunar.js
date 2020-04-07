/* eslint-disable no-useless-constructor */
const AdvancedLunar = require('./AdvancedLunar');
const lunarTools = require('./tools');
const config = require('./config');
const moment = require('moment');
const { mingAndShen } = require('./tools');

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
    const yearMonthDay = moment(this.year + monthDay)
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
    return this.formatCompute(moment(this.year + this.month + this.day).subtract(number, unit));
  }

  /**
   * 加
   * @param {Integer} number 
   * @param {String} unit 
   * @returns {Object} Lunar
   */
  add(number, unit) {
    return this.formatCompute(moment(this.year + this.month + this.day).add(number, unit));
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
   * 取得當年的納音
   * @param {String} chineseYear 
   * @returns {String} 
   * 金 甲子乙丑壬寅癸卯庚辰辛巳甲午乙未壬申癸酉庚戌辛丑
   * 木 壬子癸丑庚寅辛卯戊辰己巳壬午癸未庚申辛酉戊戌己亥
   * 水 丙子丁丑甲寅乙卯壬辰癸巳丙午丁未甲申乙酉壬戌癸亥
   * 火 戊子己丑丙寅丁卯甲辰乙巳戊午己未丙申丁酉甲戌乙亥
   * 土 庚子辛丑戊寅己卯丙辰丁巳庚午辛未戊申己酉丙戌丁亥
   */
  getNayin(chineseYear = this.chineseYear) {
    if ('甲子乙丑壬寅癸卯庚辰辛巳甲午乙未壬申癸酉庚戌辛丑'.indexOf(chineseYear) >= 0) {
      return '金';
    }

    if ('壬子癸丑庚寅辛卯戊辰己巳壬午癸未庚申辛酉戊戌己亥'.indexOf(chineseYear) >= 0) {
      return '木';
    }

    if ('丙子丁丑甲寅乙卯壬辰癸巳丙午丁未甲申乙酉壬戌癸亥'.indexOf(chineseYear) >= 0) {
      return '水';
    }

    if ('戊子己丑丙寅丁卯甲辰乙巳戊午己未丙申丁酉甲戌乙亥'.indexOf(chineseYear) >= 0) {
      return '火';
    }

    if ('庚子辛丑戊寅己卯丙辰丁巳庚午辛未戊申己酉丙戌丁亥'.indexOf(chineseYear) >= 0) {
      return '土';
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

  // getDuodecimalCycleToDecimalCycle(decimalCycle, chineseYear = this.chineseYear) {
  //     const down = config.duodecimalCycleMonth.indexOf(decimalCycle);
  //     const word = chineseYear.split('')[0];
  //     switch (true) {
  //         case '甲己'.indexOf(word) >= 0:
  //             return config.duodecimalCycleToDecimalCycle[0][down];
  //         case '乙庚'.indexOf(word) >= 0:
  //             return config.duodecimalCycleToDecimalCycle[1][down];
  //         case '丙辛'.indexOf(word) >= 0:
  //             return config.duodecimalCycleToDecimalCycle[2][down];
  //         case '丁壬'.indexOf(word) >= 0:
  //             return config.duodecimalCycleToDecimalCycle[3][1];
  //         default:
  //             return config.duodecimalCycleToDecimalCycle[4][down];
  //     }
  // }

  /**
  * 取得Json格式
  */
  getJson() {
    return {
      ...super.getJson(),
      nayin: this.getNayin(),
      purpleWhites: this.getPurpleWhites(),
      taiYuan: this.getTaiYuan(),
      mingGong: this.getMingGong(),
      shenGong: this.getShenGong(),
    };
  }
}

module.exports = ApplicationLunar;
