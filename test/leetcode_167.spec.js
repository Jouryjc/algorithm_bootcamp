const { twoSum } = require('../src/leetcode_167');

describe('两数之和 II - 输入有序数组', () => {
    test('示例测试', () => {

        expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    });

    test('示例测试2', () => {
        expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
    });

    test('示例测试3', () => {
        expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
    });

    test('示例测试4', () => {
        expect(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8)).toEqual([4, 5])
    })
})