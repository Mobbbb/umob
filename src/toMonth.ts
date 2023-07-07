/**
 * @description 将参数转化为yyyy-MM格式
 * @param {*} params 入参
 * @return {Date} 返回yyyy-MM格式的日期，无法转化将返回空字符串
 */
function toMonth(params: any): string {
    let paramsDate = ''
    if (typeof params === 'string') paramsDate = params
    if (typeof params === 'number') paramsDate = params.toString()

    const monthRegex = /^(\d{4})\D?(\d{2})$/
    const match = paramsDate.match(monthRegex)

    if (!match) return ''

    const year = match[1]
    const month = match[2]

    // 校验月份的范围
    if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) return ''

    return `${year}-${month}`
}

export default toMonth
