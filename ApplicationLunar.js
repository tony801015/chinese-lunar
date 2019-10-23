/* eslint-disable no-useless-constructor */
const AdvancedLunar = require('./AdvancedLunar');
const lunarTools = require('./tools');

class ApplicationLunar extends AdvancedLunar {
  constructor(year, month, day, chineseAge) {
    super(year, month, day, chineseAge);
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
    };
  }
}

module.exports = ApplicationLunar;