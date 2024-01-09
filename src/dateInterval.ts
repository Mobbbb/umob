import isVaildDate from './isVaildDate'
import toDate from './toDate'

/**
 * @description 获取两个日期的间隔时间
 * @param {*} startDate 开始日期
 * @param {*} endDate 结束日期
 * @param {Object} opt 配置选项
 * @param {String} opt.format d、h、m、s、ms
 * @returns {number} 间隔毫秒数(天、时、分、秒)
 */
function dateInterval(startDate: any, endDate: any, opt: {
    format?: 'ms' | 's' | 'm' | 'h' | 'd',
} = {}): number {
    let diffdate = 0
    const sTime = toDate(startDate)
    const eTime = toDate(endDate)
    const { format = 'ms' } = opt

    if (isVaildDate(sTime) && isVaildDate(eTime)) {
        diffdate = sTime.getTime() - eTime.getTime()
        switch (format) {
            case 's':
                diffdate /= 1000
                break
            case 'm':
                diffdate = diffdate / 1000 / 60
                break
            case 'h':
                diffdate = diffdate / 1000 / 60 / 60
                break
            case 'd':
                diffdate = diffdate / 1000 / 60 / 60 / 24
                break
            default:
                break
        }
    } else {
        return NaN
    }

    return diffdate
}

export default dateInterval
