/**
 * 冒泡排序
 * 时间复杂度 O(n^2)
 * 数组中两两比较，前者大于后者就换位
 */

export function bubbleSort(arr: number[]): number[] {
  const len = arr.length

  // 控制外圈循环
  for (let i = 0; i < len; i++) {
    // 控制俩俩对比
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}

export function optimizedBubbleSort(arr: number[]): number[] {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    let isSorted = true

    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        isSorted = false
      }
    }

    if (isSorted) break
  }

  return arr
}
