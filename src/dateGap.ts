/**
 * @description 获取两个日期中间的日期
 * @param {String} startDate yyyy-MM-dd/yyyy-MM/yyyy 开始日期
 * @param {String} endDate yyyy-MM-dd/yyyy-MM/yyyy 结束日期
 * @param {Boolean} includeHeadAndTail 是否包含起止日期
 * @returns {Array}
 */
function dateGap(startDate: string, endDate: string, includeHeadAndTail: boolean = true): string[] {
    let sTime = startDate
    if (Number.isNaN((new Date(sTime)).getDate()) || Number.isNaN((new Date(endDate)).getDate())) {
        return ['1970-01-01']
    }

    const { length } = sTime
    const diffdate = []
    while (sTime < endDate) {
        diffdate.push(sTime)

        if (length === 7) {
            let nextMonth: number | string = parseInt(sTime.slice(5, 7), 10) + 1
            let nextYear = parseInt(sTime.slice(0, 4), 10)
            nextYear = nextMonth > 12 ? nextYear + 1 : nextYear
            nextMonth = nextMonth > 12 ? nextMonth - 12 : nextMonth

            nextMonth = nextMonth < 10 ? `0${nextMonth}` : nextMonth
            sTime = `${nextYear}-${nextMonth}`
        } else if (length === 10) {
            // 获取开始日期时间戳
            const timeTs = new Date(sTime).getTime()

            // 增加一天时间戳后的日期
            const nextDate = timeTs + (24 * 60 * 60 * 1000)

            const nextYear = `${new Date(nextDate).getFullYear()}-`
            const nextMonth = (new Date(nextDate).getMonth() + 1 < 10)
                ? `0${(new Date(nextDate).getMonth() + 1)}-`
                : `${(new Date(nextDate).getMonth() + 1)}-`
            const nextDay = (new Date(nextDate).getDate() < 10)
                ? `0${new Date(nextDate).getDate()}`
                : new Date(nextDate).getDate()

            sTime = nextYear + nextMonth + nextDay
        } else {
            sTime = (Number(sTime) + 1).toString()
        }
    }

    if (includeHeadAndTail) {
        diffdate.push(endDate)
    } else {
        diffdate.shift()
    }

    return diffdate
}

export default dateGap
