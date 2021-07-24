/**
 * 最长回文子串
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 */

export function longestPalindrome(s: string): string {
  if (s.length === 1 || s.length === 2) {
    return checkPalindrome(s) ? s : s[0]
  }

  let str = ''
  let strLen = s.length
  let left = 0
  let oldStr = ''

  // 控制左指针
  for (; left < strLen; left++) {
    let right = strLen - 1

    while (left < right) {
      // 左右字符相等的时候，左右指针都要往中间移动
      if (s[left] === s[right]) {
        str = s.slice(left, right + 1)

        if (checkPalindrome(str)) {
          str = oldStr.length > str.length ? oldStr : str
          break
        }

        right--
      } else {
        right--
      }
    }

    oldStr = str
  }

  return str
}

function checkPalindrome(str: string): boolean {
  return (
    str
      .split('')
      .reverse()
      .join('') === str
  )
}
