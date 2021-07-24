const { longestPalindrome } = require('../src/leetcode_5');

describe('最长回文串', () => {
    test('案例测试1', () => {
        expect(longestPalindrome('babad')).toBe('bab');
    })

    test('案例测试2', () => {
        expect(longestPalindrome('cbbd')).toBe('bb');
    })
    
    test('案例测试3', () => {
        expect(longestPalindrome('a')).toBe('a');
    })

    test('案例测试4', () => {
        expect(longestPalindrome('ac')).toBe('a');
    })

    test('案例测试5', () => {
        expect(longestPalindrome("aacabdkacaa")).toBe('aca')
    })
})