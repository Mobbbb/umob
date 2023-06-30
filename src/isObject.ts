/**
 * @description 判断是否为对象
 * @param {*} variable
 * @returns {Boolean}
 */
function isObject(variable: any): boolean {
    return Object.prototype.toString.call(variable) === '[object Object]'
}

export default isObject
