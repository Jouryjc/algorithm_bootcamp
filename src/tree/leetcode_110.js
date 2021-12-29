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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // 求二叉树节点的高度，用后序遍历，从下到上
  
  const getDepth = (node) => {
    // 以叶子节点为根节点的二叉树高度是0
    if (node === null) {
      return 0;
    }

    const leftDepth = getDepth(node.left)
    if (leftDepth === -1) {
      return -1
    }

    const rightDepth = getDepth(node.right)
    if (rightDepth === -1) {
      return -1
    }

    // 1 + Math.max(leftDepth, rightDepth) 以当前节点为根节点的最大高度
    return Math.abs(leftDepth - rightDepth) > 1 ? -1 : 1 + Math.max(leftDepth, rightDepth)
  }

  return getDepth(root) !== -1
};

module.exports = {
  isBalanced
}