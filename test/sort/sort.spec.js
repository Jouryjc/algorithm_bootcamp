const { bubbleSort, optimizedBubbleSort } = require('../../src/sort/bubble');
const { selectionSort } = require('../../src/sort/selection');

describe('排序算法测试', () => {
  test('冒泡排序', () => {
    expect(bubbleSort([10, 2, 1, 5, 7, 3, 6, 3])).toEqual([1, 2, 3, 3, 5, 6, 7, 10]);
    expect(optimizedBubbleSort([10, 2, 1, 5, 7, 3, 6, 3])).toEqual([1, 2, 3, 3, 5, 6, 7, 10]);
  });

  test('选择排序', () => {
    expect(selectionSort([10, 2, 1, 5, 7, 3, 6, 3])).toEqual([1, 2, 3, 3, 5, 6, 7, 10]);
  });
})
