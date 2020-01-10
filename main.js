const GeneralLunar = require('./GeneralLunar');
const BasicLunar = require('./BasicLunar');
const AdvancedLunar = require('./AdvancedLunar');
const ApplicationLunar = require('./ApplicationLunar');
const config = require('./config');
const tools = require('./tools');

module.exports = function lunar(year, month, day, age) {
  return process.env.DEV ? {
    GeneralLunar,
    BasicLunar,
    AdvancedLunar,
    ApplicationLunar,
    config,
    tools,
    Action: new ApplicationLunar(year, month, day, age)
  } : new ApplicationLunar(year, month, day, age);
};