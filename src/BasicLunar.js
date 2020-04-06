const { week, sixty, lunarMonthGeneral, animal, lunarMonths, lunarMonthLeap, lunarLeap }
  = require('./config');
const {
  solarTermToLunarMonth,
  lunarMonthByYear,
  hourToDuodecimalCycle,
  findTime,
} = require('./tools');

const GeneralLunar = require('./GeneralLunar');

class BasicLunar extends GeneralLunar {
  /**
   * 
   * @param {String} year 西元年 YYYY (ex: 2020, 1992)
   * @param {String} month 月 MM (ex: 01, 08, 12)
   * @param {String} day  日 DD (ex: 01, 08, 23, 28) 
   */
  constructor(year, month, day) {
    super(year, month, day);
    this.solarTerms = this.getSolarTerms();
    this.lunarMonth = this.getLunarMonth();
    this.lunarDay = this.getLunarDay();
    this.chineseYear = this.getChineseYearControllerYear();
    this.chineseMonth = this.getChineseMonth();
    this.chineseDay = this.getChineseDay();
    this.chineseTimes = this.getChineseTimes();
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
    const { current } = this.parserFile;
    const resultArray = current.split(' ');
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
  getLunarMonth(digit = false) {
    const { month } = this.getLunarMonthAndDayNumber;
    if (digit) {
      return (lunarMonths.indexOf(month) !== -1)
        ? lunarMonths.indexOf(month) + 1
        : lunarMonthLeap.indexOf(month) + 1;
    }
    return month;
  }

  /**
   * 取得農曆日
   * @returns {string} 十九 初十
   */
  getLunarDay(digit = false) {
    const { day } = this.getLunarMonthAndDayNumber;
    if (digit) {
      return day;
    }
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
  getChineseTimes() {
    return findTime(this.chineseDay.split('')[0]);
  }

  /**
   * 取得節前文字
   * @returns {array} 
   */
  getSolarTermsSplitWord() {
    const { current, solarTermsSplit: solarSplit } = this.parserFile;
    let beforeLunarResult = '';
    let splitWord = '';
    const solarTermsWord = current.split(' ');
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
   * 精簡寫法來源:https://www.itread01.com/article/1479977694.html
   */
  getConstellation() {
    const words = '魔羯水瓶雙魚牡羊金牛雙子巨蟹獅子處女天秤天蠍射手魔羯';
    const compute = words
      .substr(
        (parseInt(this.month, 10) * 2) -
        ((parseInt(this.day, 10) < '102223444433'.charAt(parseInt(this.month, 10) - 1) - -19) * 2)
        , 2);
    return `${compute}座`;
  }

  /**
      * 取得當年潤幾月
      * @returns {number} LeapMonth, If return 0 is no LeapMonth 
      */
  getLeapMonth() {
    return lunarLeap[this.year - 1900][0];
  }

  /**
 * 判斷此月使否有閏月
 */
  checkLeapMonth() {
    return (this.getLeapMonth() === this.getLunarMonth(true));
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
      lunarMonthDigit: this.getLunarMonth(true),
      lunarDayDigit: this.getLunarDay(true),
      isLunarLeapMonth: this.checkLeapMonth(),
      leapMonth: this.getLeapMonth(),
      chineseYear: this.getChineseYearControllerYear(),
      chineseMonth: this.getChineseMonth(),
      chineseDay: this.getChineseDay(),
      chineseTimes: this.getChineseTimes(),
      week: this.getWeek(),
      animal: this.getAnimal(),
      constellation: this.getConstellation(),
      chineseFeb: this.checkChineseFeb(),
    };
  }
}

module.exports = BasicLunar;
