const { reverse } = require('../src/leetcode_7');

describe('整数反转', () => {
  test('示例测试', () => {
      expect(reverse(123)).toBe(321);
      expect(reverse(-123)).toBe(-321);
      expect(reverse(120)).toBe(21);
      expect(reverse(0)).toBe(0);
      expect(reverse(1534236469)).toBe(0);
  })
})
