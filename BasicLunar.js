const {
  week,
  sixty,
  lunarMonthGeneral,
  animal,
} = require('./config');
const {
  solarTermToLunarMonth,
  lunarMonthByYear,
  hourToDuodecimalCycle,
  findTime,
} = require('./tools');

const moment = require('moment');
const GeneralLunar = require('./GeneralLunar');

class BasicLunar extends GeneralLunar {
  constructor(year, month, day) {
    super(year, month, day);
    this.solarTerms = this.getSolarTerms();
    this.lunarMonth = this.getLunarMonth();
    this.lunarDay = this.getLunarDay();
    this.chineseYear = this.getChineseYearControllerYear();
    this.chineseMonth = this.getChineseMonth();
    this.chineseDay = this.getChineseDay();
    this.chineseTime = this.getChineseTime();
    this.week = this.getWeek();
    this.animal = this.getAnimal();
    this.constellation = this.getConstellation();
    this.chineseFeb = this.checkChineseFeb();
  }

  /**
   * 取得年柱
   * @param {string} [year="2019"] - year
   * @returns {string} 庚子
   */
  getChineseYear(year = this.year) {
    const duodecimalCycle = '甲乙丙丁戊己庚辛壬癸'.split('');
    const decimalCycle = '子丑寅卯辰巳午未申酉戌亥'.split('');
    const computeYear = year - 4;
    return (`${duodecimalCycle[computeYear % 10] + decimalCycle[computeYear % 12]}`);
  }

  /**
   * 取得年柱
   * 從國曆的角度和農曆的角度不同，會影響取得年柱的方式，可以由此function去控制
   * @returns {string} 庚子
   */
  getChineseYearControllerYear() {
    // getLunarYear 年的前後問題 目前修改 -1 是向前找 2020 -> 2019 +1 是向後找 2020 -> 2021
    let year;
    if (parseInt(this.month, 10) === 1) {
      year = parseInt(this.year, 10) - 1;
    } else {
      year = this.year;
    }
    return this.getChineseYear(year);
  }

  /**
   * 取得月柱
   * @returns {string} 庚子
   */
  getChineseMonth() {
    return lunarMonthByYear(this.chineseYear)[
      lunarMonthGeneral.indexOf(this.getLunarMonthBySolarTerms())
    ];
  }

  /**
   * 取得日柱
   * @param {integer} [distanceDay=123456] - distanceDay
   * @returns {string} 庚子
   */
  getChineseDay(distanceDay = this.distanceDay) {
    let sixtyNumber = (distanceDay % 60) + 12;
    if (sixtyNumber > 59) {
      sixtyNumber %= 60;
    }
    return sixty[sixtyNumber];
  }

  /**
   * 取得星期
   * @param {integer} [distanceDay=123456] - distanceDay
   * @returns {string} 1, 2, 3, 4, 5, 6, 密
   */
  getWeek(distanceDay = this.distanceDay) {
    return week[distanceDay % 7];
  }

  /**
   * 取得節氣
   * @returns {string} 雨水
   */
  getSolarTerms() {
    const { title } = this.parserFile;
    const resultArray = title.split(' ');
    return resultArray[0].substring(5, 7);
  }

  /**
   * 取得農曆月
   * @param {integer} [solarTerms="雨水"] - solarTerms
   * @returns {string} 正月
   */
  getLunarMonthBySolarTerms(solarTerms = this.solarTerms) {
    return solarTermToLunarMonth(solarTerms);
  }

  /**
   * 取得農曆月
   * @returns {string} 正月
   */
  getLunarMonth() {
    const { month } = this.getLunarMonthAndDayNumber;
    return month;
  }

  /**
   * 取得農曆日
   * @returns {string} 十九 初十
   */
  getLunarDay() {
    const { day } = this.getLunarMonthAndDayNumber;
    switch (day) {
      case 10:
        return '初十';
      case 20:
        return '二十';
      case 30:
        return '三十';
      default:
        return (
          '初十廿'.split('')[Math.floor(day / 10)] +
          '一二三四五六七八九十'.split('')[(day - 1) % 10]
        );
    }
  }

  /**
   * 取得時柱
   * @returns {array} 甲子,乙丑,丙寅,丁卯,戊辰,己巳,庚午,辛未,壬申,癸酉,甲戌,乙亥
   */
  getChineseTime() {
    return findTime(this.chineseDay.split('')[0]);
  }

  /**
   * 取得節前文字
   * @returns {array} 
   */
  getSolarTermsSplitWord() {
    const { title, solarTermsSplit: solarSplit } = this.parserFile;
    let beforeLunarResult = '';
    let splitWord = '';
    const solarTermsWord = title.split(' ');
    const getTime = solarTermsWord[2].substring(0, 2);
    const lunarMonthCh = this.lunarMonth;
    if (solarSplit === true) {
      beforeLunarResult = hourToDuodecimalCycle(getTime);
      splitWord = `局管${this.chineseMonth}  令月${lunarMonthCh}`;
    }
    return [
      splitWord,
      beforeLunarResult,
    ];
  }

  /**
   * 取得生肖
   * @returns {string} animal 牛
   */
  getAnimal() {
    return animal[this.year % 12];
  }

  /**
   * 檢查國曆年二月是否
   * @returns {string} animal 牛
   */
  checkChineseFeb() {
    return this.year % 4 === 0;
  }

  /**
   * 星座
   * @returns {string} Constellations 天秤
   */
  getConstellation() {
    const now = `${this.year}-${this.month}-${this.day}`;
    const momentNow = moment(now, 'YYYY-MM-DD');
    if (momentNow.isBetween(`${parseInt(this.year, 10) - 1}1223`, `${this.year}0121`)
      || momentNow.isSame(`${this.year}-12-23`)
      || momentNow.isSame(`${this.year}-01-21`)
    ) {
      return '魔羯座';
    } else if (momentNow.isBetween(`${this.year}-01-22`, `${this.year}-02-19`)
      || momentNow.isSame(`${this.year}-01-22`)
      || momentNow.isSame(`${this.year}-02-19`)
    ) {
      return '水瓶座';
    } else if (momentNow.isBetween(`${this.year}-02-20`, `${this.year}-03-20`)
      || momentNow.isSame(`${this.year}-02-20`)
      || momentNow.isSame(`${this.year}-03-20`)
    ) {
      return '雙魚座';
    } else if (momentNow.isBetween(`${this.year}-03-21`, `${this.year}-04-20`)
      || momentNow.isSame(`${this.year}-03-21`)
      || momentNow.isSame(`${this.year}-04-20`)
    ) {
      return '牡羊座';
    } else if (momentNow.isBetween(`${this.year}-04-21`, `${this.year}-05-20`)
      || momentNow.isSame(`${this.year}-04-21`)
      || momentNow.isSame(`${this.year}-05-20`)
    ) {
      return '金牛座';
    } else if (momentNow.isBetween(`${this.year}-05-21`, `${this.year}-06-20`)
      || momentNow.isSame(`${this.year}-05-21`)
      || momentNow.isSame(`${this.year}-06-20`)
    ) {
      return '雙子座';
    } else if (momentNow.isBetween(`${this.year}-06-21`, `${this.year}-07-22`)
      || momentNow.isSame(`${this.year}-06-21`)
      || momentNow.isSame(`${this.year}-07-22`)
    ) {
      return '巨蠍座';
    } else if (momentNow.isBetween(`${this.year}-07-23`, `${this.year}-08-22`)
      || momentNow.isSame(`${this.year}-07-23`)
      || momentNow.isSame(`${this.year}-08-22`)
    ) {
      return '獅子座';
    } else if (momentNow.isBetween(`${this.year}-08-23`, `${this.year}-09-22`)
      || momentNow.isSame(`${this.year}-08-23`)
      || momentNow.isSame(`${this.year}-09-22`)
    ) {
      return '處女座';
    } else if (momentNow.isBetween(`${this.year}-09-23`, `${this.year}-10-22`)
      || momentNow.isSame(`${this.year}-09-23`)
      || momentNow.isSame(`${this.year}-10-22`)
    ) {
      return '天秤座';
    } else if (momentNow.isBetween(`${this.year}-10-23`, `${this.year}-11-22`)
      || momentNow.isSame(`${this.year}-10-23`)
      || momentNow.isSame(`${this.year}-11-22`)
    ) {
      return '天蠍座';
    }
    return '射手座';
  }

  /**
   * 取得Json格式
   */
  getJson() {
    return {
      year: this.year,
      month: this.month,
      day: this.day,
      solarTerms: this.getSolarTerms(),
      lunarMonth: this.getLunarMonth(),
      lunarDay: this.getLunarDay(),
      chineseYear: this.getChineseYearControllerYear(),
      chineseMonth: this.getChineseMonth(),
      chineseDay: this.getChineseDay(),
      chineseTime: this.getChineseTime(),
      week: this.getWeek(),
      animal: this.getAnimal(),
      constellation: this.getConstellation(),
      chineseFeb: this.checkChineseFeb(),
    };
  }
}

module.exports = BasicLunar;