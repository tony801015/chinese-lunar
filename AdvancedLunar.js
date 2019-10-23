const BasicLunar = require('./BasicLunar');
const lunarTools = require('./tools');
const { lunarLeap, solarTerms } = require('./config');

class AdvancedLunar extends BasicLunar {
    constructor(year, month, day, chineseAge) {
        super(year, month, day);
        this.chineseAge = chineseAge;
        this.chineseTimeTenGod = this.getChineseTimeTenGod();
        this.dengGui = this.getDengGui();
        this.leapMonth = this.getLeapMonth();
        this.lunarPerMonthHasDays = this.getLunarPerMonthHasDays();
    }

    /**
     * 取得時間的十神
     * @returns {array}} [ 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官', 'ㄗ', '印' ]
     */
    getChineseTimeTenGod() {
        if (this.chineseAge === '' || this.chineseAge === undefined) {
            return '請輸入年齡';
        }
        return this.chineseTime.map(ele => {
            return lunarTools.findTenGod(this.chineseAge.split('')[0], ele.split('')[0]);
        });
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
      * 取得當年潤幾月
      * @returns {number} LeapMonth, If return 0 is no LeapMonth 
      */
    getLeapMonth() {
        return lunarLeap[this.year - 1900][0];
    }

    /**
     * 取得每月農曆有幾天
     * @returns {array} getLunarPerMonthHasDays ['29', '30', '29', '29', '30', '29', '30', '30', '30', '29', '30', '29']
     */
    getLunarPerMonthHasDays() {
        return lunarLeap[this.year - 1900][1]
            .split('')
            .map(ele => { return (ele === '0' ? '29' : '30'); });
    }

    /**
     * 取得Json格式
     */
    getJson() {
        return {
            ...super.getJson(),
            chineseTimeTenGod: this.getChineseTimeTenGod(),
            dengGui: this.getDengGui(),
            leapMonth: this.getLeapMonth(),
            lunarPerMonthHasDays: this.getLunarPerMonthHasDays(),
        };
    }
}

module.exports = AdvancedLunar;