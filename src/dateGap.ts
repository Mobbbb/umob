/**
 * @description 获取两个日期中间的日期
 * @param {String} startTime yyyy-MM-dd/yyyy-MM/yyyy 开始日期
 * @param {String} etime yyyy-MM-dd/yyyy-MM/yyyy 结束日期
 * @param {Boolean} includeHeadAndTail 是否包含起止日期
 * @returns {Array}
 */
function dateGap(startTime: string, etime: string, includeHeadAndTail: boolean = true): string[] {
    let stime = startTime
    if (Number.isNaN((new Date(stime)).getDate()) || Number.isNaN((new Date(etime)).getDate())) {
        return ['1970-01-01']
    }

    const { length } = stime
    const diffdate = []
    while (stime < etime) {
        diffdate.push(stime)

        if (length === 7) {
            let nextMonth: number | string = parseInt(stime.slice(5, 7), 10) + 1
            let nextYear = parseInt(stime.slice(0, 4), 10)
            nextYear = nextMonth > 12 ? nextYear + 1 : nextYear
            nextMonth = nextMonth > 12 ? nextMonth - 12 : nextMonth

            nextMonth = nextMonth < 10 ? `0${nextMonth}` : nextMonth
            stime = `${nextYear}-${nextMonth}`
        } else if (length === 10) {
            // 获取开始日期时间戳
            const timeTs = new Date(stime).getTime()

            // 增加一天时间戳后的日期
            const nextDate = timeTs + (24 * 60 * 60 * 1000)

            const nextYear = `${new Date(nextDate).getFullYear()}-`
            const nextMonth = (new Date(nextDate).getMonth() + 1 < 10)
                ? `0${(new Date(nextDate).getMonth() + 1)}-`
                : `${(new Date(nextDate).getMonth() + 1)}-`
            const nextDay = (new Date(nextDate).getDate() < 10)
                ? `0${new Date(nextDate).getDate()}`
                : new Date(nextDate).getDate()

            stime = nextYear + nextMonth + nextDay
        } else {
            stime = (Number(stime) + 1).toString()
        }
    }

    if (includeHeadAndTail) {
        diffdate.push(etime)
    } else {
        diffdate.shift()
    }

    return diffdate
}

export default dateGap
