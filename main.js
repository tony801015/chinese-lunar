// const GeneralLunar = require('./GeneralLunar');
// const BasicLunar = require('./BasicLunar');
// const AdvancedLunar = require('./AdvancedLunar');
const ApplicationLunar = require('./ApplicationLunar');
// const config = require('./config');
// const tools = require('./tools');

module.exports = function lunar(year, month, day, age) {
  return new ApplicationLunar(year, month, day, age);
};