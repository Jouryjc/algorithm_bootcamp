/**
 * @file 二分查找
 */

export function binarySearch(arr: number[], key: number): number {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2)

    if (arr[middle] > key) {
      right = middle - 1
    } else if (arr[middle] < key) {
      left = middle + 1
    } else {
      return middle
    }
  }

  return -1
}
