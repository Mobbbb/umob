import { dateInterval } from '../index'

describe('isVaildDate: ', () => {
    it('Testing same input', async () => {
        expect(dateInterval(new Date(2023, 12, 1, 12, 0, 0), new Date(2023, 12, 1, 12, 0, 0))).toEqual(0)
    })

    it('Testing format = "h"', async () => {
        expect(dateInterval(new Date(2023, 12, 1, 9, 0, 0), new Date(2023, 12, 1, 12, 0, 0), {
            format: 'h',
        })).toEqual(-3)
    })

    it('Testing format = "m"', async () => {
        expect(dateInterval(new Date(2023, 12, 1, 9, 16, 0), new Date(2023, 12, 1, 12, 0, 0), {
            format: 'm',
        })).toEqual(-164)
    })

    it('Testing format = "s"', async () => {
        expect(dateInterval(new Date(2023, 12, 1, 12, 0, 0), new Date(2022, 12, 1, 12, 0, 0), {
            format: 's',
        })).toEqual(31536000)
    })

    it('Testing format = "d"', async () => {
        expect(dateInterval(new Date(2023, 12, 3, 15, 0, 0), new Date(2023, 12, 1, 12, 0, 0), {
            format: 'd',
        })).toEqual(2.125)
    })

    it('Testing string input', async () => {
        expect(dateInterval('2023-01-21', '2023-01-10')).toEqual(11 * 24 * 60 * 60 * 1000)
    })

    it('NaN', async () => {
        expect(dateInterval(new Date('a'), new Date('b'))).toEqual(NaN)
    })

    it('NaN', async () => {
        expect(dateInterval('1', '2')).toEqual(NaN)
    })
})
