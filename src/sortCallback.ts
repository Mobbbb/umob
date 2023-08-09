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

    function compareFn(a: T, b: T): number {
        if (a === null || typeof a === 'undefined') return 1
        if (b === null || typeof b === 'undefined') return -1

        let { compareA, compareB } = trans(a, b)

        if (key && isObject(a) && isObject(b)) {
            if (a[key] === null) return 1
            if (b[key] === null) return -1
            compareA = trans(a[key], b[key]).compareA
            compareB = trans(a[key], b[key]).compareB
        }

        if (Number.isNaN(compareA)) return 1
        if (Number.isNaN(compareB)) return -1

        const descExp = compareB > compareA ? 1 : -1
        const ascExp = compareA > compareB ? 1 : -1

        return isDesc ? descExp : ascExp
    }

    return compareFn
}

export default sortCallback
