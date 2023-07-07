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

    it('Testing type of \'yyyyMM\'', () => {
        expect(dateGap('202111', '202203')).toEqual(['2021-11', '2021-12', '2022-01', '2022-02', '2022-03'])
    })

    it('Testing type of \'yyyy.MM.dd\'', () => {
        expect(dateGap('2021.12.30', '2022.01.02')).toEqual([
            '2021-12-30', '2021-12-31', '2022-01-01', '2022-01-02',
        ])
    })

    it('Testing option 1', () => {
        expect(dateGap('2021.12.30', '2022.01.02', {
            includeTail: false,
            format: 'yyyy.MM.dd',
        })).toEqual(['2021.12.30', '2021.12.31', '2022.01.01'])
    })

    it('Testing option 2', () => {
        expect(dateGap('2021.12.30', '2022.01.02', {
            includeHead: false,
            format: 'yyyy.MM.dd',
        })).toEqual(['2021.12.31', '2022.01.01', '2022.01.02'])
    })

    it('Testing option 3', () => {
        expect(dateGap('2021/12/30', '2022/01/02', {
            includeHead: false,
            includeTail: false,
            format: 'yyyy/MM/dd',
        })).toEqual(['2021/12/31', '2022/01/01'])
    })

    // it('dateGap() should throw Error', () => {
    //     expect(() => { dateGap('2022--', '2022--') }).toThrow('stime and etime must be a valid date')
    // })

    it('Testing Error input', () => {
        expect(dateGap('2021', '2024')).toEqual([])
    })

    it('Testing Error input', () => {
        expect(dateGap('2022--', '2022--')).toEqual([])
    })
})
