/**
 * @description 提取字符串中的数字
 * @param {String} str 待提取的字符串
 * @param {String} allowNegative 是否将 - 作为负号识别
 * @return {Array} 数字
 */
function extractNumbers(str: string, allowNegative: boolean = false): number[] {
    const regex = allowNegative ? /-?\d+(\.\d+)?/g : /\d+(\.\d+)?/g
    const matches = str.match(regex)

    if (matches) {
        return matches.map(match => parseFloat(match))
    } else {
        return []
    }
}

export default extractNumbers
