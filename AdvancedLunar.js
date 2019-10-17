const BasicLunar = require('./BasicLunar');
const lunarTools = require('./tools');

class AdvancedLunar extends BasicLunar {
    constructor(year, month, day) {
        super(year, month, day);
        this.chineseTimeTenGod = this.getChineseTimeTenGod();
        this.dengGui = this.getDengGui();
    }

    /**
     * 取得時間的十神
     * @returns {array}} [ 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官', 'ㄗ', '印' ]
     */
    getChineseTimeTenGod() {
        return this.chineseTime.map(ele => {
            return lunarTools.findTenGod(this.chineseDay.split('')[0], ele.split('')[0]);
        });
    }

    /**
     * 取得登貴
     * @returns {string} 申午
     */
    getDengGui() {
        return lunarTools.findDengGui(this.chineseDay.split('')[0], this.solarTerms);
    }

    /**
   * 取得Json格式
   */
    getJson() {
        return {
            ...super.getJson(),
            chineseTimeTenGod: this.getChineseTimeTenGod(),
            dengGui: this.getDengGui(),
        };
    }
}

module.exports = AdvancedLunar;