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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (root === null) {
    return 0
  }

  let result = 0
  const sum = (node) => {
    if (!node) {
      return;
    }

    if (node.left) {
      if (node.left.left === null && node.left.right === null) {
        result += node.left.val
      }

      sum(node.left)
    }

    if (node.right) {
      sum(node.right)
    }
  }

  sum(root)

  return result
};

module.exports = {
  sumOfLeftLeaves
}