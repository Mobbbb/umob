import { dateGap } from '../index'

describe('dateGap: ', () => {
    it(`dateGap('2021-12-30', '2022-01-02') should return Array [
        '2021-12-30', '2021-12-31', '2022-01-01', '2022-01-02'
    ]`, () => {
        expect(dateGap('2021-12-30', '2022-01-02')).toEqual([
            '2021-12-30', '2021-12-31', '2022-01-01', '2022-01-02',
        ])
    })
    
    it(`dateGap('2021-11', '2022-03') should return Array [
        '2021-11', '2021-12', '2022-01', '2022-02', '2022-03'
    ]`, () => {
        expect(dateGap('2021-11', '2022-03')).toEqual(['2021-11', '2021-12', '2022-01', '2022-02', '2022-03'])
    })
    
    it(`dateGap('2021', '2023') should return Array ['2021', '2022', '2023']`, () => {
        expect(dateGap('2021', '2023')).toEqual(['2021', '2022', '2023'])
    })
    
    it(`dateGap('2021', '2024', false) should return Array ['2022', '2023']`, () => {
        expect(dateGap('2021', '2024', false)).toEqual(['2022', '2023'])
    })
    
    // it('dateGap() should throw Error', () => {
    //     expect(() => { dateGap('2022--', '2022--') }).toThrow('stime and etime must be a valid date')
    // })
    
    it('dateGap(\'2022--\', \'2022--\') should return [\'1970-01-01\']', () => {
        expect(dateGap('2022--', '2022--')).toEqual(['1970-01-01'])
    })
})