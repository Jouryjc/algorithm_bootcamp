/**
 * 两数之和 II - 输入有序数组
 * 输入：numbers = [2,7,11,15], target = 9
 * 输出：[1,2]
 * 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 */

function binarySearch(arr: number[], key: number): number {
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

export function twoSum(numbers: number[], target: number): number[] {
  // 因为是有序的，可以用二分查找
  let len = numbers.length

  // 暴力法，没有使用上排好序这个条件，复杂度是 o^2
  // for (let i = 0; i < len; i++) {
  //     for (let j = 0; j < len; j++) {
  //         if (numbers[i] + numbers[j] === target) {
  //             return [i+1, j+1];
  //         }
  //     }
  // }
  // return [0, 0];

  // 二分查找
  //   for (let i = 0; i < len; i++) {
  //     let secondVal = target - numbers[i]
  //     let secondIndex = binarySearch(numbers.slice(i + 1), secondVal)

  //     if (secondIndex !== -1) {
  //       return [++i, ++secondIndex + i]
  //     }
  //   }

  //   return [-1, -1]

  // 双指针解法，第一个元素和最后一个元素
  // 如果相加＜target，左+1
  // 如果相加 > target，右-1
  let start = 0
  let end = len - 1

  while (start <= end) {
    let sum = numbers[start] + numbers[end]
    if (sum > target) {
      end--
    } else if (sum < target) {
      start++
    } else {
      return [++start, ++end]
    }
  }

  return [-1, -1]
}
