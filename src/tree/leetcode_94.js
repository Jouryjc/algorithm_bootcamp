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

// 递归
// function inorderTraversal(root) {
//   const res = []

//   const traverse = (node) => {
//     if (!node) {
//       return
//     }

//     traverse(node.left)
//     res.push(node.val)
//     traverse(node.right)
//   }

//   traverse(root)

//   return res
// };

// 利用栈的数据结构去模拟函数调用栈
function inorderTraversal (root) {
  const stack = []
  const result = []

  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()
    result.push(root.val)
    root = root.right
  }

  return result;
}

module.exports = {
  TreeNode,
  inorderTraversal
}