const { isValid } = require('../src/leetcode_20');

describe('有效的括号', () => {
    test('leetcode示例测试', () => {
        expect(isValid("()")).toBeTruthy();
        expect(isValid("()[]{}")).toBeTruthy();
        expect(isValid("(]")).toBeFalsy();
        expect(isValid("([)]")).toBeFalsy();
        expect(isValid("{[]}")).toBeTruthy();
    });
})