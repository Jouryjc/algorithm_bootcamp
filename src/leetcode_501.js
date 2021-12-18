/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  // 暴力解法，直接递归遍历一次，获取每个数值的map，然后输出
  if (root === null) {
    return []
  }

  const obj = Object.create(null)

  const dfs = (node) => {
    if (!node) {
      return;
    }

    if (obj[node.val]) {
      obj[node.val]++
    } else {
      obj[node.val] = 1
    }

    if (node.left) {
      dfs(node.left)
    }

    if (node.right) {
      dfs(node.right)
    }
  }
  
  dfs(root)

  const valueArr = Object.values(obj)
  const max = Math.max(...valueArr)
  const res = []
  for (let key in obj) {
    if (max === obj[key]) {
      res.push(+key)
    }
  }
  
  return res

  // 利用是BST的特性，通过递归去处理
  

};

module.exports = {
  findMode
}