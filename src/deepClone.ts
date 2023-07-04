/**
 * @description 数组或对象的深度克隆
 * @param {*} obj
 * @returns {*} 返回新的克隆数组或对象
 */
function deepClone<T>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    if (Array.isArray(obj)) {
        const clonedArray = obj.map(item => deepClone(item))
        return clonedArray as T
    }

    const clonedObj: Partial<T> = {}
    Object.keys(obj).forEach(key => {
        clonedObj[key as keyof typeof obj] = deepClone(obj[key as keyof typeof obj])
    })

    return clonedObj as T
}

export default deepClone
