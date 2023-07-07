import { calculateDate } from '../index'

describe('calculateDate: ', () => {
    it('Boundary month value 1', () => {
        expect(calculateDate('2023-01', -1)).toEqual('2022-12')
    })

    it('Boundary month value 2', () => {
        expect(calculateDate('2023-12', 1)).toEqual('2024-01')
    })

    it('Boundary month value 3', () => {
        expect(calculateDate('202206', 12)).toEqual('2023-06')
    })

    it('Error month value', () => {
        expect(calculateDate('202215', 1)).toEqual('')
    })

    it('Boundary date value', () => {
        expect(calculateDate('2023-01-01', -1)).toEqual('2022-12-31')
    })

    it('Boundary date value', () => {
        expect(calculateDate('2023-12-31', 1)).toEqual('2024-01-01')
    })

    it('Time Date', () => {
        expect(calculateDate('2023/07/07 12:55:12', 32)).toEqual('2023-08-08')
    })

    it('Testing format', () => {
        expect(calculateDate('2023/07/07 12:55:12', 32, 'yyyy-MM-dd hh:mm:ss')).toEqual('2023-08-08 12:55:12')
    })
})
