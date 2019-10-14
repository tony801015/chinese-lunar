const {
  week,
  sixty,
  lunarMonthGeneral,
  luarnMonths,
} = require('./config');
const {
  solarTermToLunarMonth,
  lunarMonthByYear,
  hourToDuodecimalCycle,
  findtime,
} = require('./tools');

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
    // getLunarYeaer 年的前後問題 目前修改 -1 是向前找 2020 -> 2019 +1 是向後找 2020 -> 2021
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
      lunarMonthGeneral.indexOf(this.getLunarMonthBysolarTerms())
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
  getLunarMonthBysolarTerms(solarTerms = this.solarTerms) {
    return solarTermToLunarMonth(solarTerms);
  }

  /**
   * 取得農曆月
   * @returns {string} 正月
   */
  getLunarMonth() {
    const { month } = this.getLunarMonthAndDayNumber;
    return luarnMonths[month];
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
    return findtime(this.chineseDay.split('')[0]);
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
}

module.exports = BasicLunar;