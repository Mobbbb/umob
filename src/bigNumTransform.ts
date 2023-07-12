/**
 * @description 将大数字转化为万/亿的形式
 * @param {Number} num 待转化的数
 * @param {Object} opt 配置参数
 * @param {Number} opt.float 精度
 * @param {Boolean} opt.merge 返回结果是否与单位合并
 * @param {Array} opt.unit 单位配置
 * @returns {Array | String}
 */
function bigNumTransform(num: number | string, opt: {
    float?: number,
    merge?: boolean,
    unit?: [string, string],
} = {}): [string, string] | string {
    const { float = 2, merge = true, unit = ['万', '亿'] } = opt
    const NumberNum = Number(num)
    if (Number.isNaN(NumberNum)) return merge ? 'NaN' : ['NaN', '']

    let transNum = NumberNum
    if (NumberNum < 0) transNum = 0 - NumberNum

    const arr = transNum.toString().split('.')
    const { length } = arr[0]
    let result = arr[0]
    let resUnit = ''
    if (length < 5) { // 0 - 9,999
        result = transNum.toFixed(float)
    } else if (length >= 5 && length <= 8) { // 10,000 - 99,999,999
        [resUnit] = unit
        result = (transNum / 10000).toFixed(float)
    } else {
        [, resUnit] = unit
        result = (transNum / 100000000).toFixed(float)
    }

    // 进位处理
    if (Number(result) >= 10000) {
        result = (Number(result) / 10000).toFixed(float)
        if (resUnit === '') {
            [resUnit] = unit
        } else if (resUnit === unit[0]) {
            [, resUnit] = unit
        }
    }

    if (NumberNum < 0) result = `-${result}`
    return merge ? `${result}${resUnit}` : [result, resUnit]
}

export default bigNumTransform
