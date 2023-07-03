import { isObject } from '../index'

describe('isObject: ', () => {
    it('Determine the type of number', async () => {
        expect(isObject(1)).toEqual(false)
    })

    it('Determine the type of string', async () => {
        expect(isObject('1')).toEqual(false)
    })

    it('Determine the type of boolean', async () => {
        expect(isObject(false)).toEqual(false)
    })

    it('Determine the type of array', async () => {
        expect(isObject([])).toEqual(false)
    })

    it('Determine the type of undefined', async () => {
        expect(isObject(undefined)).toEqual(false)
    })

    it('Determine the type of null', async () => {
        expect(isObject(null)).toEqual(false)
    })

    it('Determine the type of symbol', async () => {
        const symbol2 = Symbol('this is symbol')
        expect(isObject(symbol2)).toEqual(false)
    })

    it('Determine the type of empty object', async () => {
        expect(isObject({})).toEqual(true)
    })
})
