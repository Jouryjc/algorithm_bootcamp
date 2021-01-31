/**
 * 选择排序
 * O(n^2)
 * 找到数组中最小的值放在第一位，找到第二小的值放在第二位，依此类推
 */

export function selectionSort(arr: number[]): number[] {
  let len = arr.length
  let minIndex = 0

  for (let i = 0; i < len; i++) {
    // 外循环控制最小值
    minIndex = i

    // 找到剩余项的最小值
    for (let j = i; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }

    // 当前最小值不等于原来的最小值，交换位置
    if (minIndex !== i) {
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }

  return arr
}
