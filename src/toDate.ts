/**
 * @description 将参数转化为日期格式
 * @param {*} params 入参支持字符串、数字的转化，字符串支持yyyy(\D)?MM(\2)dd、yyyy(\D)?MM(\2)dd hh:mm:ss格式，数字将被识别为时间戳
 * @return {Date} 返回日期
 */
function toDate(params: any): Date {
    if (params instanceof Date) return params
    if (typeof params === 'number') return new Date(params)

    let paramsDate = ''
    if (typeof params === 'string') paramsDate = params

    const dateRegex = /^(\d{4})(\D)?(\d{2})\2(\d{2})(\s(\d{2}):(\d{2}):(\d{2}))?$/
    const match = paramsDate.match(dateRegex) || []

    const monthRegex = /^(\d{4})\D?(\d{2})$/
    const monthMatch = paramsDate.match(monthRegex)

    const INVALID_DATE = new Date('')

    let year = 0
    let month = 0
    let day = 1
    let hours = 0
    let minutes = 0
    let seconds = 0
    if (match.length) {
        year = parseInt(match[1], 10)
        month = parseInt(match[3], 10) - 1
        day = parseInt(match[4], 10)
        hours = parseInt(match[6], 10) || 0
        minutes = parseInt(match[7], 10) || 0
        seconds = parseInt(match[8], 10) || 0
    } else if (monthMatch) {
        year = parseInt(monthMatch[1], 10)
        month = parseInt(monthMatch[2], 10) - 1
    } else {
        return INVALID_DATE
    }

    const date = new Date(year, month, day, hours, minutes, seconds)

    if (
        date.getFullYear() !== year ||
        date.getMonth() !== month ||
        date.getDate() !== day
    ) { // 输入的年月日时分秒不合法
        return INVALID_DATE
    }

    return date
}

export default toDate
