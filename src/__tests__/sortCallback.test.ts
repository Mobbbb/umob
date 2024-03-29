import { sortCallback } from '../index'

describe('sortCallback: ', () => {
    it('Sort an number[] in desc', async () => {
        expect([5, 2, 3, 7].sort(sortCallback())).toEqual([7, 5, 3, 2])
    })

    it('Sort an number[] in asc', async () => {
        expect([5, 2, 3, 7].sort(sortCallback({ type: 'asc' }))).toEqual([2, 3, 5, 7])
    })

    it('Sort an string[] in desc', async () => {
        expect(['5', '2', '3', '7'].sort(sortCallback())).toEqual(['7', '5', '3', '2'])
    })

    it('Sort an mixed array in desc', async () => {
        const res = [1, 'aaa', '8', undefined, '3', '7', null].sort(sortCallback())
        expect(res).toEqual(['8', '7', '3', 1, 'aaa', null, undefined])
    })

    it('Sort an mixed array in asc', async () => {
        const res = [1, null, '8', undefined, '3', '7', null].sort(sortCallback({ type: 'asc' }))
        expect(res).toEqual([1, '3', '7', '8', null, null, undefined])
    })

    it('Sort an object[] in asc', async () => {
        const arr = [
            { num: 5, id: 'a' },
            { num: 2, id: 'b' },
            { num: 3, id: 'c' },
            { num: 7, id: 'd' },
        ]
        expect(arr.sort(sortCallback({ type: 'asc', key: 'num' }))).toEqual([
            { num: 2, id: 'b' },
            { num: 3, id: 'c' },
            { num: 5, id: 'a' },
            { num: 7, id: 'd' },
        ])
    })

    it('Sort an object[] in desc', async () => {
        const arr = [
            { num: 5, id: 'a' },
            { num: 2, id: 'b' },
            { num: 3, id: 'c' },
            { num: 7, id: 'd' },
        ]
        expect(arr.sort(sortCallback({ key: 'num' }))).toEqual([
            { num: 7, id: 'd' },
            { num: 5, id: 'a' },
            { num: 3, id: 'c' },
            { num: 2, id: 'b' },
        ])
    })

    it('Sort an object[date] in asc', async () => {
        const arr = [
            { date: '2025-06-05 09:15:55', id: 'a' },
            { date: '2025-06-04', id: 'b' },
            { date: '2025-06-05 10:15:55', id: 'c' },
            { date: '2022-12-09', id: 'd' },
        ]
        expect(arr.sort(sortCallback({ type: 'asc', key: 'date' }))).toEqual([
            { date: '2022-12-09', id: 'd' },
            { date: '2025-06-04', id: 'b' },
            { date: '2025-06-05 09:15:55', id: 'a' },
            { date: '2025-06-05 10:15:55', id: 'c' },
        ])
    })

    it('Sort an object[date MM-dd] in asc', async () => {
        const arr = [
            { date: '06-05 09:15:55', id: 'a' },
            { date: '06-04', id: 'b' },
            { date: '05-05 10:15:55', id: 'c' },
            { date: '04-30 23:59:59', id: 'd' },
        ]
        expect(arr.sort(sortCallback({ type: 'asc', key: 'date' }))).toEqual([
            { date: '04-30 23:59:59', id: 'd' },
            { date: '05-05 10:15:55', id: 'c' },
            { date: '06-04', id: 'b' },
            { date: '06-05 09:15:55', id: 'a' },
        ])
    })

    it('Sort an mixed object array in desc', async () => {
        const arr = [
            { num: null, id: 'h' },
            { num: 1, id: 'a' },
            { num: 'aaa', id: 'b' },
            { num: '8', id: 'c' },
            { num: undefined, id: 'd' },
            { num: '3', id: 'e' },
            { num: '7', id: 'f' },
            { num: null, id: 'g' },
            { id: 'h' },
        ]
        const res = arr.sort(sortCallback({ key: 'num' }))
        expect(res).toEqual([
            { num: '8', id: 'c' },
            { num: '7', id: 'f' },
            { num: '3', id: 'e' },
            { num: 1, id: 'a' },
            { num: null, id: 'h' },
            { num: 'aaa', id: 'b' },
            { num: undefined, id: 'd' },
            { num: null, id: 'g' },
            { id: 'h' },
        ])
    })
})
