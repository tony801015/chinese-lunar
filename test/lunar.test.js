/* eslint-disable no-undef */
const BasicLunar = require('../BasicLunar');
const expect = require('chai').expect;

it('20190223', () => {
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

it('20190226', () => {
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

it('20190509', () => {
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

it('20190518', () => {
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

it('20190524', () => {
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

it('20190530', () => {
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

it('20190602', () => {
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

it('20190605', () => {
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