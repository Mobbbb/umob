import { deepClone } from '../index'

describe('deepClone: ', () => {
    it('Clone number', async () => {
        expect(deepClone(1)).toEqual(1)
    })

    it('Clone string', async () => {
        expect(deepClone('1')).toEqual('1')
    })

    it('Clone null', async () => {
        expect(deepClone(null)).toEqual(null)
    })

    it('Clone undefined', async () => {
        expect(deepClone(undefined)).toEqual(undefined)
    })

    it('Clone object[]', async () => {
        const arr = [
            { num: 5, id: 'a' },
            { num: 2, id: 'b' },
            { num: 3, id: 'c' },
            { num: 7, id: 'd' },
        ]
        const clone1 = deepClone(arr)
        const clone2 = deepClone(arr)
        arr[0].num = 100
        expect(clone1).toEqual(clone2)
    })

    it('Clone object', async () => {
        const obj = {
            a: [{
                num: 1,
                name: 'test',
            }],
            b: 2,
            c: 'test',
            d: {
                name: 'test',
            },
        }
        const clone1 = deepClone(obj)
        const clone2 = deepClone(obj)
        obj.a[0].num = 100
        obj.d.name = 'change'
        expect(clone1).toEqual(clone2)
    })
})
