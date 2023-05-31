/**
 * @description 时间格式化
 * @param {Date | String} date 日期
 * @param {String} fmt 日期格式
 * @returns {String} date
 */
export function dateFormat(date: Date | string, fmt: string): string {
    if (!(date instanceof Date)) {
        date = new Date(date)
    }

    const a = ['日', '一', '二', '三', '四', '五', '六']

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

    let o: oDate = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds(), // 毫秒
        'w': date.getDay(), // 周
        'W': a[date.getDay()], // 大写周
        'T': 'T',
    }
    if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) }

    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)
                ? o[k]
                : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt
}
