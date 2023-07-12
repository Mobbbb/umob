import { dateFormat } from '../index'

describe('dateFormat: ', () => {
    it('Testing Error input', () => {
        expect(dateFormat('202112301')).toEqual('')
    })

    it('Testing Date input', () => {
        expect(dateFormat(new Date('2021-12-30'))).toEqual('2021-12-30')
    })

    it('Testing number input', () => {
        expect(dateFormat(1640822400000)).toEqual('2021-12-30')
    })

    it('Testing string input 1', () => {
        expect(dateFormat('2021-12-30')).toEqual('2021-12-30')
    })

    it('Testing string input 2', () => {
        expect(dateFormat('20211230')).toEqual('2021-12-30')
    })

    it('Testing string input 3', () => {
        expect(dateFormat('2021/12/30')).toEqual('2021-12-30')
    })

    it('Testing string input 4', () => {
        expect(dateFormat('2021/12/30 05:32:33')).toEqual('2021-12-30')
    })

    it('Testing format', () => {
        expect(dateFormat(new Date('2021-12-30'), 'yyyy.MM.dd W')).toEqual('2021.12.30 四')
    })

    it('Testing format of millisecond', () => {
        expect(dateFormat(new Date(1687246127011), 'S')).toEqual('11')
    })
})
