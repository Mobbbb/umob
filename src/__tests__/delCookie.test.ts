import { delCookie } from '../index'

describe('delCookie: ', () => {
    it('Delete cookie', async () => {
        document.cookie = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMjM0NTYiLCJwYXNzd' +
            '29yZCI6IjE3MTcyMyIsImlhdCI6MTY4NjEyNDI3NiwiZXhwIjoxNzE3NjYwMjc2fQ.3EhPSLAMRDyHlzhJz866aIWi' +
            '-RoeekuEm1rnR0kDoCY;'
        delCookie('token')
        expect(document.cookie).toEqual('')
    })
})
