const { findMode } = require('../src/leetcode_501')

describe('leetcode501 二叉搜索树中的众数', () => {
  test('root = [1,null,2,2]', () => {
    const root = {
      val: 1,
      left: null,
      right: {
        val: 2,
        left: {
          val: 2,
          left: null,
          right: null
        },
        right: null
      }
    }

    expect(findMode(root)).toEqual([2])
  })
})