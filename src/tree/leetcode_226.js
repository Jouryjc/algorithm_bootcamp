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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) {
    return [];
  }

  // 前序 中左右
  const preorderTraversal = (node) => {
    if (node === null) {
      return
    }

    const stack = [node]
    // const result = []
    while (stack.length) {
      const n = stack.shift()

      const temp = n.left
      n.left = n.right
      n.right = temp

      if (n.right) {
        stack.push(n.right)
      }

      if (n.left) {
        stack.push(n.left)
      }
    }
  }

  preorderTraversal(root)
  return root
  
};

module.exports = {
  invertTree
}