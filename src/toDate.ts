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
    const match = paramsDate.match(dateRegex)

    const INVALID_DATE = new Date('')
    if (!match) return INVALID_DATE

    const year = parseInt(match[1], 10)
    const month = parseInt(match[3], 10)
    const day = parseInt(match[4], 10)
    const time = match[5] ? match[5] : ' 00:00:00'

    const date = new Date(`${year}-${month}-${day}${time}`)

    if (
        date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
    ) { // 输入的年月日时分秒不合法
        return INVALID_DATE
    }

    return date
}

export default toDate
