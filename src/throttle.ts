/**
 * @description 函数节流(抽帧), 示例：window.onscroll = throttle(onScroll, 200)
 * @param {Function} fn 需要节流的方法, 如: scroll、resize、mousemove
 * @param {Number} argWait 节流间隔
 * @param {Number} immediate 第一次调用是否立即执行一次fn
 * @returns {Function}
 */
function throttle(fn: () => any, argWait: number, immediate: boolean = true): () => any {
    const wait = Number(argWait) || 0
    const timestampProvider = typeof performance === 'object' ? performance : Date
    let context: any
    let args: any
    let result: any
    let timeout: NodeJS.Timeout | null = null
    let previous = 0

    const later = function() {
        previous = immediate === false ? 0 : timestampProvider.now()
        timeout = null
        result = fn.apply(context, args)
        if (!timeout) {
            context = null
            args = null
        }
    }
    return function(this: any, ...restArgs) {
        const now = timestampProvider.now()
        // 如果是第一次执行函数且immediate为false, 那么就延时执行
        if (!previous && immediate === false) previous = now
        const remaining = wait - (now - previous)
        context = this
        args = restArgs
        // 到达触发时间 || 由于机器原因导致时间计算不正确, 那么立即执行`
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            previous = now
            result = fn.apply(context, args)
            if (!timeout) {
                context = null
                args = null
            }
        } else if (!timeout) {
            // 如果没有函数调用在等待, 那么就延时执行此次函数调用
            timeout = setTimeout(later, remaining)
        }
        return result
    }
}

export default throttle
