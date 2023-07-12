import { isVaildDate } from '../index'

describe('isVaildDate: ', () => {
    it('Determine the type of number', async () => {
        expect(isVaildDate(1)).toEqual(false)
    })

    it('Determine the type of string', async () => {
        expect(isVaildDate('1')).toEqual(false)
    })

    it('Determine the type of boolean', async () => {
        expect(isVaildDate(false)).toEqual(false)
    })

    it('Determine the type of array', async () => {
        expect(isVaildDate([])).toEqual(false)
    })

    it('Determine the type of undefined', async () => {
        expect(isVaildDate(undefined)).toEqual(false)
    })

    it('Determine the type of null', async () => {
        expect(isVaildDate(null)).toEqual(false)
    })

    it('Determine the type of symbol', async () => {
        const symbol2 = Symbol('this is symbol')
        expect(isVaildDate(symbol2)).toEqual(false)
    })

    it('Determine error date', async () => {
        expect(isVaildDate(new Date(''))).toEqual(false)
    })

    it('Determine normal date', async () => {
        expect(isVaildDate(new Date('2023-01-01'))).toEqual(true)
    })
})
