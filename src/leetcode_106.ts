/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  /**
   *                  *****递归*******
   *
   *                  根据后序排序（左右根）找根节点
   *                  根据中序排序分割左右子树
   *
   *              (中序)[9, 3, 15, 20, 7]
   *              (后序)[9, 15, 7, 20, 3]
   *                      /       \
   *                     /         \
   *              (中序)[9]       (中序)[15, 20, 7]
   *              (后序)[9]       (后序)[15, 7, 20]
   *                                  /       \
   *                                 /         \
   *                           (中序)[15]     (中序)[7]
   *                           (后序)[15]     (后序)[7]
   *
   *
   */
  let lastIndex = postorder.length - 1
  const obj = Object.create(null)

  // 精髓：将前序排序数组转成object，更方便的获取下标，平时编码如果需要频繁获取数组下标可用
  inorder.forEach((value, index) => {
    obj[value] = index
  })

  const helper = (leftIndex: number, rightIndex: number): TreeNode | null => {
    if (leftIndex > rightIndex) {
      return null
    }

    const rootVal = postorder[lastIndex]
    const root = new TreeNode(rootVal)

    lastIndex--

    root.right = helper(obj[rootVal] + 1, rightIndex)
    root.left = helper(leftIndex, obj[rootVal] - 1)

    return root
  }

  return helper(0, lastIndex)
}
