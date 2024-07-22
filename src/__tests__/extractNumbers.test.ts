import { extractNumbers } from '../index'

describe('extractNumbers: ', () => {
    it('Testing default opt', async () => {
        expect(extractNumbers('每使用1000盒餐巾纸，就有5棵树木被砍伐')).toEqual([1000, 5])
    })

    it('Testing allowNegative = true', async () => {
        expect(extractNumbers('100asfd -552 dsfbf50dsdg-5045115', true)).toEqual([100, -552, 50, -5045115])
    })

    it('Testing no match 1', async () => {
        expect(extractNumbers('asdifnsd iasodhfjilasdnhgb ipjsdfiog dsafids')).toEqual([])
    })

    it('Testing no match 2', async () => {
        expect(extractNumbers('asdifnsd iasodhfjilasdnhgb ipjsdfiog dsafids', true)).toEqual([])
    })
})
