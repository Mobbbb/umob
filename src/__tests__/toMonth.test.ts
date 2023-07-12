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
            toMonth(-202307) ||
            toMonth(20230406) ||
            toMonth('20230406') ||
            toMonth('2023-04-06') ||
            toMonth(new Date('2023-04-06'))
        expect(status).toEqual('')
    })
})
