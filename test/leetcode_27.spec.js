const { removeElement } = require('../src/leetcode_27');

describe('删除有序数组中的重复项', () => {
    test('示例测试', () => {
        expect(removeElement([3, 2, 2, 3], 3)).toBe(2);

        expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
    })
})
