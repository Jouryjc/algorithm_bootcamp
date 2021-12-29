/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function isSymmetric(root: TreeNode | null): boolean {
  /**
   * 迭代算法
   * 使用队列，比较左树的左节点和右树的右节点、右树的左节点和左树的右节点
   */

  // const check = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
  //     const queue: Array<TreeNode | null> = [];
  //     queue.push(node1, node2);

  //     while (queue.length > 0) {
  //         let v1 = queue.shift();
  //         let v2 = queue.shift();

  //         if (!v1 && !v2) {
  //             continue;
  //         }

  //         if (!v1 || !v2) {
  //             return false;
  //         }

  //         if (v1.val !== v2.val) {
  //             return false;
  //         }

  //         queue.push(v1.left, v2.right);
  //         queue.push(v1.right, v2.left);
  //     }

  //     return true;
  // }

  /**
   * 递归算法
   * 对称镜像的思路
   */
  const check = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
    if (!node1 && !node2) {
      return true
    }

    if (!node1 || !node2) {
      return false
    }

    return (
      node1.val === node2.val && check(node1.left, node2.right) && check(node1.right, node2.left)
    )
  }

  return check(root, root)

  // 中序遍历
  // let res: Array<number | null> = [];
  // const inorderTraveral = (node: TreeNode | null) => {
  //     if (node === null) {
  //         res.push(null);
  //         return;
  //     } else {
  //         inorderTraveral(node.left);
  //         res.push(node.val);
  //         inorderTraveral(node.right);
  //     }
  // }

  // inorderTraveral(root);

  // if (res.length & 1) {
  //     let str = res.join(',');
  //     let reverseStr = res.reverse().join(',');

  //     return str === reverseStr;
  // }

  // return false;
}
