/**
 * @description 函数防抖(进电梯), 示例：window.onscroll = debounce(onScroll, 200)
 * @param {Function} fn 需要防抖的方法, 如: 输入框联想、keyup
 * @param {Number} argWait 防抖间隔
 * @param {Boolean} immediate 第一次调用是否立即执行一次fn
 * @returns {Function}
 */
function debounce(fn: () => any, argWait: number, immediate: boolean = true): () => any {
    const wait = Number(argWait) || 0
    const timestampProvider = typeof performance === 'object' ? performance : Date
    let timeout: NodeJS.Timeout | null
    let args: any
    let context: any
    let timestamp: number
    let result: any

    const later = function() {
        const last = timestampProvider.now() - timestamp
        // 每次调用都会更新timestamp的值，如果时间间隔没有超过wait，那么启用新的定时器
        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last)
        } else {
            timeout = null
            if (!immediate) {
                result = fn.apply(context, args)
                if (!timeout) {
                    context = null
                    args = null
                }
            }
        }
    }

    return function(this: any, ...restArgs) {
        context = this
        args = restArgs
        timestamp = timestampProvider.now()
        // 立即执行
        const callNow = immediate && !timeout
        if (!timeout) timeout = setTimeout(later, wait)
        if (callNow) {
            result = fn.apply(context, args)
            context = null
            args = null
        }

        return result
    }
}

export default debounce
