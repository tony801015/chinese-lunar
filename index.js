const GeneralLunar = require('./GeneralLunar');
const BasicLunar = require('./BasicLunar');
const AdvancedLunar = require('./AdvancedLunar');
const ApplicationLunar = require('./ApplicationLunar');
const config = require('./config');
const tools = require('./tools');

/**
 * @param {String} year 西元年 YYYY (ex: 2020, 1992)
 * @param {String} month 月 MM (ex: 01, 08, 12)
 * @param {String} day  日 DD (ex: 01, 08, 23, 28) 
 * @param {String} age 天干 (ex: 甲子, 丙戌, 癸亥)
 */
function lunar(year, month, day, age) {
    return process.env.DEV === 'true' ? {
        GeneralLunar,
        BasicLunar,
        AdvancedLunar,
        ApplicationLunar,
        config,
        tools,
        Lunar: new ApplicationLunar(year, month, day, age)
    } : new ApplicationLunar(year, month, day, age);
}

module.exports = lunar;