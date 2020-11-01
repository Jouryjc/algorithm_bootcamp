const { maxSubArray } = require('../src/leetcode_53');

describe('最大子序和', () => {
    test('示例测试', () => {
        expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
    })
})