/**
 * @file leetcode 1 两数之和
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 *
 */

export let twoSum = function(nums: Array<number>, target: number): Array<number> {
  // 暴力法 O(n^2)
  // let len = nums.length;
  // let res: Array<number> = [];
  // for (let i = 0; i < len; i++) {
  //     for (let j = i; j < len; j++) {
  //         if (nums[i] + nums[j] === target) {
  //             res = [i, j];
  //         }
  //     }
  // }

  // return res;

  // 遍历两边哈希表法 O(n)
  // let map: Record<number, any> = {};
  // nums.forEach((num, index) => {
  //     map[num] = index;
  // });
  // let res: Array<number> = [];
  // nums.forEach((num, index) => {
  //     let minus = target - num;

  //     if (map[minus] && index !== map[minus]) {
  //         res = [index, map[minus]];
  //         return true;
  //     }
  // });

  // return res;

  // 遍历一次数字
  let map: Record<number, number> = {}
  let res: Array<number> = []
  nums.some((num, index) => {
    let minus = target - num

    if (typeof map[minus] !== 'undefined') {
      res = [map[minus], index]
      return true
    }

    map[num] = index
    return false
  })

  return res
}
