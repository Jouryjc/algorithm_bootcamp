exports.postorderTraversal = function (root) {
  if (!root) {
    return []
  }

  

  // 递归
  // const result = []
  // const traverse = (node) => {
  //   node.left && traverse(node.left)
  //   result.push(node.val)
  //   node.right = traverse(node.right)
  // }

  // traverse(root)

  // 迭代
  const result = []
  const stack = []
  let cur = root

  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }

    cur = stack.pop()
    result.push(cur.val)
    cur = cur.right
  }

  return result
}