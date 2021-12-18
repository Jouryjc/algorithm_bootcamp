/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
exports.levelOrder = function (root) {
  if (!root) {
    return []
  }

  const result = []
  const queue = [root]

  while (queue.length) {
    const itemRes = []
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const node = queue.shift()

      itemRes.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    result.push(itemRes)
  }

  return result
};