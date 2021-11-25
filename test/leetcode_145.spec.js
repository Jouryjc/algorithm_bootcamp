
const { postorderTraversal, TreeNode } = require('../src/leetcode_145')

describe('后序遍历', () => {
  test('[1,null,2,3]', () => {
    const tree = new TreeNode(1)
    tree.left = null
    tree.right = new TreeNode(2)
    tree.right.left = new TreeNode(3)
    tree.right.right = null

    expect(postorderTraversal(tree)).toEqual([3, 2, 1])
  })

  test('[]', () => {
    expect(postorderTraversal(null)).toEqual([])
  })

  test('[1]', () => {
    const tree = new TreeNode(1)

    expect(postorderTraversal(tree)).toEqual([1])
  })

  test('[1, 2]', () => {
    const tree = new TreeNode(1)
    tree.right = new TreeNode(2)

    expect(postorderTraversal(tree)).toEqual([2, 1])
  })
})