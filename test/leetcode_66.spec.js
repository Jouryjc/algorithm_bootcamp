const { plusOne } = require('../src/leetcode_66');

describe('最后一个单词的长度', () => {
  test('示例测试1', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  test('示例测试2', () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });

  test('示例测试3', () => {
    expect(plusOne([0])).toEqual([1]);
  });

  test('示例测试4', () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });

  test('示例测试5', () => {
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
  });

  test('示例测试6', () => {
    expect(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4])
  })

})
