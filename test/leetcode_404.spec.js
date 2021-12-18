const exp = require('constants')
const { sumOfLeftLeaves } = require('../src/leetcode_404')

describe('leetcode 404 左叶子之和', () => {
  test('test1', () => {
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

    expect(sumOfLeftLeaves(root)).toBe(24)
  })

  test('[1,2,3,4,5]', () => {
    const root = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null
        },
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

    expect(sumOfLeftLeaves(root)).toBe(4)
  })
})