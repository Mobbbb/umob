import { dateGap } from '../index'

describe('dateGap: ', () => {
    it('Testing type of \'yyyy-MM-dd\'', () => {
        expect(dateGap('2021-12-30', '2022-01-02')).toEqual([
            '2021-12-30', '2021-12-31', '2022-01-01', '2022-01-02',
        ])
    })

    it('Testing type of \'yyyy-MM\'', () => {
        expect(dateGap('2021-11', '2022-03')).toEqual(['2021-11', '2021-12', '2022-01', '2022-02', '2022-03'])
    })

    it('Testing type of \'yyyy\'', () => {
        expect(dateGap('2021', '2023')).toEqual(['2021', '2022', '2023'])
    })

    it('Testing optional parameters', () => {
        expect(dateGap('2021', '2024', false)).toEqual(['2022', '2023'])
    })

    // it('dateGap() should throw Error', () => {
    //     expect(() => { dateGap('2022--', '2022--') }).toThrow('stime and etime must be a valid date')
    // })

    it('Testing Error input', () => {
        expect(dateGap('2022--', '2022--')).toEqual(['1970-01-01'])
    })
})
