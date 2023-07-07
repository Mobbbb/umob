/**
 * @description 获取cookie
 * @param {String} name cookie键名
 * @returns {String}
 */
function getCookie(name: string): string {
    const cookieArr = document.cookie.split(';')
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split('=')
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1])
        }
    }
    return ''
}

export default getCookie
