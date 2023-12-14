import isObject from './isObject'

const enum sortType {
    desc = 'desc',
    asc = 'asc',
}

const dateRegex = /^(\d{4})(\D)?(\d{2})\2(\d{2})(\s(\d{2}):(\d{2}):(\d{2}))?$/

function trans(a: any, b: any) {
    let compareA: number = 0
    let compareB: number = 0
    if (dateRegex.test(a) && dateRegex.test(b)) {
        return {
            compareA: a,
            compareB: b,
        }
    }

    if (typeof a === 'string') compareA = Number(a)
    if (typeof b === 'string') compareB = Number(b)

    if (typeof a === 'number') compareA = a
    if (typeof b === 'number') compareB = b

    return {
        compareA,
        compareB,
    }
}

/**
 * @description sort方法的回调
 * @param {Object} params
 * @param {String} params.key sort item若为对象，key需要传入比对的属性的键值
 * @param {String} params.type desc | asc
 * @returns {Function}
 */
function sortCallback<T, K extends keyof T>(params: {
    type?: 'desc' | 'asc',
    key?: K,
} = {}): (a: T, b: T) => number {
    const { type = sortType.desc, key } = params

    const isDesc = type === sortType.desc

    let errorNum = Infinity
    if (isDesc) errorNum = -Infinity

    function compareFn(a: T, b: T): number {
        let { compareA, compareB } = trans(a, b)

        if (a === null || typeof a === 'undefined') compareA = errorNum
        if (b === null || typeof b === 'undefined') compareB = errorNum

        if (key && isObject(a) && isObject(b)) {
            compareA = trans(a[key], b[key]).compareA
            compareB = trans(a[key], b[key]).compareB

            if (a[key] === null || typeof a[key] === 'undefined') compareA = errorNum
            if (b[key] === null || typeof b[key] === 'undefined') compareB = errorNum
        }

        if (Number.isNaN(compareA)) compareA = errorNum
        if (Number.isNaN(compareB)) compareB = errorNum

        let descExp = 0
        let ascExp = 0
        if (compareB > compareA) {
            descExp = 1
        } else if (compareB < compareA) {
            descExp = -1
        }

        if (compareA > compareB) {
            ascExp = 1
        } else if (compareA < compareB) {
            ascExp = -1
        }

        return isDesc ? descExp : ascExp
    }

    return compareFn
}

export default sortCallback
