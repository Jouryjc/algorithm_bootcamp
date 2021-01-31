/**
 * 插入排序
 *
 * 选择一个元素，插入到左侧已经排好序的数组中
 */

export function insertionSort(arr: number[]): number[] {
  let len = arr.length
  let temp = 0
  let j

  // 从第一个元素开始，依次插入到前面已经排好序的数组中
  for (let i = 1; i < len; i++) {
    temp = arr[i]
    j = i

    // 将当前值一一与前面的值对比
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }

    arr[j] = temp
  }

  return arr
}
