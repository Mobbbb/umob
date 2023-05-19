const isObject = require('./isObject.js')
/**
 * @description sort方法的回调
 * @param {String} key sort item若为对象，key需要传入比对的属性的键值
 * @param {String} type desc | asc
 * @returns {Function}
 */
function sortCallback(params = {}) {
    if (!isObject(params)) {
        throw new Error('Type of params must be "Object"')
    }

    const { key = '', type = 'desc' } = params

    if (type !== 'desc' && type !== 'asc') {
        throw new Error('Type must be "desc" or "asc"')
    }

    return function (a, b) {
        if (key) {
            return type === 'desc' ? b[key] - a[key] : a[key] - b[key]
        } else {
            return type === 'desc' ? b - a : a - b
        }
    }
}

module.exports = sortCallback
