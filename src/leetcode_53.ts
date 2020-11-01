/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */

export function maxSubArray(nums: number[]): number {
  if (!nums.length) {
    return 0
  }

  // let res = nums[0];
  // let curMax = nums[0];
  // let len = nums.length;

  // 贪心算法，如果当前指针所指的元素之前的和小于0，则丢弃之前的数列
  // for (let i = 1; i < len; i++) {
  //     curMax = Math.max(nums[i], curMax + nums[i]);
  //     res = Math.max(curMax, res);
  // }

  // return res;

  // DP算法
  let len = nums.length
  for (let i = 1; i < len; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1]
    }
  }

  return Math.max(...nums)
}
