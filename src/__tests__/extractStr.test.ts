import { extractStr } from '../index'

describe('extractStr: ', () => {
    it('Testing default opt', async () => {
        expect(extractStr('Hello [ABC] World [DEF] [GHI]', '\\[', '\\]')).toEqual('ABC')
    })

    it('Testing greedyMode = true 1', async () => {
        expect(extractStr('Hello [[aaa][bbb]]', '\\[', '\\]', {
            greedyMode: true,
        })).toEqual('[aaa][bbb]')
    })

    it('Testing greedyMode = true 2', async () => {
        expect(extractStr('Hello [ABC] World [DEF] [GHI]', '\\[', '\\]', {
            greedyMode: true,
        })).toEqual('ABC] World [DEF] [GHI')
    })

    it('Testing greedyMode = true && global = true', async () => {
        expect(extractStr('Hello [ABC] World [DEF] [GHI]', '\\[', '\\]', {
            greedyMode: true,
            global: true,
        })).toEqual(['ABC', 'DEF', 'GHI', 'ABC] World [DEF] [GHI'])
    })

    it('Testing global = true', async () => {
        expect(extractStr('Hello [ABC] World [DEF] [GHI]', '\\[', '\\]', {
            global: true,
        })).toEqual(['ABC', 'DEF', 'GHI'])
    })

    it('Testing multi matches', async () => {
        expect(extractStr('Hello <div>ABC</div> World <div>DEF</div> <div>GHI</div>', '<div>', '</div>', {
            global: true,
        })).toEqual(['ABC', 'DEF', 'GHI'])
    })

    it('Testing startSymbol = endSymbol 1', async () => {
        expect(extractStr('Hello World!', 'o', 'o')).toEqual(' W')
    })

    it('Testing startSymbol = endSymbol 2', async () => {
        expect(extractStr('Hello World!', 'o', 'o', {
            global: true,
        })).toEqual([' W'])
    })

    it('Testing startSymbol = endSymbol and multi matches 1', async () => {
        expect(extractStr('Hello World! oh my god', 'o', 'o', {
            global: true,
        })).toEqual([' W', 'rld! ', 'h my g'])
    })

    it('Testing startSymbol = endSymbol and multi matches 2', async () => {
        expect(extractStr('Hello World! oh my god', 'o', 'o', {
            greedyMode: true,
            global: true,
        })).toEqual([' W', 'rld! ', 'h my g', ' World! oh my g'])
    })

    it('Testing startSymbol = endSymbol and multi matches 3', async () => {
        expect(extractStr('Hello World! oh my god', 'o', 'o', {
            greedyMode: true,
        })).toEqual(' World! oh my g')
    })

    it('Testing startSymbol = endSymbol and multi matches 4', async () => {
        expect(extractStr('Hello World! oh my god', 'o', 'o')).toEqual(' W')
    })

    it('Testing endSymbol = \'\'', async () => {
        expect(extractStr('Hello World!', 'o', '')).toEqual(' World!')
    })

    it('Testing endSymbol = \'\' && global = false && greedyMode = true', async () => {
        expect(extractStr('Hello World!', 'o', '', {
            global: false,
            greedyMode: true,
        })).toEqual(' World!')
    })

    it('Testing endSymbol = \'\' && global = true && greedyMode = false', async () => {
        expect(extractStr('Hello World!', 'o', '', {
            global: true,
            greedyMode: false,
        })).toEqual([' World!', 'rld!'])
    })

    it('Testing endSymbol = \'\' && global = true && greedyMode = true', async () => {
        expect(extractStr('Hello World!', 'o', '', {
            global: true,
            greedyMode: true,
        })).toEqual([' World!', 'rld!'])
    })

    it('Testing startSymbol = \'\'', async () => {
        expect(extractStr('Hello World!', '', 'o')).toEqual('Hell')
    })

    it('Testing startSymbol = \'\' && global = false && greedyMode = true', async () => {
        expect(extractStr('Hello World!', '', 'o', {
            global: false,
            greedyMode: true,
        })).toEqual('Hello W')
    })

    it('Testing startSymbol = \'\' && global = true && greedyMode = false', async () => {
        expect(extractStr('Hello World! oh my god!', '', 'o', {
            global: true,
            greedyMode: false,
        })).toEqual(['Hell'])
    })

    it('Testing startSymbol = \'\' && global = true && greedyMode = true', async () => {
        expect(extractStr('Hello World! oh my god!', '', 'o', {
            global: true,
            greedyMode: true,
        })).toEqual(['Hell', 'Hello W', 'Hello World! ', 'Hello World! oh my g'])
    })

    it('Testing no match 1', async () => {
        expect(extractStr('Hello World!', '', '')).toEqual('Hello World!')
    })

    it('Testing no match 2', async () => {
        expect(extractStr('Hello World!', '', '', { global: true })).toEqual(['Hello World!'])
    })

    it('Testing no match 3', async () => {
        expect(extractStr('', '', '')).toEqual('')
    })

    it('Testing no match 4', async () => {
        expect(extractStr('', '', '', { global: true })).toEqual([])
    })

    it('Testing no match 5', async () => {
        expect(extractStr('Hello World!', '', 'xx', { global: true })).toEqual([])
    })

    it('Testing no match 6', async () => {
        expect(extractStr('Hello World!', '', 'xx')).toEqual('')
    })

    it('Testing no match 7', async () => {
        expect(extractStr('Hello World!', 'xx', '', { global: true })).toEqual([])
    })

    it('Testing no match 8', async () => {
        expect(extractStr('Hello World!', 'xx', '')).toEqual('')
    })

    it('Testing no match 9', async () => {
        expect(extractStr('Hello World!', '\\[', '\\]', { global: true })).toEqual([])
    })

    it('Testing no match 10', async () => {
        expect(extractStr('Hello World!', '\\[', '\\]')).toEqual('')
    })

    it('Testing no match 11', async () => {
        expect(extractStr('', 'aa', 'bb')).toEqual('')
    })
})
