const { binarySearch } = require('../../src/search/binary_search');

describe('二分查找', () => {
    test('示例测试', () => {

        expect(binarySearch([2, 7, 11, 15], 7)).toBe(1);
    });

    test('示例测试2', () => {

        expect(binarySearch([2, 5, 6, 7, 11, 12, 15], 12)).toBe(5);
    });

    test('示例测试', () => {

        expect(binarySearch([2, 7, 11, 15], 9)).toBe(-1);
    });
})