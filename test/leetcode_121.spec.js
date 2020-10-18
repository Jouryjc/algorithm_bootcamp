const { maxProfit } = require('../src/leetcode_121');

describe('买卖股票的最佳时机', () => {
    test('示例测试', () => {
        const arr = [7, 1, 5, 3, 6, 4];
        expect(maxProfit(arr)).toBe(5);
    });

    test('示例测试2', () => {
        const arr = [7, 6, 4, 3, 1];
        expect(maxProfit(arr)).toBe(0);
    });
})