import { bigNumTransform } from '../index'

describe('bigNumTransform: ', () => {
    it('Normal value', async () => {
        expect(bigNumTransform(65665)).toEqual('6.57万')
    })

    it('Normal value', async () => {
        expect(bigNumTransform(6846754135)).toEqual('68.47亿')
    })

    it('Negative value', async () => {
        expect(bigNumTransform(-99999950)).toEqual('-1.00亿')
    })

    it('Boundary value', async () => {
        expect(bigNumTransform(9999.995)).toEqual('1.00万')
    })

    it('Boundary value', async () => {
        expect(bigNumTransform(9999.994)).toEqual('9999.99')
    })

    it('Boundary value', async () => {
        expect(bigNumTransform(99999950)).toEqual('1.00亿')
    })

    it('Boundary value', async () => {
        expect(bigNumTransform(99999949)).toEqual('9999.99万')
    })

    it('Testing string value 1', async () => {
        expect(bigNumTransform('9999.995')).toEqual('1.00万')
    })

    it('Testing string value 2', async () => {
        expect(bigNumTransform('99999949.55')).toEqual('9999.99万')
    })

    it('NaN', async () => {
        expect(bigNumTransform(NaN)).toEqual('NaN')
    })

    it('NaN', async () => {
        expect(bigNumTransform('aaaaa')).toEqual('NaN')
    })

    it('NaN', async () => {
        expect(bigNumTransform(NaN, {
            float: 1,
            merge: false,
            unit: ['万元', '亿元'],
        })).toEqual(['NaN', ''])
    })

    it('Testing config', async () => {
        expect(bigNumTransform(99999550, {
            float: 1,
            merge: false,
            unit: ['万元', '亿元'],
        })).toEqual(['1.0', '亿元'])
    })

    it('Testing config', async () => {
        expect(bigNumTransform(99999450, {
            float: 1,
            merge: false,
            unit: ['万元', '亿元'],
        })).toEqual(['9999.9', '万元'])
    })
})
