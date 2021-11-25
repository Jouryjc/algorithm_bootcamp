const { TreeNode, inorderTraversal } = require('../src/leetcode_94')

describe('leetcode 94', () => {
  test('[1,null,2,3]', () => {
    const tree = new TreeNode(1)
    tree.left = null
    tree.right = new TreeNode(2)
    tree.right.left = new TreeNode(3)
    tree.right.right = null

    expect(inorderTraversal(tree)).toEqual([1,3,2])
  })

  test('[]', () => {
    expect(inorderTraversal(null)).toEqual([])
  })

  test('[1]', () => {
    const tree = new TreeNode(1)

    expect(inorderTraversal(tree)).toEqual([1])
  })

  test('[1, 2]', () => {
    const tree = new TreeNode(1)
    tree.right = new TreeNode(2)

    expect(inorderTraversal(tree)).toEqual([1, 2])
  })
})