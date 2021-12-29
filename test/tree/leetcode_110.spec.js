const { isBalanced } = require('../../src/tree/leetcode_110')

describe('平衡二叉树', () => {
  test('[3,9,20,null,null,15,7]', () => {
    const root = {
      val: 3,
      left: {
        val: 9,
        left: null,
        right: null
      },
      right: {
        val: 20,
        left: {
          val: 15,
          left: null,
          right: null
        },
        right: {
          val: 7,
          left: null,
          right: null
        }
      }
    }

    expect(isBalanced(root)).toBe(true)
  })
})