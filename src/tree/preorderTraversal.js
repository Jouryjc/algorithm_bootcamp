/**
 * 树的前序遍历
 * 根左右
 */
function preorderTraversal (root) {
  if (!root) {
    return []
  }

  const result = []
  const traverse = (node) => {
    node.val && result.push(node.val)
    node.left && traverse(node.left)
    node.right && traverse(node.right)
  }

  traverse(root)

  return result
}



exports.preorderTraversal = preorderTraversal