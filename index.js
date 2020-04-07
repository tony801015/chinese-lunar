const GeneralLunar = require('./src/GeneralLunar');
const BasicLunar = require('./src/BasicLunar');
const AdvancedLunar = require('./src/AdvancedLunar');
const ApplicationLunar = require('./src/ApplicationLunar');
const config = require('./src/config');
const tools = require('./src/tools');

/**
 * @param {String} year 西元年 YYYY (ex: 2020, 1992)
 * @param {String} month 月 MM (ex: 01, 08, 12)
 * @param {String} day  日 DD (ex: 01, 08, 23, 28) 
 * @param {String} age 天干 (ex: 甲子, 丙戌, 癸亥)
 */
function lunar(year, month, day) {
    return process.env.DEV === 'true' ? {
        GeneralLunar,
        BasicLunar,
        AdvancedLunar,
        ApplicationLunar,
        config,
        tools,
        Lunar: new ApplicationLunar(year, month, day)
    } : new ApplicationLunar(year, month, day);
}

module.exports = lunar;
