const exp = require('constants')
const { minDepth } = require('../../src/tree/leetcode_111')
const { TreeNode } = require('../../src/tree/TreeNode')

describe('leetcode 111, 二叉树的最小深度', () => {
  test('root = [1,2,3,4,5]', () => {
    const root = {
      val: 1,
      right: {
        val: 3
      },
      left: {
        val: 2,
        left: {
          val: 4
        },
        right: {
          val: 5
        }
      }
    }

    expect(minDepth(root)).toBe(2)
  })
  test('root = [3,9,20,null,null,15,7]', () => {
    // const root = new TreeNode(3)
    // root.left = new TreeNode()
    const root = {
      val: 3,
      left: {
        val: 9
      },
      right: {
        val: 20,
        left: {
          val: 15
        },
        right: {
          val: 7
        }
      }
    }

    expect(minDepth(root)).toBe(2)
  })

  test('root = [2,null,3,null,4,null,5,null,6]', () => {
    const root = {
      val: 2,
      left: null,
      right: {
        val: 3,
        left: null,
        right: {
          val: 4,
          left: null,
          right: {
            val: 5,
            left: null,
            right: {
              val: 6,
              left: null,
              right: null
            }
          }
        }
      }
    }

    expect(minDepth(root)).toBe(5)
  })

  test('root = [1,2,3]', () => {
    const root = {
      val: 1,
      left: {
        left: null,
        right: null,
        val: 2
      },
      right: {
        left: null,
        right: null,
        val: 3
      }
    }

    expect(minDepth(root)).toBe(2)
  })
})