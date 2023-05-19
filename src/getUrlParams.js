/**
 * @description 获取url的参数
 * @param {String} variable 参数的key，若为空，将返回url所有参数对象
 * @returns {Object | String} 传入variable，则返回variable对应的value，若为空，将返回url所有参数对象
 */
function getUrlParams(variable) {
    const url = window.location.href
    const queryStartIndex = url.indexOf('?')

    if (queryStartIndex === -1) {
        // URL 没有查询参数
        return variable ? null : {}
    }

    const queryString = url.substring(queryStartIndex + 1)
    const params = {}

    const regex = /([^&=]+)=([^&]*)/g
    let match

    while ((match = regex.exec(queryString)) !== null) {
        const key = decodeURIComponent(match[1])
        const value = decodeURIComponent(match[2])
        params[key] = value
    }

    if (variable) {
        return params[variable] || null
    } else {
        return params
    }
}

module.exports = getUrlParams
