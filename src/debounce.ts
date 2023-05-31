/**
 * @description 函数防抖, 示例：window.onscroll = debounce(onScroll, 200)
 * @param {Function} fn 需要防抖的方法, 如: 输入框联想、keyup
 * @param {Number} wait 防抖间隔
 * @param {Boolean} immediate 第一次调用是否立即执行一次fn
 * @returns {Function}
 */
export function debounce(fn: (...items: any[]) => any, wait: number, immediate: boolean = true): (...items: any[]) => any {
    if (wait == null) return fn
    const timestampProvider = typeof performance === 'object' ? performance : Date
    let timeout: NodeJS.Timeout, args: IArguments, context: any, timestamp: number, result: any

    var later = function() {
        var last = timestampProvider.now() - timestamp
        // 每次调用都会更新timestamp的值，如果时间间隔没有超过wait，那么启用新的定时器
        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last)
        } else {
            timeout = null
            if (!immediate) {
                result = fn.apply(context, args)
                if (!timeout) context = args = null
            }
        }
    }

    return function() {
        context = this
        args = arguments
        timestamp = timestampProvider.now()
        // 立即执行
        var callNow = immediate && !timeout
        if (!timeout) timeout = setTimeout(later, wait)
        if (callNow) {
            result = fn.apply(context, args)
            context = args = null
        }

        return result
    }
}