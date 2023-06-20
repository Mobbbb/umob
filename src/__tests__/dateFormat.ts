import { dateFormat } from '../index'

describe('dateFormat: ', () => {
    it(`Testing Error input`, () => {
        expect(dateFormat('20211230')).toEqual('1970-01-01')
    })

    it(`Testing Date input`, () => {
        expect(dateFormat(new Date('2021-12-30'))).toEqual('2021-12-30')
    })

    it(`Testing number input`, () => {
        expect(dateFormat(1640822400000)).toEqual('2021-12-30')
    })

    it(`Testing string input`, () => {
        expect(dateFormat('2021-12-30')).toEqual('2021-12-30')
    })

    it(`Testing format`, () => {
        expect(dateFormat(new Date('2021-12-30'), 'yyyy.MM.dd W')).toEqual('2021.12.30 四')
    })

    it(`Testing format of millisecond`, () => {
        expect(dateFormat(new Date(1687246127011), 'S')).toEqual('11')
    })

})