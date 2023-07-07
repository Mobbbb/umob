import toDate from './toDate'
import isVaildDate from './isVaildDate'

/**
 * @description 时间格式化
 * @param {*} argDate 日期
 * @param {String} argFmt 日期格式
 * @returns {String} date
 */
function dateFormat(argDate: any, argFmt: string = 'yyyy-MM-dd'): string {
    const date = toDate(argDate)
    let fmt = argFmt

    if (!isVaildDate(date)) return ''

    const week = ['日', '一', '二', '三', '四', '五', '六']

    interface oDate {
        'M+': number,
        'd+': number, // 日
        'h+': number, // 小时
        'm+': number, // 分
        's+': number, // 秒
        'q+': number, // 季度
        'S': number, // 毫秒
        'w': number, // 周
        'W': string, // 大写周
        'T': string,
        [index: string]: any,
    }

    const o: oDate = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds(), // 毫秒
        w: date.getDay(), // 周
        W: week[date.getDay()], // 大写周
        T: 'T',
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length))
    }

    Object.keys(o).forEach(k => {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(String(o[k]).length),
            )
        }
    })
    return fmt
}

export default dateFormat
