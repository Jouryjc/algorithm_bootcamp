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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {

  // 求所有的路径，从上到下的遍历顺序，采用前序遍历
  if (root === null) {
    return []
  }

  // 迭代法
  // const nodeQuene = [root]
  // const pathQueue = [root.val.toString()]

  // const paths = []

  // while (nodeQuene.length) {
  //   const node = nodeQuene.shift()
  //   const path = pathQueue.shift()

  //   // 左右子树都没有，说明要返回路径了
  //   if (node.left === null && node.right === null) {
  //     paths.push(path)
  //   } else {
  //     if (node.right !== null) {
  //       nodeQuene.push(node.right)
  //       pathQueue.push(path + '->' + node.right.val.toString())
  //     }

  //     if (node.left !== null) {
  //       nodeQuene.push(node.left)
  //       pathQueue.push(path + '->' + node.left.val.toString())
  //     }
  //   }
  // }

  // 递归法
  const paths = []
  const dfs = function (node, path) {
    if (node) {
      path += node.val.toString()

      if (node.left === null && node.right === null) {
        paths.push(path)
      } else {
        dfs(node.left, path + '->')
        dfs(node.right, path + '->')
      }
    }
  }

  dfs(root, '')

  return paths
};

module.exports = {
  binaryTreePaths
}