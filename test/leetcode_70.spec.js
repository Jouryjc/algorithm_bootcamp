const { climbStairs } = require('../src/leetcode_70');

describe('爬楼梯', () => {
    test('leetcode70示例测试1', () => {
        expect(climbStairs(2)).toBe(2);
    });

    test('leetcode70示例测试2', () => {
        expect(climbStairs(3)).toBe(3);
    });
})