import getCookie from './getCookie'

/**
 * @description 删除cookie
 * @param {String} name cookie键名
 * @param {String} domain 所在的域
 */
function delCookie(name: string, domain: string = window.location.hostname): void {
    document.cookie = `${name}=${getCookie(name)};expires=${new Date(1)};max-age=0;domain=${domain};path=/`
}

export default delCookie
