const { searchInsert } = require('../src/leetcode_35');

describe('leetcode35 搜索插入位置', () => {
  test('示例测试', () => {
    expect(searchInsert([1,3,5,6], 5)).toBe(2)
  });

  test('示例测试2', () => {
    expect(searchInsert([1,3,5,6], 2)).toBe(1)
  })

  test('示例测试3', () => {
    expect(searchInsert([1,3,5,6], 7)).toBe(4)
  })

  test('示例测试4', () => {
    expect(searchInsert([1,3,5,6], 0)).toBe(0)
  })

  test('示例测试5', () => {
    expect(searchInsert([1], 0)).toBe(0)
  })
})


