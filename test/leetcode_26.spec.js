const { removeDuplicates } = require('../src/leetcode_26');

describe('删除有序数组中的重复项', () => {
    test('示例测试', () => {
        expect(removeDuplicates([1, 1, 2])).toBe(2);
        
        expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
    })
})
