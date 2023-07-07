import { toDate, isVaildDate } from '../index'

describe('toDate: ', () => {
    it('Date type 1', () => {
        expect(toDate('20230710')).toEqual(new Date('2023-07-10 00:00:00'))
    })
    it('Date type 1', () => {
        expect(toDate('20230710 05:32:33')).toEqual(new Date('2023-07-10 05:32:33'))
    })

    it('Date type 2', () => {
        expect(toDate('2023-07-10')).toEqual(new Date('2023-07-10 00:00:00'))
    })

    it('Date type 2', () => {
        expect(toDate('2023-07-10 05:32:33')).toEqual(new Date('2023-07-10 05:32:33'))
    })

    it('Date type 3', () => {
        expect(toDate('2023~07~10')).toEqual(new Date('2023-07-10 00:00:00'))
    })

    it('Date type 3', () => {
        expect(toDate('2023~07~10 05:32:33')).toEqual(new Date('2023-07-10 05:32:33'))
    })

    it('Date type 4', () => {
        expect(toDate('2023.07.10')).toEqual(new Date('2023-07-10 00:00:00'))
    })

    it('Date type 4', () => {
        expect(toDate('2023.07.10 05:32:33')).toEqual(new Date('2023-07-10 05:32:33'))
    })

    it('Date type 5', () => {
        expect(toDate('2023/07/10')).toEqual(new Date('2023-07-10 00:00:00'))
    })

    it('Date type 5', () => {
        expect(toDate('2023/07/10 05:32:33')).toEqual(new Date('2023-07-10 05:32:33'))
    })

    it('Date type 6', () => {
        expect(toDate(20271112)).toEqual(new Date(20271112))
    })

    it('Date type 7', () => {
        expect(toDate(new Date('2027-11-12 00:00:00'))).toEqual(new Date('2027-11-12 00:00:00'))
    })

    it('Error date', () => {
        const status = isVaildDate(toDate(true)) ||
            isVaildDate(toDate(undefined)) ||
            isVaildDate(toDate(null)) ||
            isVaildDate(toDate({})) ||
            isVaildDate(toDate([])) ||
            isVaildDate(toDate('2023/07.10')) ||
            isVaildDate(toDate('2023/07/66')) ||
            isVaildDate(toDate('2023/07')) ||
            isVaildDate(toDate('2023-07-08 55:22:11')) ||
            isVaildDate(toDate('-20220125')) ||
            isVaildDate(toDate('202201251'))
        expect(status).toEqual(false)
    })
})
