const { invertTree } = require('../../src/tree/leetcode_226')

describe('翻转二叉树', () => {
  test('[4, 2, 7, 1, 3, 6, 9]', () => {
    const root = {
      val: 4,
      left: {
        val: 2,
        left: {
          val: 1,
          right: null,
          left: null
        },
        right: {
          val: 3,
          right: null,
          left: null
        },
      },
      right: {
        val: 7,
        left: {
          val: 6,
          right: null,
          left: null
        },
        right: {
          val: 9,
          right: null,
          left: null
        }
      }
    }

    expect(invertTree(root)).toEqual({
      val: 4,
      left: {
        val: 7,
        left: {
          val: 9,
          right: null,
          left: null
        },
        right: {
          val: 6,
          right: null,
          left: null
        }
      },
      right: {
        val: 2,
        left: {
          val: 3,
          right: null,
          left: null
        },
        right: {
          val: 1,
          right: null,
          left: null
        }
      }
    })
  })
})