/**
 * leetcode_66 加一
 */

export function plusOne(digits: number[]): number[] {
  // 暴力解法，超大数字限制
  // return `${+digits.join('') + 1}`
  //   .replace(/(\d)/g, '$1 ')
  //   .trim()
  //   .split(' ')
  //   .map(item => +item);

  let end = digits.length - 1

  /**
   * 从数组的最后一位开始加1
   * 如果等于10，将end位置置为0，并且往前进一位，循环这个步骤
   * 直到end小于0，如果此时end等于-1，说明digits[0]等于10，需要在数组最前面加一个1
   */

  while (end >= 0) {
    digits[end] += 1

    if (digits[end] === 10) {
      digits[end] = 0
      end -= 1
    } else {
      return digits
    }
  }

  if (end === -1) {
    digits.unshift(1)
  }

  return digits
}
