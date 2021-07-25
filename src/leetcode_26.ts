/**
 * 删除有序数组中的重复项
 */
export function removeDuplicates(nums: number[]): number {
  // let len = nums.length;

  // nums.reduce((result, val, index, arr) => {
  //     let valLen = arr.filter(item => item === val).length;

  //     if (valLen > 1) {
  //         arr.splice(index, valLen - 1);
  //         result = result - valLen - 1;
  //     }

  //     return result;
  // }, len);

  // return len;

  // 快、慢双指针
  let fast = 0
  let slow = 0
  let len = nums.length

  while (fast <= len - 1) {
    if (nums[fast] !== nums[slow]) {
      ++slow
      nums[slow] = nums[fast]
    }

    fast++
  }

  return slow + 1
}
