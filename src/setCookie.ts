/**
 * @description 获取cookie
 * @param {String} cookieName cookie 键名
 * @param {String} cookieValue cookie 值
 * @param {Number} daysToExpire daysToExpire 天后过期
 * @param {String} cookiePath cookie 路径
 * @param {String} cookieDomain cookie 所在的域
 */
function setCookie(
    cookieName: string,
    cookieValue: string,
    daysToExpire: number = 30,
    cookiePath: string = '/',
    cookieDomain: string = window.location.hostname,
) {
    let expires = ''
    if (daysToExpire) {
        const date = new Date()
        date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000)
        expires = `; expires=${date.toUTCString()}`
    }
    document.cookie = `${cookieName}=${cookieValue}${expires}; path=${cookiePath}; domain=${cookieDomain}`
}

export default setCookie
