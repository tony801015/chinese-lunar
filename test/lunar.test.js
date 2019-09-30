/* eslint-disable no-undef */
const BasicLunar = require('../BasicLunar');
const expect = require('chai').expect;

it('[1]20190223', () => {
    const Lunar = new BasicLunar('2019', '02', '23');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('6');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { title: '2019年雨水时间是 2019年02月19日 07:03:51 农历： 正月(大)十五', solarTermsSplit: false }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('雨水');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('丙寅');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('辛卯');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('正月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('十九');
});

it('[2]20190226', () => {
    const Lunar = new BasicLunar('2019', '02', '26');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('2');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { title: '2019年雨水时间是 2019年02月19日 07:03:51 农历： 正月(大)十五', solarTermsSplit: false }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('雨水');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('丙寅');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('甲午');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('正月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿二');
});

it('[3]20190306', () => {
    const Lunar = new BasicLunar('2019', '03', '06');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管丁卯  令月正月', '寅']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('3');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: true, title: '2019年驚蟄时间是 2019年03月06日 05:09:39 农历： 正月(大)三十' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('驚蟄');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('丁卯');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('壬寅');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('正月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('三十');
});

it('[4]20190509', () => {
    const Lunar = new BasicLunar('2019', '05', '09');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('4');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年立夏时间是 2019年05月06日 03:02:40 农历： 四月(小)初二' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立夏');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('己巳');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('丙午');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('四月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初五');
});

it('[5]20190518', () => {
    const Lunar = new BasicLunar('2019', '05', '18');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('6');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年立夏时间是 2019年05月06日 03:02:40 农历： 四月(小)初二' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立夏');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('己巳');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('乙卯');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('四月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('十四');
});

it('[6]20190524', () => {
    const Lunar = new BasicLunar('2019', '05', '24');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('5');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年小滿时间是 2019年05月21日 15:59:01 农历： 四月(小)十七' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小滿');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('己巳');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('辛酉');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('四月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('二十');
});

it('[7]20190530', () => {
    const Lunar = new BasicLunar('2019', '05', '30');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('4');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年小滿时间是 2019年05月21日 15:59:01 农历： 四月(小)十七' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小滿');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('己巳');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('丁卯');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('四月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿六');
});

it('[8]20190602', () => {
    const Lunar = new BasicLunar('2019', '06', '02');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('密');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年小滿时间是 2019年05月21日 15:59:01 农历： 四月(小)十七' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小滿');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('己巳');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('庚午');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('四月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿九');
});

it('[9]20190605', () => {
    const Lunar = new BasicLunar('2019', '06', '05');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('3');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年小滿时间是 2019年05月21日 15:59:01 农历： 四月(小)十七' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小滿');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('己巳');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('癸酉');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('五月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初三');
});

it('[10]20190613', () => {
    const Lunar = new BasicLunar('2019', '06', '13');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('4');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年芒種时间是 2019年06月06日 07:06:18 农历： 五月(大)初四' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('芒種');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('庚午');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('辛巳');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('五月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('十一');
});

it('[11]20190629', () => {
    const Lunar = new BasicLunar('2019', '06', '29');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('6');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年夏至时间是 2019年06月21日 23:54:09 农历： 五月(大)十九' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('夏至');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('庚午');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('丁酉');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('五月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿七');
});

it('[12]20190707', () => {
    const Lunar = new BasicLunar('2019', '07', '07');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管辛未  令月六月', '申']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('密');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: true, title: '2019年小暑时间是 2019年07月07日 17:20:25 农历： 六月(小)初五' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小暑');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('辛未');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('乙巳');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('六月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初五');
});

it('[13]20190810', () => {
    const Lunar = new BasicLunar('2019', '08', '10');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('6');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年立秋时间是 2019年08月08日 03:12:57 农历： 七月(小)初八' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立秋');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('壬申');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('己卯');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('七月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初十');
});

it('[14]20190812', () => {
    const Lunar = new BasicLunar('2019', '08', '12');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('1');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年立秋时间是 2019年08月08日 03:12:57 农历： 七月(小)初八' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立秋');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('壬申');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('辛巳');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('七月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('十二');
});

it('[15]20190822', () => {
    const Lunar = new BasicLunar('2019', '08', '22');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('4');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年立秋时间是 2019年08月08日 03:12:57 农历： 七月(小)初八' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立秋');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('壬申');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('辛卯');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('七月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿二');
});

it('[16]20190903', () => {
    const Lunar = new BasicLunar('2019', '09', '03');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('2');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年處暑时间是 2019年08月23日 18:01:53 农历： 七月(小)廿三' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('處暑');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('壬申');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('癸卯');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('八月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初五');
});

it('[17]20190906', () => {
    const Lunar = new BasicLunar('2019', '09', '06');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('5');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年處暑时间是 2019年08月23日 18:01:53 农历： 七月(小)廿三' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('處暑');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('壬申');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('丙午');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('八月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初八');
});

it('[18]20191015', () => {
    const Lunar = new BasicLunar('2019', '10', '15');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('2');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年寒露时间是 2019年10月08日 22:05:32 农历： 九月(小)初十' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('寒露');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('甲戌');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('乙酉');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('九月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('十七');
});

it('[19]20191120', () => {
    const Lunar = new BasicLunar('2019', '11', '20');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('3');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年立冬时间是 2019年11月08日 01:24:15 农历： 十月(小)十二' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立冬');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('乙亥');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('辛酉');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('十月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿四');
});

it('[20]20191125', () => {
    const Lunar = new BasicLunar('2019', '11', '25');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('1');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年小雪时间是 2019年11月22日 22:58:48 农历： 十月(小)廿六' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小雪');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('乙亥');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('丙寅');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('十月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿九');
});

it('[21]20191129', () => {
    const Lunar = new BasicLunar('2019', '11', '29');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('5');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年小雪时间是 2019年11月22日 22:58:48 农历： 十月(小)廿六' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小雪');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('乙亥');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('庚午');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('十一月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初四');
});

it('[22]20191207', () => {
    const Lunar = new BasicLunar('2019', '12', '07');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管丙子  令月十一月', '申']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('6');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: true, title: '2019年大雪时间是 2019年12月07日 18:18:21 农历： 十一月(小)十二' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('大雪');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('丙子');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('戊寅');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('十一月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('十二');
});

it('[23]20190112', () => {
    const Lunar = new BasicLunar('2019', '01', '12');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('6');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年小寒时间是 2019年01月05日 23:38:52 农历： 十一月(大)三十' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小寒');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('戊戌');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('乙丑');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('己酉');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('腊月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初七');
});