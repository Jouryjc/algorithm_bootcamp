/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { reverse } = require("lodash")

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var postorderTraversal = function (root) {
//   const res = []

//   const traverse = (node) => {
//     if (node) {
//       traverse(node.left)
//       traverse(node.right)
//       res.push(node.val)
//     }
//   }

//   traverse(root)

//   return res
// };
const postorderTraversal = (root) => {
  let res = []
  
  if (root === null) {
    return res
  }

  const stack = [root]

  // 思想，前序是中左右，后序是左右中
  // 可以看到，前序的孩子节遍历调整一下，变成中右左，然后再反转就得到了最后的结果
  while (stack.length) {
    const node = stack.pop()
    res.push(node.val)

    node.left && stack.push(node.left)
    node.right && stack.push(node.right)
  }

  res = res.reverse()

  return res
}

module.exports = {
  TreeNode,
  postorderTraversal
}