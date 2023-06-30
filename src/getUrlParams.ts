interface O {
    [others: string]: string,
}

/**
 * @description 获取url的参数
 * @param {String} variable 参数的key，若为空，将返回url所有参数对象
 * @returns {Object | String} 传入variable，则返回variable对应的value，若为空，将返回url所有参数对象
 */
function getUrlParams(variable?: string): O | string {
    const url = window.location.href
    const queryStartIndex = url.indexOf('?')

    if (queryStartIndex === -1) {
        // URL 没有查询参数
        return variable ? '' : {}
    }

    const queryString = url.substring(queryStartIndex + 1)
    const params: O = {}

    const regex = /([^&=]+)=([^&]*)/g
    const match = regex.exec(queryString)

    while (match !== null) {
        const key = decodeURIComponent(match[1])
        const value = decodeURIComponent(match[2])
        params[key] = value
    }

    if (variable) {
        return params[variable] || ''
    }
    return params
}

export default getUrlParams
