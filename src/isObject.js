/**
 * @description 判断是否为对象
 * @param {*} variable 
 * @returns {Boolean}
 */
function isObject(variable) {
    return Object.prototype.toString.call(variable) === '[object Object]'
}

module.exports = isObject
