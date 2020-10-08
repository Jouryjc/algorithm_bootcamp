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
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function levelOrderBottom(root: TreeNode | null): number[][] {
    if (root === null) {
        return [];
    }

    let queue: Array<TreeNode> = [];
    queue.push(root);

    let res: number[][] = [];
    res.push([root.val]);

    // 广度搜索算法然后将数组reverse
    while (queue.length > 0) {
        let size = queue.length;
        let levelRes: number[] = [];

        while (size > 0) {
            let node = queue.shift();

            if (node) {
                if (node.left) {
                    queue.push(node.left);
                    levelRes.push(node.left.val);
                }

                if (node.right) {
                    queue.push(node.right);
                    levelRes.push(node.right.val);
                }
            }

            size--;
        }

        if (levelRes.length) {
            res.push(levelRes);
        }
    }

    return res.reverse();
};