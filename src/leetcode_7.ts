/**
 * 整数反转
 *
 * 给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 */

export function reverse(x: number): number {
  // 暴力，直接用数组反转
  let numberStr = x.toString()
  let hasNegative = numberStr.indexOf('-') !== -1

  if (hasNegative) {
    numberStr = numberStr.slice(1)
  }

  let arr = numberStr.split('').reverse()
  let result = parseInt(arr.join(''), 10)

  // 边界考虑
  if (result >= Math.pow(2, 31) - 1 || result <= Math.pow(-2, 31)) {
    return 0
  }

  return hasNegative ? -1 * result : result
}
