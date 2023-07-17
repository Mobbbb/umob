/**
 * @description 截取两个特征字符串之间的内容
 * @param {String} str 被截取的字符串
 * @param {String} startSymbol 起始特征字符串
 * @param {String} endSymbol 终止特征字符串
 * @param {Object} opt 参数配置
 * @param {Boolean} opt.greedyMode 是否开启贪婪模式，默认关闭，返回结果中将包含最大匹配长度的字符串
 * @param {Boolean} opt.global 是否开启全局匹配，默认关闭，开启后将返回所有两个特征字符串之间的内容数组
 * @return {String | Array} 两个特征字符串之间的内容
 */
function extractStr(str: string, startSymbol: string, endSymbol: string, opt: {
    greedyMode?: boolean,
    global?: boolean,
} = {}): string | string[] {
    const { greedyMode = false, global = false } = opt

    if (!endSymbol && !startSymbol) {
        const globalRes = str ? [str] : []
        return global ? globalRes : str
    } else if (!endSymbol) { // endSymbol为空，不考虑贪婪模式
        const resArr = []
        let resIndex = str.indexOf(startSymbol, 0)
        if (resIndex === -1) return global ? [] : ''

        if (!global) return str.slice(resIndex + 1)

        while (resIndex !== -1) {
            resArr.push(str.slice(resIndex + 1))
            resIndex = str.indexOf(startSymbol, resIndex + 1)
        }
        return resArr
    } else if (!startSymbol) { // startSymbol为空
        const resArr = []
        let resIndex = str.indexOf(endSymbol, 0)
        if (resIndex === -1) return global ? [] : ''

        if (!global && !greedyMode) return str.slice(0, resIndex)
        if (global && !greedyMode) return [str.slice(0, resIndex)]

        while (resIndex !== -1) { // 贪婪全匹配
            resArr.push(str.slice(0, resIndex))
            resIndex = str.indexOf(endSymbol, resIndex + 1)
        }
        // 贪婪非全匹配
        if (!global && greedyMode) return resArr[resArr.length - 1]

        return resArr
    }

    let pattern: RegExp
    const greedyExp = `(?<=${startSymbol})(.*)(?=${endSymbol})`
    const notGreedyExp = `(?<=${startSymbol})(.*?)(?=${endSymbol})`
    if (greedyMode) {
        pattern = new RegExp(greedyExp)
    } else {
        pattern = new RegExp(notGreedyExp, global ? 'g' : '')
    }
    const matches = str.match(pattern)
    if (!matches) return global ? [] : ''

    if (greedyMode && global) { // 贪婪全匹配
        const globalMatches = str.match(new RegExp(notGreedyExp, 'g')) as Array<string>
        return globalMatches.concat(matches[0])
    }

    // 非贪婪的全匹配
    if (!greedyMode && global) return matches

    // 非全匹配，返回字符串
    return matches[0]
}

export default extractStr
