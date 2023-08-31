import { toMonth } from '../index'

describe('toMonth: ', () => {
    it('Date type 1', () => {
        expect(toMonth('202307')).toEqual('2023-07')
    })

    it('Date type 2', () => {
        expect(toMonth('2023-07')).toEqual('2023-07')
    })

    it('Date type 3', () => {
        expect(toMonth('2023.07')).toEqual('2023-07')
    })

    it('Date type 4', () => {
        expect(toMonth('2023/07')).toEqual('2023-07')
    })

    it('Date type 5', () => {
        expect(toMonth('2023,07')).toEqual('2023-07')
    })

    it('Date type 6', () => {
        expect(toMonth(202307)).toEqual('2023-07')
    })

    it('Date type 7', () => {
        expect(toMonth(new Date('2023-04-06'))).toEqual('2023-04')
    })

    it('Date type 8', () => {
        expect(toMonth(20230406)).toEqual('2023-04')
    })

    it('Date type 9', () => {
        expect(toMonth('20230406')).toEqual('2023-04')
    })

    it('Date type 10', () => {
        expect(toMonth('2023-04-06')).toEqual('2023-04')
    })

    it('Error date', () => {
        const status = toMonth(true) ||
            toMonth(undefined) ||
            toMonth(null) ||
            toMonth([]) ||
            toMonth({}) ||
            toMonth('2023/00') ||
            toMonth('2023/00') ||
            toMonth('2307') ||
            toMonth('-202307') ||
            toMonth(-202307)
        expect(status).toEqual('')
    })
})
