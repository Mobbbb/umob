/**
 * @description 函数节流, 示例：window.onscroll = throttle(onScroll, 200)
 * @param {Function} fn 需要节流的方法, 如: scroll、resize、mousemove
 * @param {Number} wait 节流间隔
 * @param {Number} leading 第一次调用是否立即执行一次fn
 * @returns 
 */
function throttle(fn, wait, leading = true) {
    if (wait == null) return fn
    const timestampProvider = typeof performance === 'object' ? performance : Date
    let context, args, result
    let timeout = null
    let previous = 0
    const later = function() {
        previous = leading === false ? 0 : timestampProvider.now()
        timeout = null
        result = fn.apply(context, args)
        if (!timeout) context = args = null
    }
    return function() {
        let now = timestampProvider.now()
        // 如果是第一次执行函数且leading为false, 那么就延时执行
        if (!previous && leading === false) previous = now
        let remaining = wait - (now - previous)
        context = this
        args = arguments
        // 到达触发时间 || 由于机器原因导致时间计算不正确, 那么立即执行
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            previous = now
            result = fn.apply(context, args)
            if (!timeout) context = args = null
        } else if (!timeout) {
            // 如果没有函数调用在等待, 那么就延时执行此次函数调用
            timeout = setTimeout(later, remaining)
        }
        return result
    }
}

module.exports = throttle
