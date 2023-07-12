import { getCookie } from '../index'

describe('getCookie: ', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMjM0NTYiLCJwYXNzd29yZCI6IjE3MT' +
        'cyMyIsImlhdCI6MTY4NjEyNDI3NiwiZXhwIjoxNzE3NjYwMjc2fQ.3EhPSLAMRDyHlzhJz866aIWi-' +
        'RoeekuEm1rnR0kDoCY'
    document.cookie = `token=${token}; uid=123456`

    it('Get cookie', async () => {
        expect(getCookie('token')).toEqual(token)
    })

    it('Get empty cookie', async () => {
        expect(getCookie('a')).toEqual('')
    })
})
