/* eslint-disable no-undef */
const { BasicLunar, AdvancedLunar, ApplicationLunar, lunar } = require('../index');
const expect = require('chai').expect;

it('[0]20190205', () => {
    const Lunar = new BasicLunar('2019', '02', '05');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    // 西元年轉 年柱格式
    expect(Lunar.getChineseYear()).to.be.deep.equal('己亥');
    // 星期
    expect(Lunar.getWeek()).to.be.deep.equal('2');
    // {title,solarTermsSplit}
    expect(Lunar.parserFileAndSplitSolarTerm())
        .to.be.deep.equal(
            { solarTermsSplit: false, title: '2019年立春时间是 2019年02月04日 11:14:14 农历： 十二月(大)三十' }
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
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
            { solarTermsSplit: false, title: '2019年清明时间是 2019年04月05日 09:51:21 农历： 三月(大)初一' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('清明');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('戊辰');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('癸酉');
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
            { solarTermsSplit: false, title: '2019年立秋时间是 2019年08月08日 03:12:57 农历： 七月(小)初八' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立秋');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('壬申');
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
            { solarTermsSplit: false, title: '2020年大寒时间是 2020年01月20日 22:54:33 农历： 十二月(大)廿七' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('大寒');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('己亥');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('丁丑');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('壬戌');
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
            { solarTermsSplit: true, title: '2018年白露时间是 2018年09月08日 00:29:37 农历： 七月(大)廿九' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('白露');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('戊戌');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('辛酉');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('癸卯');
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
            { solarTermsSplit: true, title: '2018年立冬时间是 2018年11月07日 19:31:39 农历： 九月(大)三十' }
        );
    // 節氣
    expect(Lunar.getSolarTerms()).to.be.deep.equal('立冬');
    // 年柱
    expect(Lunar.chineseYear).to.be.deep.equal('戊戌');
    // 月柱
    expect(Lunar.chineseMonth).to.be.deep.equal('癸亥');
    // 日柱
    expect(Lunar.chineseDay).to.be.deep.equal('癸卯');
    // 時柱
    expect(Lunar.chineseTime).to.be.deep.equal(
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
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管辛亥  令月十月', '未']);
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
            chineseTime: ['壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥'],
            chineseYear: '丙申',
            constellation: '天蠍座',
            day: '07',
            lunarDay: '初八',
            lunarMonth: '十月',
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
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管庚戌  令月九月', '巳']);
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
    const Lunar = new ApplicationLunar('2015', '11', '22', '甲子');
    // [ '局管丁卯  令月二月', '寅' ]
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['', '']);
    expect(Lunar.dengGui).to.be.deep.equal('戌申');
    expect(Lunar.chineseTimeTenGod).to.be.deep.equal(
        ['殺', '官', 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官']
    );
    expect(Lunar.getJson()).to.be.deep.equal(
        {
            animal: '羊',
            chineseDay: '壬寅',
            chineseFeb: false,
            chineseMonth: '丁亥',
            chineseTime: ['庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥'],
            chineseTimeTenGod: ['殺', '官', 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官'],
            chineseYear: '乙未',
            constellation: '天蠍座',
            day: '22',
            dengGui: '戌申',
            leapMonth: 0,
            lunarDay: '十一',
            lunarMonth: '十月',
            lunarPerMonthHasDays: [
                '29', '30', '29', '29', '30', '29', '30', '30', '30', '29', '30', '29'
            ],
            month: '11',
            solarTerms: '小雪',
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
        expect(Lunar.getDengGui(true)).to.be.deep.equal(['卯丑', '戌申', '寅子']);
    } catch (error) {
        expect(error.message).to.be.deep.equal('請輸入「年」參數');
    }
});

it('[38]No input month', () => {
    try {
        const Lunar = new ApplicationLunar('2017', '', '22');
        expect(Lunar.getDengGui(true)).to.be.deep.equal(['卯丑', '戌申', '寅子']);
    } catch (error) {
        expect(error.message).to.be.deep.equal('請輸入「月」參數');
    }
});

it('[39]No input day', () => {
    try {
        const Lunar = new ApplicationLunar('2017', '11', '');
        expect(Lunar.getDengGui(true)).to.be.deep.equal(['卯丑', '戌申', '寅子']);
    } catch (error) {
        expect(error.message).to.be.deep.equal('請輸入「日」參數');
    }
});

it('[40]Don\'t new instance', () => {
    expect(lunar('2017', '11', '10', '壬子')).to.be.deep.equal(
        {
            animal: '雞',
            chineseAge: '壬子',
            chineseDay: '辛丑',
            chineseFeb: false,
            chineseMonth: '辛亥',
            chineseTime: ['戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥'],
            chineseTimeTenGod: ['殺', '官', 'ㄗ', '印', '比', '劫', '食', '傷', '才', '財', '殺', '官'],
            chineseYear: '丁酉',
            constellation: '天蠍座',
            day: '10',
            dengGui: '子申',
            distanceDay: 38665,
            getLunarMonthAndDayNumber: { day: 22, month: 9 },
            leapMonth: 6,
            lunarDay: '廿二',
            lunarMonth: '十月',
            lunarPerMonthHasDays: [
                '29', '30', '29', '30', '29', '29', '30', '29', '30', '29', '30', '30', '30'
            ],
            month: '11',
            parserFile: {
                solarTermsSplit: false,
                title: '2017年立冬时间是 2017年11月07日 13:37:45 农历： 九月(大)二十'
            },
            solarTerms: '立冬',
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

it('[44]20210404', () => {
    const Lunar = new AdvancedLunar('2021', '04', '04');
    expect(Lunar.getSolarTermsSplitWord()).to.be.deep.equal(['局管壬辰  令月二月', '亥']);
});