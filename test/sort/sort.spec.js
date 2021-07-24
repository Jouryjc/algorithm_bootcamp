const { bubbleSort, optimizedBubbleSort } = require('../../src/sort/bubble');
const { selectionSort } = require('../../src/sort/selection');
const { insertionSort } = require('../../src/sort/insertion');
const { mergeSort } = require('../../src/sort/merge');
const { quickSort } = require('../../src/sort/quick');
const { heapSort } = require('../../src/sort/heap');
const { shellSort } = require('../../src/sort/shell');
const { countingSort } = require('../../src/sort/count');

describe('排序算法测试', () => {
  test('冒泡排序', () => {
    expect(bubbleSort([10, 2, 1, 5, 7, 3, 6, 3])).toEqual([1, 2, 3, 3, 5, 6, 7, 10]);
    expect(optimizedBubbleSort([10, 2, 1, 5, 7, 3, 6, 3])).toEqual([1, 2, 3, 3, 5, 6, 7, 10]);
  });

  test('选择排序', () => {
    expect(selectionSort([10, 2, 1, 5, 7, 3, 6, 3])).toEqual([1, 2, 3, 3, 5, 6, 7, 10]);
  });

  test('插入排序', () => {
    expect(insertionSort([10, 2, 1, 5, 7, 3, 6, 3])).toEqual([1, 2, 3, 3, 5, 6, 7, 10]);
  });

  test('归并排序', () => {
    expect(mergeSort([10, 2, 1, 5, 7, 3, 6, 3])).toEqual([1, 2, 3, 3, 5, 6, 7, 10]);
  });

  test('快速排序', () => {
    expect(quickSort([10, 2, 1, 5, 7, 3, 6, 3])).toEqual([1, 2, 3, 3, 5, 6, 7, 10]);
  });

    test('堆排序', () => {
        expect(heapSort([4, 6, 8, 5, 9])).toEqual([4, 5, 6, 8, 9]);
    });

    test('希尔排序', () => {
        expect(shellSort([10, 2, 1, 5, 7, 3, 6, 3])).toEqual([1, 2, 3, 3, 5, 6, 7, 10]);
    });

    test('计数排序', () => {
        expect(countingSort([10, 2, 1, 5, 7, 3, 6, 3])).toEqual([1, 2, 3, 3, 5, 6, 7, 10]);
    });
})
