const { TreeNode, isSameTree } = require('../src/leetcode_100')

describe('leetcode 100', () => {
  test('p = [1,2,3] and q = [1,2,3]', () => {
    const tree1 = new TreeNode(1)
    tree1.left = new TreeNode(2)
    tree1.right = new TreeNode(3)

    const tree2 = new TreeNode(1)
    tree2.left = new TreeNode(2)
    tree2.right = new TreeNode(3)

    expect(isSameTree(tree1, tree2)).toBe(true)
  })

  test('p = [1,2] and q = [1,null,2]', () => {
    const tree1 = new TreeNode(1)
    tree1.left = new TreeNode(2)

    const tree2 = new TreeNode(1)
    tree2.right = new TreeNode(2)

    expect(isSameTree(tree1, tree2)).toBe(false)
  })

  test('p = [1,2,1] and q = [1,1,2]', () => {
    const tree1 = new TreeNode(1)
    tree1.left = new TreeNode(2)
    tree1.right = new TreeNode(1)

    const tree2 = new TreeNode(1)
    tree2.left = new TreeNode(1)
    tree2.right = new TreeNode(2)

    expect(isSameTree(tree1, tree2)).toBe(false)
  })

  test('p = [1] and q = [1, null, 2]', () => {
    const tree1 = new TreeNode(1)

    const tree2 = new TreeNode(1)
    tree2.right = new TreeNode(2)

    expect(isSameTree(tree1, tree2)).toBe(false)
  })

  test('p = [2, null, 4] and q = [2, 3, 4]', () => {
    const tree1 = new TreeNode(2)
    tree1.right = new TreeNode(4)

    const tree2 = new TreeNode(2)
    tree2.left = new TreeNode(3)
    tree2.right = new TreeNode(4)

    expect(isSameTree(tree1, tree2)).toBe(false)
  })

  test('p = [1, null, 2, 4, null, null, 3] and q = [1, null, 4, 2, null, null, 3]', () => {
    const tree1 = new TreeNode(1)
    tree1.right = new TreeNode(2)
    tree1.right.left = new TreeNode(4)
    tree1.right.left.right = new TreeNode(3)

    const tree2 = new TreeNode(1)
    tree2.right = new TreeNode(4)
    tree2.right.left = new TreeNode(2)
    tree2.right.left.right = new TreeNode(3)

    expect(isSameTree(tree1, tree2)).toBe(false)
  })

  test('p = [] and q = []', () => {
    const tree1 = null
    const tree2 = null
    
    expect(isSameTree(tree1, tree2)).toBe(true)
  })
})