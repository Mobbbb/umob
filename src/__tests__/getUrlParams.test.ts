import { getUrlParams } from '../index'

describe('getUrlParams: ', () => {
    it('Get whole parameters', async () => {
        const url = 'http://test.com?x=1&y=2'
        Object.defineProperty(window, 'location', {
            value: {
                href: url,
                writable: true,
            },
        })
        expect(getUrlParams()).toEqual({
            x: '1',
            y: '2',
        })
    })

    it('Get the specified parameters', async () => {
        const url = 'http://test.com?x=3&y=4'
        Object.defineProperty(window.location, 'href', {
            value: url,
            writable: true,
        })
        expect(getUrlParams('x')).toEqual('3')
    })

    it('Url has no parameters 1', async () => {
        const url = 'http://test.com'
        Object.defineProperty(window.location, 'href', {
            value: url,
            writable: true,
        })
        expect(getUrlParams('x')).toEqual('')
    })

    it('Url has no parameters 2', async () => {
        const url = 'http://test.com'
        Object.defineProperty(window.location, 'href', {
            value: url,
            writable: true,
        })
        expect(getUrlParams()).toEqual({})
    })

    it('Url has no parameters 3', async () => {
        const url = 'http://test.com?x=5'
        Object.defineProperty(window.location, 'href', {
            value: url,
            writable: true,
        })
        expect(getUrlParams('y')).toEqual('')
    })
})
