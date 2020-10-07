/**
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 *     3
 *    / \
 *   9  20
 *   /  \
 *  15   7
 */

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    // DFS，深度优先搜索算法
    // let max = 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

    // BFS，广度优先搜索算法
    let queue: Array<TreeNode> = [];
    queue.push(root);
    let max = 0;

    while (queue.length > 0) {
        let size = queue.length;

        while (size > 0) {
            let node = queue.shift();

            if (node) {
                if (node.left) {
                    queue.push(node.left);
                }

                if (node.right) {
                    queue.push(node.right);
                }
            }

            size--;
        }
        max++;
    }

    return max;
};