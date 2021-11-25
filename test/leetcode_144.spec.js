const { preorderTraversal, TreeNode } = require('../src/leetcode_144')

describe('前序遍历', () => {
  test('[1,null,2,3]', () => {
    const tree = new TreeNode(1)
    tree.left = null
    tree.right = new TreeNode(2)
    tree.right.left = new TreeNode(3)
    tree.right.right = null

    expect(preorderTraversal(tree)).toEqual([1,2,3])
  })

  test('[]', () => {
    expect(preorderTraversal(null)).toEqual([])
  })

  test('[1]', () => {
    const tree = new TreeNode(1)

    expect(preorderTraversal(tree)).toEqual([1])
  })

  test('[1, 2]', () => {
    const tree = new TreeNode(1)
    tree.right = new TreeNode(2)

    expect(preorderTraversal(tree)).toEqual([1, 2])
  })
})