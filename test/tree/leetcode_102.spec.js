const { levelOrder } = require('../../src/tree/leetcode_102')

describe('层次遍历', () => {
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

    expect(levelOrder(root)).toEqual([
      [3],
      [9, 20],
      [15, 7]
    ])
  })
})