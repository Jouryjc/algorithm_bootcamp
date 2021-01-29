const { lengthOfLongestSubstring } = require('../src/leetcode_3');

describe('无重复字符的最长子串', () => {
    test('示例测试', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
        expect(lengthOfLongestSubstring('bbbb')).toBe(1);
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
        expect(lengthOfLongestSubstring('')).toBe(0);
    })
})