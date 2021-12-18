/**
 * 树的前序遍历
 * 根左右
 */
function preorderTraversal (root) {
  if (!root) {
    return []
  }

  // const result = []
  // const traverse = (node) => {
  //   node.val && result.push(node.val)
  //   node.left && traverse(node.left)
  //   node.right && traverse(node.right)
  // }

  // traverse(root)

  // 迭代
  const result = []
  const stack = [root]

  if (stack.length) {
    const node = stack.pop()
    result.push(node.val)

    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }

  return result
}


exports.preorderTraversal = preorderTraversal