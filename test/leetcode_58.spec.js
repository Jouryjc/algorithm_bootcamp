const { lengthOfLastWord } = require('../src/leetocde_58');

describe('最后一个单词的长度', () => {
    test('leetcode58示例测试1', () => {
        expect(lengthOfLastWord('Hello World')).toBe(5);
    });

    test('leetcode58示例测试2', () => {
        expect(lengthOfLastWord('a ')).toBe(1);
    });

})