
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0
  }

  function bfs (root) {
    const queue = [root]
    let depth = 1

    while (queue.length) {
      // 这里有一个细节逻辑，只有当前节点中全部都有孩子节点才需要+1
      const len = queue.length
      for (let i = 0; i < len; i++) {
        const node = queue.shift()

        if (!node?.left && !node?.right) {
          return depth
        }

        if (node.left) {
          queue.push(node.left)
        }

        if (node.right) {
          queue.push(node.right)
        }
      }

      depth++
    }

    return depth
  }

  return bfs(root)
};

module.exports = {
  minDepth
}