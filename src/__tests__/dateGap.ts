import { dateGap } from '../index'

describe('dateGap', () => {
    it('should work', () => {
        expect(dateGap('2022-01-01', '2022-01-05')).toEqual([
            '2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05',
        ])
    })
})