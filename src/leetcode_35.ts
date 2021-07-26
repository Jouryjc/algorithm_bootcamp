/**
 * 搜索插入位置
 */

export function searchInsert(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  let middle = 0

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2)

    if (nums[middle] < target) {
      left = middle + 1
    } else if (nums[middle] > target) {
      right = middle - 1
    } else {
      // 相等返回索引
      return middle
    }
  }

  return left > middle ? ++middle : middle
}
