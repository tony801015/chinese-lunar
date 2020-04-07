/* eslint-disable no-undef */
const lunar = require('../index');

process.env.DEV = 'true';
const { BasicLunar, AdvancedLunar, ApplicationLunar } = lunar();
const expect = require('chai').expect;

it('[0]20190205', () => {
    const Lunar = new BasicLunar('2019', '02', '05');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('2');
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            {
                current: '2019年立春时间是 2019年02月04日 11:14:14 农历： 十二月(大)三十',
                next: '2019年雨水时间是 2019年02月19日 07:03:51 农历： 正月(大)十五',
                previous: '2019年大寒时间是 2019年01月20日 16:59:27 农历： 十二月(大)十五',
                solarTermsSplit: false
            }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立春');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('丙寅');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('癸酉');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('正月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初一');
});

it('[1]20190223', () => {
    const Lunar = new AdvancedLunar('2019', '02', '23');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('6');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            {
                current: '2019年雨水时间是 2019年02月19日 07:03:51 农历： 正月(大)十五',
                next: '2019年驚蟄时间是 2019年03月06日 05:09:39 农历： 正月(大)三十',
                previous: '2019年立春时间是 2019年02月04日 11:14:14 农历： 十二月(大)三十',
                solarTermsSplit: false
            }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('雨水');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('丙寅');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('辛卯');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('正月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('十九');
    expect(Lunar.dengGui).to.be.deep.equal('申辰');
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
            {
                current: '2019年雨水时间是 2019年02月19日 07:03:51 农历： 正月(大)十五',
                next: '2019年驚蟄时间是 2019年03月06日 05:09:39 农历： 正月(大)三十',
                previous: '2019年立春时间是 2019年02月04日 11:14:14 农历： 十二月(大)三十',
                solarTermsSplit: false
            }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('雨水');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('丙寅');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('甲午');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['甲子', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉', '甲戌', '乙亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('正月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿二');
});

it('[3]20190306', () => {
    const Lunar = new BasicLunar('2019', '03', '06');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管丁卯  令月正月', '卯']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('3');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            {
                current: '2019年驚蟄时间是 2019年03月06日 05:09:39 农历： 正月(大)三十',
                next: '2019年春分时间是 2019年03月21日 05:58:20 农历： 二月(小)十五',
                previous: '2019年雨水时间是 2019年02月19日 07:03:51 农历： 正月(大)十五',
                solarTermsSplit: true
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('驚蟄');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('丁卯');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('壬寅');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('正月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('三十');
});

it('[4]20190406', () => {
    const Lunar = new AdvancedLunar('2019', '04', '06');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('6');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            {
                current: '2019年清明时间是 2019年04月05日 09:51:21 农历： 三月(大)初一',
                next: '2019年穀雨时间是 2019年04月20日 16:55:10 农历： 三月(大)十六',
                previous: '2019年春分时间是 2019年03月21日 05:58:20 农历： 二月(小)十五',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('清明');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('戊辰');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('癸酉');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('三月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初二');
    expect(Lunar.dengGui).to.be.deep.equal('辰午');
});

it('[5]20190509', () => {
    const Lunar = new AdvancedLunar('2019', '05', '09');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('4');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            {
                current: '2019年立夏时间是 2019年05月06日 03:02:40 农历： 四月(小)初二',
                next: '2019年小滿时间是 2019年05月21日 15:59:01 农历： 四月(小)十七',
                previous: '2019年穀雨时间是 2019年04月20日 16:55:10 农历： 三月(大)十六',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立夏');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('己巳');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('丙午');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('四月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初五');
    expect(Lunar.dengGui).to.be.deep.equal('亥酉');
});

it('[6]20190518', () => {
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
            {
                current: '2019年立夏时间是 2019年05月06日 03:02:40 农历： 四月(小)初二',
                next: '2019年小滿时间是 2019年05月21日 15:59:01 农历： 四月(小)十七',
                previous: '2019年穀雨时间是 2019年04月20日 16:55:10 农历： 三月(大)十六',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立夏');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('己巳');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('乙卯');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未', '甲申', '乙酉', '丙戌', '丁亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('四月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('十四');
});

it('[7]20190524', () => {
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
            {
                current: '2019年小滿时间是 2019年05月21日 15:59:01 农历： 四月(小)十七',
                next: '2019年芒種时间是 2019年06月06日 07:06:18 农历： 五月(大)初四',
                previous: '2019年立夏时间是 2019年05月06日 03:02:40 农历： 四月(小)初二',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小滿');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('己巳');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('辛酉');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('四月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('二十');
});

it('[8]20190530', () => {
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
            {
                current: '2019年小滿时间是 2019年05月21日 15:59:01 农历： 四月(小)十七',
                next: '2019年芒種时间是 2019年06月06日 07:06:18 农历： 五月(大)初四',
                previous: '2019年立夏时间是 2019年05月06日 03:02:40 农历： 四月(小)初二',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小滿');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('己巳');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('丁卯');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('四月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿六');
});

it('[9]20190602', () => {
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
            {
                current: '2019年小滿时间是 2019年05月21日 15:59:01 农历： 四月(小)十七',
                next: '2019年芒種时间是 2019年06月06日 07:06:18 农历： 五月(大)初四',
                previous: '2019年立夏时间是 2019年05月06日 03:02:40 农历： 四月(小)初二',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小滿');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('己巳');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('庚午');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未', '甲申', '乙酉', '丙戌', '丁亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('四月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿九');
});

it('[10]20190605', () => {
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
            {
                current: '2019年小滿时间是 2019年05月21日 15:59:01 农历： 四月(小)十七',
                next: '2019年芒種时间是 2019年06月06日 07:06:18 农历： 五月(大)初四',
                previous: '2019年立夏时间是 2019年05月06日 03:02:40 农历： 四月(小)初二',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小滿');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('己巳');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('癸酉');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('五月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初三');
});

it('[11]20190613', () => {
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
            {
                current: '2019年芒種时间是 2019年06月06日 07:06:18 农历： 五月(大)初四',
                next: '2019年夏至时间是 2019年06月21日 23:54:09 农历： 五月(大)十九',
                previous: '2019年小滿时间是 2019年05月21日 15:59:01 农历： 四月(小)十七',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('芒種');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('庚午');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('辛巳');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('五月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('十一');
});

it('[12]20190629', () => {
    const Lunar = new AdvancedLunar('2019', '06', '29');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('6');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            {
                current: '2019年夏至时间是 2019年06月21日 23:54:09 农历： 五月(大)十九',
                next: '2019年小暑时间是 2019年07月07日 17:20:25 农历： 六月(小)初五',
                previous: '2019年芒種时间是 2019年06月06日 07:06:18 农历： 五月(大)初四',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('夏至');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('庚午');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('丁酉');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('五月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿七');
    expect(Lunar.dengGui).to.be.deep.equal('未酉');
});

it('[13]20190707', () => {
    const Lunar = new BasicLunar('2019', '07', '07');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管辛未  令月六月', '酉']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('密');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            {
                current: '2019年小暑时间是 2019年07月07日 17:20:25 农历： 六月(小)初五',
                next: '2019年大暑时间是 2019年07月23日 10:50:16 农历： 六月(小)廿一',
                previous: '2019年夏至时间是 2019年06月21日 23:54:09 农历： 五月(大)十九',
                solarTermsSplit: true
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小暑');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('辛未');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('乙巳');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未', '甲申', '乙酉', '丙戌', '丁亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('六月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初五');
});

it('[14]20190810', () => {
    const Lunar = new AdvancedLunar('2019', '08', '10');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('6');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            {
                current: '2019年立秋时间是 2019年08月08日 03:12:57 农历： 七月(小)初八',
                next: '2019年處暑时间是 2019年08月23日 18:01:53 农历： 七月(小)廿三',
                previous: '2019年大暑时间是 2019年07月23日 10:50:16 农历： 六月(小)廿一',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立秋');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('壬申');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('己卯');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['甲子', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉', '甲戌', '乙亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('七月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初十');
    expect(Lunar.dengGui).to.be.deep.equal('巳酉');
});

it('[15]20190812', () => {
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
            {
                current: '2019年立秋时间是 2019年08月08日 03:12:57 农历： 七月(小)初八',
                next: '2019年處暑时间是 2019年08月23日 18:01:53 农历： 七月(小)廿三',
                previous: '2019年大暑时间是 2019年07月23日 10:50:16 农历： 六月(小)廿一',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立秋');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('壬申');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥']
    );
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('辛巳');
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('七月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('十二');
});

it('[16]20190822', () => {
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
            {
                current: '2019年立秋时间是 2019年08月08日 03:12:57 农历： 七月(小)初八',
                next: '2019年處暑时间是 2019年08月23日 18:01:53 农历： 七月(小)廿三',
                previous: '2019年大暑时间是 2019年07月23日 10:50:16 农历： 六月(小)廿一',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立秋');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('壬申');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('辛卯');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('七月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿二');
});

it('[17]20190903', () => {
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
            {
                current: '2019年處暑时间是 2019年08月23日 18:01:53 农历： 七月(小)廿三',
                next: '2019年白露时间是 2019年09月08日 06:16:46 农历： 八月(大)初十',
                previous: '2019年立秋时间是 2019年08月08日 03:12:57 农历： 七月(小)初八',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('處暑');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('壬申');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('癸卯');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('八月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初五');
});

it('[18]20190906', () => {
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
            {
                current: '2019年處暑时间是 2019年08月23日 18:01:53 农历： 七月(小)廿三',
                next: '2019年白露时间是 2019年09月08日 06:16:46 农历： 八月(大)初十',
                previous: '2019年立秋时间是 2019年08月08日 03:12:57 农历： 七月(小)初八',
                solarTermsSplit: false
            }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('處暑');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('壬申');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('丙午');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('八月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初八');
});

it('[19]20191015', () => {
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
            {
                current: '2019年寒露时间是 2019年10月08日 22:05:32 农历： 九月(小)初十',
                next: '2019年霜降时间是 2019年10月24日 01:19:37 农历： 九月(小)廿六',
                previous: '2019年秋分时间是 2019年09月23日 15:50:02 农历： 八月(大)廿五',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('寒露');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('甲戌');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('乙酉');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未', '甲申', '乙酉', '丙戌', '丁亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('九月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('十七');
});

it('[20]20191120', () => {
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
            {
                current: '2019年立冬时间是 2019年11月08日 01:24:15 农历： 十月(小)十二',
                next: '2019年小雪时间是 2019年11月22日 22:58:48 农历： 十月(小)廿六',
                previous: '2019年霜降时间是 2019年10月24日 01:19:37 农历： 九月(小)廿六',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立冬');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('乙亥');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('辛酉');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('十月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿四');
});

it('[21]20191125', () => {
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
            {
                current: '2019年小雪时间是 2019年11月22日 22:58:48 农历： 十月(小)廿六',
                next: '2019年大雪时间是 2019年12月07日 18:18:21 农历： 十一月(小)十二',
                previous: '2019年立冬时间是 2019年11月08日 01:24:15 农历： 十月(小)十二',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小雪');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('乙亥');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('丙寅');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('十月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿九');
});

it('[22]20191129', () => {
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
            {
                current: '2019年小雪时间是 2019年11月22日 22:58:48 农历： 十月(小)廿六',
                next: '2019年大雪时间是 2019年12月07日 18:18:21 农历： 十一月(小)十二',
                previous: '2019年立冬时间是 2019年11月08日 01:24:15 农历： 十月(小)十二',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小雪');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('乙亥');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('庚午');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未', '甲申', '乙酉', '丙戌', '丁亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('十一月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初四');
});

it('[23]20191207', () => {
    const Lunar = new BasicLunar('2019', '12', '07');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管丙子  令月十一月', '酉']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('6');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            {
                current: '2019年大雪时间是 2019年12月07日 18:18:21 农历： 十一月(小)十二',
                next: '2019年冬至时间是 2019年12月22日 12:19:18 农历： 十一月(小)廿七',
                previous: '2019年小雪时间是 2019年11月22日 22:58:48 农历： 十月(小)廿六',
                solarTermsSplit: true
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('大雪');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('丙子');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('戊寅');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('十一月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('十二');
});

it('[24]20190112', () => {
    const Lunar = new AdvancedLunar('2019', '01', '12');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('6');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            {
                current: '2019年小寒时间是 2019年01月05日 23:38:52 农历： 十一月(大)三十',
                next: '2019年大寒时间是 2019年01月20日 16:59:27 农历： 十二月(大)十五',
                previous: '2019年冬至时间是 2019年12月22日 12:19:18 农历： 十一月(小)廿七',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('小寒');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('戊戌');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('乙丑');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('己酉');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['甲子', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉', '甲戌', '乙亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('腊月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('初七');
    expect(Lunar.dengGui).to.be.deep.equal('子辰');
});

it('[25]20200112', () => {
    const Lunar = new BasicLunar('2020', '01', '20');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('庚子');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('1');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            {
                current: '2020年大寒时间是 2020年01月20日 22:54:33 农历： 十二月(大)廿七',
                next: '2019年冬至时间是 2019年12月22日 12:19:18 农历： 十一月(小)廿七',
                previous: '2020年小寒时间是 2020年01月06日 05:29:59 农历： 十二月(大)十三',
                solarTermsSplit: false
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('大寒');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('丁丑');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('壬戌');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('腊月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿六');
});

it('[26]20180908', () => {
    const Lunar = new AdvancedLunar('2018', '09', '08');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管辛酉  令月七月', '子']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('戊戌');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('6');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            {
                current: '2018年白露时间是 2018年09月08日 00:29:37 农历： 七月(大)廿九',
                next: '2018年秋分时间是 2018年09月23日 09:54:01 农历： 八月(小)十四',
                previous: '2018年處暑时间是 2018年08月23日 12:08:30 农历： 七月(大)十三',
                solarTermsSplit: true
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('白露');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('戊戌');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('辛酉');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('癸卯');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('七月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('廿九');
    expect(Lunar.dengGui).to.be.deep.equal('亥丑');
});

it('[27]20181107', () => {
    const Lunar = new AdvancedLunar('2018', '11', '07');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管癸亥  令月九月', '戌']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('戊戌');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('3');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            {
                current: '2018年立冬时间是 2018年11月07日 19:31:39 农历： 九月(大)三十',
                next: '2018年小雪时间是 2018年11月22日 17:01:24 农历： 十月(小)十五',
                previous: '2018年霜降时间是 2018年10月23日 19:22:18 农历： 九月(大)十五',
                solarTermsSplit: true
            });
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立冬');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('戊戌');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('癸亥');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('癸卯');
    // 時柱
    expect(Lunar.chineseTimes).to.be.deep.equal(
        ['壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥']
    );
    // 農曆月
    expect(Lunar.lunarMonth).to.be.deep.equal('九月');
    // 農曆日
    expect(Lunar.lunarDay).to.be.deep.equal('三十');
    expect(Lunar.dengGui).to.be.deep.equal('酉亥');
});

it('[28]20190120', () => {
    const Lunar = new BasicLunar('2019', '01', '20');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
});

it('[29]20171107', () => {
    const Lunar = new BasicLunar('2017', '11', '07');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管辛亥  令月九月', '未']);
});

it('[30]20180120', () => {
    const Lunar = new BasicLunar('2018', '01', '20');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
});

it('[31]20161107', () => {
    const Lunar = new BasicLunar('2016', '11', '07');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管己亥  令月十月', '辰']);
    expect(Lunar.getJson()).to.be.deep.equal(
        {
            animal: '猴',
            chineseDay: '癸巳',
            chineseFeb: true,
            chineseMonth: '己亥',
            chineseTimes: ['壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥'],
            chineseYear: '丙申',
            constellation: '天蠍座',
            day: '07',
            isLunarLeapMonth: false,
            leapMonth: 0,
            lunarDay: '初八',
            lunarDayDigit: 8,
            lunarMonth: '十月',
            lunarMonthDigit: 10,
            month: '11',
            solarTerms: '立冬',
            week: '1',
            year: '2016'
        }
    );
});

it('[32]20170521', () => {
    const Lunar = new AdvancedLunar('2017', '05', '21');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    expect(Lunar.dengGui).to.be.deep.equal('午子');
});

it('[33]20171008', () => {
    const Lunar = new AdvancedLunar('2017', '10', '08');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管庚戌  令月八月', '巳']);
    expect(Lunar.dengGui).to.be.deep.equal('寅申');
});

it('[34]20180606', () => {
    const Lunar = new AdvancedLunar('2018', '06', '06');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管戊午  令月四月', '丑']);
    expect(Lunar.dengGui).to.be.deep.equal('未亥');
});

it('[35]20150216', () => {
    const Lunar = new AdvancedLunar('2015', '02', '16');
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    expect(Lunar.getChineseMonth()).to.be.deep.equal('戊寅');
    expect(Lunar.dengGui).to.be.deep.equal('午申');
});

it('[36]20151122', () => {
    const Lunar = new ApplicationLunar('2015', '11', '22').setChineseAge('甲子');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    expect(Lunar.dengGui).to.be.deep.equal('戌申');
    expect(Lunar.chineseTimesTenGod).to.be.deep.equal(
        ['殺', '官', 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官']
    );
    expect(Lunar.setTime('00').getJson()).to.be.deep.equal(
        {
            animal: '羊',
            chineseDay: '壬寅',
            chineseDayTenGod: 'ㄗ',
            chineseFeb: false,
            chineseMonth: '丁亥',
            chineseMonthTenGod: '傷',
            chineseTime: '庚子',
            chineseTimeTenGod: '殺',
            chineseTimes: ['庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥'],
            chineseTimesTenGod: ['殺', '官', 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官'],
            chineseYear: '乙未',
            chineseYearTenGod: '劫',
            constellation: '射手座',
            day: '22',
            dengGui: '戌申',
            isLunarLeapMonth: false,
            leapMonth: 0,
            lunarDay: '十一',
            lunarDayDigit: 11,
            lunarMonth: '十月',
            lunarMonthDigit: 10,
            lunarPerMonthHasDays: [
                '29', '30', '29', '29', '30', '29', '30', '30', '30', '29', '30', '29'
            ],
            mingGong: '壬午',
            month: '11',
            nayin: '金',
            purpleWhites: [
                '五黃',
                '四綠',
                '三碧',
                '二黑',
                '一白',
                '九紫',
                '八白',
                '七赤',
                '六白',
                '五黃',
                '四綠',
                '三碧',
            ],
            shenGong: '戊子',
            solarTermDistance: {
                next: {
                    diffDistanceDay: 15,
                    diffDistanceDetail: 15.787025462962964,
                    solarTerm: '大雪',
                },
                previous: {
                    diffDistanceDay: 14,
                    diffDistanceDetail: 13.917638888888888,
                    solarTerm: '立冬',
                },
            },
            solarTerms: '小雪',
            taiYuan: '戊寅',
            week: '密',
            year: '2015'
        }
    );
    expect(Lunar.getTenGod('壬', Lunar.chineseDay.split('')[0])).to.be.deep.equal('比');
    expect(Lunar.getLeapMonth()).to.be.deep.equal(0);
    expect(Lunar.getDengGui(true)).to.be.deep.equal(['卯丑', '戌申', '寅子']);
});

it('[37]No input year', () => {
    try {
        const Lunar = new ApplicationLunar('', '11', '22');
        expect(Lunar.getDengGui(true)).to.not.equal(null);
    } catch (error) {
        expect(error.message).to.be.deep.equal('請輸入「年」參數');
    }
});

it('[38]No input month', () => {
    try {
        const Lunar = new ApplicationLunar('2017', '', '22');
        expect(Lunar.getDengGui(true)).to.not.equal(null);
    } catch (error) {
        expect(error.message).to.be.deep.equal('請輸入「月」參數');
    }
});

it('[39]No input day', () => {
    try {
        const Lunar = new ApplicationLunar('2017', '11', '');
        expect(Lunar.getDengGui(true)).to.not.equal(null);
    } catch (error) {
        expect(error.message).to.be.deep.equal('請輸入「日」參數');
    }
});

it('[40]Don\'t new instance', () => {
    expect(lunar('2017', '11', '10')
        .Lunar
        .setTime('19')
        .setChineseAge('壬子')
        .getJson()).to.be.deep.equal(
            {
                animal: '雞',
                chineseDay: '辛丑',
                chineseDayTenGod: '印',
                chineseFeb: false,
                chineseMonth: '辛亥',
                chineseMonthTenGod: '印',
                chineseTime: '戊戌',
                chineseTimeTenGod: '殺',
                chineseTimes: [
                    '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥'
                ],
                chineseTimesTenGod: [
                    '殺', '官', 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官'
                ],
                chineseYear: '丁酉',
                chineseYearTenGod: '財',
                constellation: '天蠍座',
                day: '10',
                dengGui: '子申',
                isLunarLeapMonth: false,
                leapMonth: 6,
                lunarDay: '廿二',
                lunarDayDigit: 22,
                lunarMonth: '九月',
                lunarMonthDigit: 9,
                lunarPerMonthHasDays: [
                    '29', '30', '29', '30', '29', '29', '30', '29', '30', '29', '30', '30', '30'
                ],
                mingGong: '戊申',
                month: '11',
                nayin: '火',
                purpleWhites: [
                    '八白',
                    '七赤',
                    '六白',
                    '五黃',
                    '四綠',
                    '三碧',
                    '二黑',
                    '一白',
                    '九紫',
                    '八白',
                    '七赤',
                    '六白',
                ],
                shenGong: '庚戌',
                solarTermDistance: {
                    next: {
                        diffDistanceDay: 12,
                        diffDistanceDetail: 12.46150462962963,
                        solarTerm: '小雪',
                    },
                    previous: {
                        diffDistanceDay: 18,
                        diffDistanceDetail: 17.43986111111111,
                        solarTerm: '霜降',
                    },
                },
                solarTerms: '立冬',
                taiYuan: '壬寅',
                week: '5',
                year: '2017'
            }
        );
});

it('[41]20190506', () => {
    const Lunar = new AdvancedLunar('2019', '05', '06');
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管己巳  令月四月', '寅']);
});

it('[42]20190204', () => {
    const Lunar = new AdvancedLunar('2019', '02', '04');
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管丙寅  令月腊月', '午']);
});

it('[43]20200404', () => {
    const Lunar = new AdvancedLunar('2020', '04', '04');
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管庚辰  令月三月', '申']);
});


it('[44]20200524', () => {
    const Lunar = new AdvancedLunar('2020', '05', '24');
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
});

it('[45]20210404', () => {
    const Lunar = new AdvancedLunar('2021', '04', '04');
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管壬辰  令月二月', '亥']);
});

it('[46]20200404', () => {
    expect(lunar('2020', '04', '04')
        .Lunar
        .setTime('17')
        .setChineseAge('甲子')
        .getJson()).to.be.deep.equal(
            {
                animal: '鼠',
                chineseDay: '丁丑',
                chineseDayTenGod: '傷',
                chineseFeb: true,
                chineseMonth: '庚辰',
                chineseMonthTenGod: '殺',
                chineseTime: '己酉',
                chineseTimeTenGod: '財',
                chineseTimes: [
                    '庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥'
                ],
                chineseTimesTenGod: ['殺', '官', 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官'],
                chineseYear: '庚子',
                chineseYearTenGod: '殺',
                constellation: '牡羊座',
                day: '04',
                solarTermDistance: {
                    next: {
                        diffDistanceDay: 15,
                        diffDistanceDetail: 15.948159722222222,
                        solarTerm: '穀雨',
                    },
                    previous: {
                        diffDistanceDay: 15,
                        diffDistanceDetail: 14.50730324074074,
                        solarTerm: '春分',
                    },
                },
                dengGui: '戌子',
                isLunarLeapMonth: false,
                leapMonth: 4,
                lunarDay: '十二',
                lunarDayDigit: 12,
                lunarMonth: '三月',
                lunarMonthDigit: 3,
                lunarPerMonthHasDays: [
                    '29', '30', '30', '30', '29', '30', '29', '29', '30', '29', '30', '29', '30'
                ],
                month: '04',
                nayin: '土',
                purpleWhites: [
                    '八白',
                    '七赤',
                    '六白',
                    '五黃',
                    '四綠',
                    '三碧',
                    '二黑',
                    '一白',
                    '九紫',
                    '八白',
                    '七赤',
                    '六白',
                ],
                solarTerms: '清明',
                week: '6',
                mingGong: '庚辰',
                shenGong: '戊寅',
                taiYuan: '辛未',
                year: '2020'
            });
});

it('[47]20200404', () => {
    process.env.DEV = 'false';
    expect(lunar('2020', '04', '04').setTime('17').setChineseAge('甲子').getJson()).to.be.deep.equal(
        {
            animal: '鼠',
            chineseDay: '丁丑',
            chineseDayTenGod: '傷',
            chineseFeb: true,
            chineseMonth: '庚辰',
            chineseMonthTenGod: '殺',
            chineseTime: '己酉',
            chineseTimeTenGod: '財',
            chineseTimes: ['庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥'],
            chineseTimesTenGod: ['殺', '官', 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官'],
            chineseYear: '庚子',
            chineseYearTenGod: '殺',
            constellation: '牡羊座',
            day: '04',
            dengGui: '戌子',
            isLunarLeapMonth: false,
            leapMonth: 4,
            lunarDay: '十二',
            lunarDayDigit: 12,
            lunarMonth: '三月',
            lunarMonthDigit: 3,
            lunarPerMonthHasDays: [
                '29', '30', '30', '30', '29', '30', '29', '29', '30', '29', '30', '29', '30'
            ],
            month: '04',
            nayin: '土',
            purpleWhites: [
                '八白',
                '七赤',
                '六白',
                '五黃',
                '四綠',
                '三碧',
                '二黑',
                '一白',
                '九紫',
                '八白',
                '七赤',
                '六白',
            ],
            solarTermDistance: {
                next: {
                    diffDistanceDay: 15,
                    diffDistanceDetail: 15.948159722222222,
                    solarTerm: '穀雨',
                },
                previous: {
                    diffDistanceDay: 15,
                    diffDistanceDetail: 14.50730324074074,
                    solarTerm: '春分',
                },
            },
            solarTerms: '清明',
            week: '6',
            mingGong: '庚辰',
            shenGong: '戊寅',
            taiYuan: '辛未',
            year: '2020'
        });
});


it('[48]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03').setTime('21').setChineseAge('甲子').getJson()).to.be.deep.equal(
        {
            animal: '牛',
            chineseDay: '壬午',
            chineseDayTenGod: 'ㄗ',
            chineseFeb: false,
            chineseMonth: '庚寅',
            chineseMonthTenGod: '殺',
            chineseTime: '辛亥',
            chineseTimeTenGod: '官',
            chineseTimes: ['庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥'],
            chineseTimesTenGod: ['殺', '官', 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官'],
            chineseYear: '辛丑',
            chineseYearTenGod: '官',
            constellation: '水瓶座',
            day: '03',
            dengGui: '申午',
            isLunarLeapMonth: false,
            leapMonth: 0,
            lunarDay: '廿二',
            lunarDayDigit: 22,
            lunarMonth: '腊月',
            lunarMonthDigit: 12,
            lunarPerMonthHasDays: [
                '29', '30', '30', '29', '30', '29', '30', '29', '30', '29', '30', '29'
            ],
            month: '02',
            nayin: '金',
            purpleWhites: [
                '五黃',
                '四綠',
                '三碧',
                '二黑',
                '一白',
                '九紫',
                '八白',
                '七赤',
                '六白',
                '五黃',
                '四綠',
                '三碧',
            ],
            solarTermDistance: {
                next: {
                    diffDistanceDay: 15,
                    diffDistanceDetail: 15.78042824074074,
                    solarTerm: '雨水',
                },
                previous: {
                    diffDistanceDay: 14,
                    diffDistanceDetail: 13.805763888888889,
                    solarTerm: '大寒',
                },
            },
            solarTerms: '立春',
            week: '3',
            mingGong: '壬辰',
            shenGong: '庚寅',
            taiYuan: '辛巳',
            year: '2021'
        });
});

it('[49]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .setTime('15')
        .setChineseAge('甲子')
        .getChineseYear()).to.be.deep.equal('辛丑');
});

it('[50]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .setTime('14')
        .setChineseAge('甲子')
        .getChineseYear()).to.be.deep.equal('辛丑');
});

it('[51]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .setTime('11')
        .setChineseAge('甲子')
        .getChineseYear()).to.be.deep.equal('辛丑');
});

it('[52]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .setTime('11')
        .setChineseAge('甲子')
        .getChineseTime()).to.be.deep.equal('丙午');
});

it('[53]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .setTime('09')
        .setChineseAge('甲子')
        .getChineseTime()).to.be.deep.equal('乙巳');
});

it('[54]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .setTime('07')
        .setChineseAge('甲子')
        .getChineseTime()).to.be.deep.equal('甲辰');
});

it('[55]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .setTime('05')
        .setChineseAge('甲子')
        .getChineseTime()).to.be.deep.equal('癸卯');
});

it('[56]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .setTime('03')
        .setChineseAge('甲子')
        .getChineseTime()).to.be.deep.equal('壬寅');
});

it('[57]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .setTime('01')
        .setChineseAge('甲子')
        .getChineseTime()).to.be.deep.equal('辛丑');
});

it('[58]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .setTime('01')
        .getChineseDayTenGod()).to.be.deep.equal('請輸入年齡');
});

it('[59]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .setTime('01')
        .getChineseMonthTenGod()).to.be.deep.equal('請輸入年齡');
});

it('[60]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .setTime('01')
        .getChineseYearTenGod()).to.be.deep.equal('請輸入年齡');
});

it('[61]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .setTime('01')
        .getChineseTimeTenGod()).to.be.deep.equal('請輸入年齡');
});

it('[62]20210203', () => {
    process.env.DEV = 'false';
    expect(lunar('2021', '02', '03')
        .lunarToSolar()
        .setTime('01')
        .getJson()).to.be.deep.equal(
            {
                animal: '牛',
                chineseDay: '壬戌',
                chineseDayTenGod: '請輸入年齡',
                chineseFeb: false,
                chineseMonth: '辛卯',
                chineseMonthTenGod: '請輸入年齡',
                chineseTime: '辛丑',
                chineseTimeTenGod: '請輸入年齡',
                chineseTimes: [
                    '庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥'
                ],
                chineseTimesTenGod: '請輸入年齡',
                chineseYear: '辛丑',
                chineseYearTenGod: '請輸入年齡',
                constellation: '雙魚座',
                day: '15',
                dengGui: '未巳',
                isLunarLeapMonth: false,
                leapMonth: 0,
                lunarDay: '初三',
                lunarDayDigit: 3,
                lunarMonth: '二月',
                lunarMonthDigit: 2,
                lunarPerMonthHasDays: [
                    '29', '30', '30', '29', '30', '29', '30', '29', '30', '29', '30', '29'
                ],
                month: '03',
                nayin: '金',
                purpleWhites: [
                    '五黃',
                    '四綠',
                    '三碧',
                    '二黑',
                    '一白',
                    '九紫',
                    '八白',
                    '七赤',
                    '六白',
                    '五黃',
                    '四綠',
                    '三碧',
                ],
                solarTermDistance: {
                    next: {
                        diffDistanceDay: 5,
                        diffDistanceDetail: 5.734247685185185,
                        solarTerm: '春分',
                    },
                    previous: {
                        diffDistanceDay: 25,
                        diffDistanceDetail: 24.219571759259257,
                        solarTerm: '雨水',
                    },
                },
                solarTerms: '驚蟄',
                week: '1',
                mingGong: '辛丑',
                shenGong: '癸巳',
                taiYuan: '壬午',
                year: '2021'
            });
});

it('[63]20200416', () => {
    process.env.DEV = 'false';
    expect(lunar('2020', '04', '16')
        .lunarToSolar(true)
        .setTime('01')
        .getJson()).to.be.deep.equal(
            {
                animal: '鼠',
                chineseDay: '辛巳',
                chineseDayTenGod: '請輸入年齡',
                chineseFeb: true,
                chineseMonth: '壬午',
                chineseMonthTenGod: '請輸入年齡',
                chineseTime: '己丑',
                chineseTimeTenGod: '請輸入年齡',
                chineseTimes: [
                    '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥'
                ],
                chineseTimesTenGod: '請輸入年齡',
                chineseYear: '庚子',
                chineseYearTenGod: '請輸入年齡',
                constellation: '雙子座',
                day: '07',
                dengGui: '巳丑',
                isLunarLeapMonth: true,
                leapMonth: 4,
                lunarDay: '十六',
                lunarDayDigit: 16,
                lunarMonth: '閏四月',
                lunarMonthDigit: 4,
                lunarPerMonthHasDays: [
                    '29', '30', '30', '30', '29', '30', '29', '29', '30', '29', '30', '29', '30'
                ],
                month: '06',
                nayin: '土',
                purpleWhites: [
                    '八白',
                    '七赤',
                    '六白',
                    '五黃',
                    '四綠',
                    '三碧',
                    '二黑',
                    '一白',
                    '九紫',
                    '八白',
                    '七赤',
                    '六白',
                ],
                solarTermDistance: {
                    next: {
                        diffDistanceDay: 14,
                        diffDistanceDetail: 14.23857638888889,
                        solarTerm: '夏至',
                    },
                    previous: {
                        diffDistanceDay: 18,
                        diffDistanceDetail: 17.090868055555557,
                        solarTerm: '小滿',
                    },
                },
                solarTerms: '芒種',
                week: '密',
                mingGong: '丙戌',
                shenGong: '甲申',
                taiYuan: '癸酉',
                year: '2020'
            }
        );
});

it('[64]20200208', () => {
    process.env.DEV = 'false';
    expect(lunar('2020', '02', '08')
        .add(1, 'd').day
    ).to.be.equal(
        '09'
    );
});

it('[65]20200208', () => {
    process.env.DEV = 'false';
    expect(lunar('2020', '02', '08')
        .subtract(1, 'd').day
    ).to.be.equal(
        '07'
    );
});

it('[66]20190208', () => {
    process.env.DEV = 'false';
    expect(lunar('2019', '02', '08').getPurpleWhites()
    ).to.be.deep.equal(
        ['二黑', '一白', '九紫', '八白', '七赤', '六白', '五黃', '四綠', '三碧', '二黑', '一白', '九紫']
    );
});

it('[67]20190208', () => {
    process.env.DEV = 'false';
    expect(lunar('2019', '02', '08').getNayin()
    ).to.be.equal(
        '木'
    );
});

it('[68]20270208', () => {
    process.env.DEV = 'false';
    expect(lunar('2027', '02', '08').getNayin()
    ).to.be.equal(
        '水'
    );
});

it('[69]20270208', () => {
    process.env.DEV = 'false';
    expect(lunar().getNayin('無')
    ).to.be.equal(
        '請檢查輸入年份'
    );
});

it('[70]20270208', () => {
    process.env.DEV = 'false';
    expect(lunar().getPurpleWhites('無')
    ).to.be.equal(
        '請檢查輸入年份'
    );
});

it('[71]20090801', () => {
    process.env.DEV = 'false';
    expect(lunar('2009', '08', '01')
        .getKongWang('子', '甲')
    ).to.be.equal(
        '戌亥'
    );
});

it('[72]20090801', () => {
    process.env.DEV = 'false';
    expect(lunar('2009', '08', '01')
        .getCangGan('子')
    ).to.be.equal(
        '癸'
    );
});

it('[73]20090801', () => {
    process.env.DEV = 'false';
    expect(lunar('2009', '08', '01')
        .setTime('00')
        .getShenGong()
    ).to.be.equal(
        '壬申'
    );
});

it('[74]20080801', () => {
    process.env.DEV = 'false';
    expect(lunar('2008', '08', '01')
        .setTime('00')
        .getShenGong()
    ).to.be.equal(
        '庚申'
    );
});
