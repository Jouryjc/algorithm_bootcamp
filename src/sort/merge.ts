/**
 * 归并排序
 *
 * 时间复杂度  O(nlogn)
 * 分治算法
 * 将原始数组拆分成较小的数组，直到每个数组都只有一个元素，然后将小数组合并成一个大的数组
 */

export function mergeSort(arr: number[]): number[] {
  return exceedMergeSort(arr)
}

/**
 * 分
 */
function exceedMergeSort(arr: number[]): number[] {
  const len = arr.length

  if (len === 1) {
    return arr
  }

  const mid = Math.floor(len / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid, len)

  return merge(exceedMergeSort(leftArr), exceedMergeSort(rightArr))
}

/**
 * 合
 */
function merge(left: number[], right: number[]): number[] {
  const result: number[] = []
  let leftIndex = 0
  let rightIndex = 0

  const leftArrLen = left.length
  const rightArrLen = right.length

  // 共左右数组的第一项开始，如果左比右大，就把左加到数组中，然后index加1
  while (leftIndex < leftArrLen && rightIndex < rightArrLen) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex += 1
    } else {
      result.push(right[rightIndex])
      rightIndex += 1
    }
  }

  // 处理左右数组中剩余的元素
  if (leftIndex < leftArrLen) {
    result.push(left[leftIndex])
    leftIndex += 1
  }

  if (rightIndex < rightArrLen) {
    result.push(right[rightIndex])
    rightIndex += 1
  }

  return result
}
