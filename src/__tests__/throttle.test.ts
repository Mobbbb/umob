import { throttle } from '../index'

describe('throttle: ', () => {
    const testPromise = (fn: () => any, wait: number) => {
        return new Promise(resolve => {
            setTimeout(() => {
                fn()
                resolve(0)
            }, wait)
        })
    }

    it('Do not execute immediately', async () => {
        let count = 0
        const addClick = throttle(() => count++, 200, false)

        addClick()
        addClick()

        await testPromise(addClick, 300)

        expect(count).toEqual(1)
    })

    it('Executing funtion out of waiting time', async () => {
        let count = 0
        const addClick = throttle(() => count++, 200)

        addClick()
        addClick()

        await testPromise(addClick, 300)

        expect(count).toEqual(2)
    })

    it('Restting waiting time', async () => {
        let count = 0
        const addClick = throttle(() => count++, 300)

        addClick()
        await testPromise(addClick, 100)
        await testPromise(addClick, 220)
        await testPromise(addClick, 100)

        expect(count).toEqual(2)
    })

    it('Wrong local time', async () => {
        // @ts-ignore
        window.performance = {
            now: () => Date.now(),
        }

        let count = 0
        const addClick = throttle(() => count++, 200)

        addClick()
        addClick()

        // @ts-ignore
        // set local time to 1 hour later
        window.performance.now = () => Date.now() + 60 * 60 * 1000

        await testPromise(addClick, 100)

        expect(count).toEqual(2)
    })

    it('Error waiting time', async () => {
        let count = 0
        const addClick = throttle(() => count++, 0 / 0)

        addClick()
        await testPromise(addClick, 100)

        expect(count).toEqual(2)
    })

    it('Using Date instead of performance', async () => {
        // @ts-ignore
        delete window.performance

        let count = 0
        const addClick = throttle(() => count++, 200)

        addClick()
        await testPromise(addClick, 100)
        await testPromise(addClick, 150)
        await testPromise(addClick, 100)

        expect(count).toEqual(2)
    })
})
