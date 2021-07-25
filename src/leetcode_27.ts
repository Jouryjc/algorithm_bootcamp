/**
 * leetcode27 移除元素
 */

export function removeElement(nums: number[], val: number): number {
  // 先排序再找到指定元素，然后往后找相同元素，直到不同时结束循环
  // nums.sort();
  // let len = nums.length

  // let first = nums.findIndex(item => item === val)

  // if (first === -1) {
  //     return len;
  // }

  // let i = ++first;

  // for (; i < len; i++) {
  //     if (nums[i] !== val) {
  //         break;
  //     }
  // }

  // nums.splice(first - 1, i - first + 1);

  // return nums.length;

  // 双指针
  let left = 0
  let len = nums.length

  for (let right = 0; right < len; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right]
      left++
    }
  }

  return left
}
