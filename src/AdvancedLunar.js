const BasicLunar = require('./BasicLunar');
const lunarTools = require('./tools');
const { lunarLeap, solarTerms } = require('./config');
const dayjs = require('dayjs');

const INPUT_AGE = '請輸入年齡';
class AdvancedLunar extends BasicLunar {
    /**
     * 
     * @param {String} year 西元年 YYYY (ex: 2020, 1992)
     * @param {String} month 月 MM (ex: 01, 08, 12)
     * @param {String} day  日 DD (ex: 01, 08, 23, 28) 
     */
    constructor(year, month, day) {
        super(year, month, day);
        this.chineseTimesTenGod = this.getChineseTimesTenGod();
        this.dengGui = this.getDengGui();
        this.leapMonth = this.getLeapMonth();
        this.lunarPerMonthHasDays = this.getLunarPerMonthHasDays();
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
     * 取得時間的十神
     * @returns {array}} [ 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官', 'ㄗ', '印' ]
     */
    getChineseTimesTenGod(chineseAge = this.chineseAge) {
        return lunarTools.verifyAge(chineseAge)
            ? this.chineseTimes.map(ele => {
                return lunarTools.findTenGod(chineseAge.split('')[0], ele.split('')[0]);
            })
            : INPUT_AGE;
    }

    /**
     * 取得時柱 十神
     * @param {String} time 
     * @param {String} chineseAge 
     * @returns {String} chineseTimeTenGod
     */
    getChineseTimeTenGod(chineseAge = this.chineseAge) {
        return this.getTenGod(chineseAge, this.chineseTime);
    }

    /**
    * 取得年柱 十神
    * @param {String} chineseAge 
    * @returns {String} chineseYearTenGod
    */
    getChineseYearTenGod(chineseAge = this.chineseAge) {
        return this.getTenGod(chineseAge, this.chineseYear);
    }

    /**
    * 取得月柱 十神
    * @param {String} chineseAge 
    * @returns {String} chineseMonthTenGod
    */
    getChineseMonthTenGod(chineseAge = this.chineseAge) {
        return this.getTenGod(chineseAge, this.chineseMonth);
    }

    /**
     * 取得日柱 十神
     * @param {String} chineseAge 
     * @returns {String} chineseDayTenGod
     */
    getChineseDayTenGod(chineseAge = this.chineseAge) {
        return this.getTenGod(chineseAge, this.chineseDay);
    }

    /** 取得十神
    * @param {String} chineseAge first word 
    * @param {String} decimalCycle chineseYear,chineseMonth,chineseDay,chineseTime
    */
    getTenGod(chineseAge, chineseAnything) {
        return lunarTools.verifyAge(chineseAge)
            ? lunarTools.findTenGod(chineseAge.split('')[0], chineseAnything.split('')[0])
            : INPUT_AGE;
    }

    /**
     * 取得登貴
     * @returns {string} 申午
     */
    getDengGui(solarTermSplit) {
        if (solarTermSplit) {
            const solarTermsNumber = lunarTools.dengGuiSolarTerms(this.solarTerms);
            const solarTermBefore = solarTerms[solarTermsNumber - 1];
            const solarTermAfter = solarTerms[solarTermsNumber + 1];
            return [
                lunarTools.findDengGui(this.chineseDay.split('')[0], solarTermBefore),
                lunarTools.findDengGui(this.chineseDay.split('')[0], this.solarTerms),
                lunarTools.findDengGui(this.chineseDay.split('')[0], solarTermAfter),
            ];
        }
        return lunarTools.findDengGui(this.chineseDay.split('')[0], this.solarTerms);
    }

    /**
     * 取得每月農曆有幾天
     * @returns {array} getLunarPerMonthHasDays 
     * ['29', '30', '29', '29', '30', '29', '30', '30', '30', '29', '30', '29']
     */
    getLunarPerMonthHasDays() {
        return lunarLeap[this.year - 1900][1]
            .split('')
            .map(ele => { return (ele === '0' ? '29' : '30'); });
    }

    /**
     * 取得節氣前後資訊
     * @return {Object}
     * { 
     *   previous: { 
     *     solarTerm: '春分',
     *     diffDistanceDay: 27,
     *     diffDistanceDetail: 26.50730324074074 
     *   },
     *   next: { 
     *     solarTerm: '穀雨',
     *     diffDistanceDay: 3,
     *     diffDistanceDetail: 3.948159722222222 
     *   } 
     * }
     */
    getSolarTermDistance() {
        const { previous, next } = this.parserFile;
        const previousArray = previous.split(' ');
        const nextArray = next.split(' ');
        const previousResult = this.dateDiffHandler(previousArray);
        const nextResult = this.dateDiffHandler(nextArray);
        return {
            previous: previousResult,
            next: nextResult,
        };
    }

    dateDiffHandler(previousArray) {
        const previousSolarTerm = previousArray[0].substring(5, 7);
        const start = dayjs(this.year + this.month + this.day);
        const previousYYYYMMDD = previousArray[1].replace('日', '').split(/年|月/g);
        const previousHHMMSS = previousArray[2].split(/:/);
        const previousDay = dayjs(new Date(
            parseInt(previousYYYYMMDD[0], 10),
            parseInt(previousYYYYMMDD[1], 10) - 1,
            parseInt(previousYYYYMMDD[2], 10),
            parseInt(previousHHMMSS[0], 10),
            parseInt(previousHHMMSS[1], 10),
            parseInt(previousHHMMSS[2], 10),
        ));
        const preDistanceDay = previousDay.diff(start, 'hours', true);
        return {
            solarTerm: previousSolarTerm,
            diffDistanceDay: Math.abs(Math.floor(preDistanceDay / 24)),
            diffDistanceDetail: Math.abs(preDistanceDay / 24),
        };
    }

    /**
     * 取得Json格式
     */
    getJson() {
        return {
            ...super.getJson(),
            nayin: this.getNayin(),
            chineseTime: this.getChineseTime(),
            chineseTimesTenGod: this.getChineseTimesTenGod(),
            chineseTimeTenGod: this.getChineseTimeTenGod(),
            chineseYearTenGod: this.getChineseYearTenGod(),
            chineseMonthTenGod: this.getChineseMonthTenGod(),
            chineseDayTenGod: this.getChineseDayTenGod(),
            dengGui: this.getDengGui(),
            lunarPerMonthHasDays: this.getLunarPerMonthHasDays(),
            solarTermDistance: this.getSolarTermDistance(),
        };
    }
}

module.exports = AdvancedLunar;
