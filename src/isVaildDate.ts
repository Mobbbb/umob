/**
 * @description 判断是否为有效的日期
 * @param {*} variable
 * @returns {Boolean}
 */
function isVaildDate(variable: any): boolean {
    return variable instanceof Date && !Number.isNaN(variable.getTime())
}

export default isVaildDate
