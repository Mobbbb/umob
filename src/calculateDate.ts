import toDate from './toDate'
import toMonth from './toMonth'
import isVaildDate from './isVaildDate'
import dateFormat from './dateFormat'

/**
 * @description 计算输入日期num天(月)之后的日期
 * @param {Number | String | Date} inputDate 日期，20201011、'2020-10-11'、'2020/10/11'、new Date('2020-10-11')
 * @param {Number} num 天数(月数)
 * @param {String} fmt 返回的日期格式
 * @return {string} num天(月)之后的日期
 */
function calculateDate(
    inputDate: number | string | Date,
    num: number,
    fmt?: string,
): string {
    const date = toDate(inputDate)

    if (isVaildDate(date)) {
        date.setTime(date.getTime() + num * 24 * 3600 * 1000)
        return dateFormat(date, fmt)
    }

    if (toMonth(inputDate)) {
        // 月份计算
        const [yearStr, monthStr] = toMonth(inputDate).split('-')
        const year = parseInt(yearStr, 10)
        const month = parseInt(monthStr, 10)

        const futureDate = new Date(year, month - 1)
        futureDate.setMonth(futureDate.getMonth() + num)

        const futureYear = futureDate.getFullYear()
        const futureMonth = futureDate.getMonth() + 1

        const paddedMonth = futureMonth < 10 ? `0${futureMonth}` : `${futureMonth}`
        return `${futureYear}-${paddedMonth}`
    }

    return ''
}

export default calculateDate
