import { setCookie, getCookie } from '../index'

describe('setCookie: ', () => {
    it('Set cookie', () => {
        setCookie('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
        expect(getCookie('token')).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
    })
})
