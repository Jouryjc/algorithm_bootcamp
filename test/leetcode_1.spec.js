const { twoSum } = require('../src/leetcode_1');

describe('两数之和', () => {
    test('leetcode示例测试', () => {
        let nums = [2, 7, 11, 15],
            target = 9;

        expect(twoSum(nums, target)).toEqual([0, 1]);
    });

    
})