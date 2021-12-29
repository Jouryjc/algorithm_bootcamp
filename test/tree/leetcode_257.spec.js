const { binaryTreePaths } = require('../../src/tree/leetcode_257')

describe('二叉树的所有路径', () => {
  test('[1,2,3,null,5]', () => {
    const root = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: {
          val: 5,
          left: null,
          right: null
        }
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    }

    expect(binaryTreePaths(root)).toEqual([
      "1->2->5",
      "1->3"
    ])
  })

  test('[1]', () => {
    const root = {
      val: 1,
      left: null,
      right: null
    }

    expect(binaryTreePaths(root)).toEqual([
      '1'
    ])
  })
})