/**
 * @description 获取两个日期中间的日期
 * @param {String} stime yyyy-MM-dd/yyyy-MM/yyyy 开始日期
 * @param {String} etime yyyy-MM-dd/yyyy-MM/yyyy 结束日期
 * @param {Boolean} includeHeadAndTail 是否包含起止日期
 * @returns {Array}
 */
function dateGap(stime, etime, includeHeadAndTail = true) {
    if (typeof stime !== 'string' || typeof etime !== 'string') {
        throw new Error('Type of stime or etime must be "string"')
    }
    if (stime.length !== etime.length) {
        throw new Error('Length of stime must be the same as etime')
    }
    if (stime.length !== 10 && stime.length !== 7 && stime.length !== 4) {
        throw new Error('stime and etime must be format like "yyyy-MM-dd"')
    }
    if (isNaN((new Date(stime)).getDate()) || isNaN((new Date(etime)).getDate())) {
        throw new Error('stime and etime must be a valid date')
    }
    
    const length = stime.length
    let diffdate = []
    while(stime < etime) {
        diffdate.push(stime)

        if (length === 7) {
            let nextMonth = parseInt(stime.slice(5, 7)) + 1
            let nextYear = parseInt(stime.slice(0, 4))
            nextYear = nextMonth > 12 ? nextYear + 1 : nextYear
            nextMonth = nextMonth > 12 ? nextMonth - 12 : nextMonth

            nextMonth = nextMonth < 10 ? `0${nextMonth}` : nextMonth
            stime = `${nextYear}-${nextMonth}`
        } else if (length === 10) {
            //获取开始日期时间戳
            let timeTs = new Date(stime).getTime()
            
            //增加一天时间戳后的日期
            let nextDate = timeTs + (24*60*60*1000)
            
            let nextYear = new Date(nextDate).getFullYear() + '-'
            let nextMonth = (new Date(nextDate).getMonth() + 1 < 10)
                ? '0' + (new Date(nextDate).getMonth() + 1) + '-'
                : (new Date(nextDate).getMonth() + 1) + '-'
            let nextDay = (new Date(nextDate).getDate() < 10)
                ? '0' + new Date(nextDate).getDate()
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

module.exports = dateGap
