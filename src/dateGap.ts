import dateFormat from './dateFormat'
import isVaildDate from './isVaildDate'
import toDate from './toDate'
import toMonth from './toMonth'

/**
 * @description 获取两个日期中间的日期
 * @param {*} startDate 开始日期
 * @param {*} endDate 结束日期
 * @param {Object} opt 配置选项
 * @param {Boolean} opt.includeHead 是否包含起始日期
 * @param {Boolean} opt.includeTail 是否包含结尾日期
 * @param {String} opt.format 日期格式化
 * @returns {Array}
 */
function dateGap(startDate: any, endDate: any, opt: {
    includeHead?: boolean,
    includeTail?: boolean,
    format?: string,
} = {}): string[] {
    const diffdate = []
    const sTime = toDate(startDate)
    const eTime = toDate(endDate)
    const startDateLength = startDate.toString().length
    const endDateLength = startDate.toString().length
    const { includeHead = true, includeTail = true, format = 'yyyy-MM-dd' } = opt

    if (isVaildDate(sTime) && isVaildDate(eTime) && startDateLength > 7 && endDateLength > 7) {
        while (sTime < eTime) {
            diffdate.push(dateFormat(sTime, format))
            sTime.setTime(sTime.getTime() + 24 * 3600 * 1000)
        }

        if (includeTail) diffdate.push(dateFormat(eTime, format))
    } else if (toMonth(startDate) && toMonth(endDate)) {
        let sMonth = toMonth(startDate)
        const eMonth = toMonth(endDate)
        while (sMonth < eMonth) {
            diffdate.push(sMonth)
            let nextMonth: number | string = parseInt(sMonth.slice(5, 7), 10) + 1
            let nextYear = parseInt(sMonth.slice(0, 4), 10)
            nextYear = nextMonth > 12 ? nextYear + 1 : nextYear
            nextMonth = nextMonth > 12 ? nextMonth - 12 : nextMonth

            nextMonth = nextMonth < 10 ? `0${nextMonth}` : nextMonth
            sMonth = `${nextYear}-${nextMonth}`
        }

        if (includeTail) diffdate.push(eMonth)
    } else {
        return []
    }

    if (!includeHead) diffdate.shift()

    return diffdate
}

export default dateGap
