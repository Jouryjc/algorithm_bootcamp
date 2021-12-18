/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var preorderTraversal = function (root) {
//   const res = []

//   const traverse = (node) => {
//     if (node) {
//       res.push(node.val)
//       traverse(node.left)
//       traverse(node.right)
//     }
//   }

//   traverse(root)

//   return res
// };

var preorderTraversal = function (root) {
  const res = []

  if (root === null) {
    return res
  }

  const stack = [ root ]

  while (stack.length) {
    const node = stack.pop()
    res.push(node.val)

    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }

  return res
};

module.exports = {
  TreeNode,
  preorderTraversal
}