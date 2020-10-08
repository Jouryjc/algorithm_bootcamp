const { TreeNode, levelOrderBottom } = require('../src/leetcode_107');

describe('二叉树的最大深度', () => {
    test('leetcode示例样式', () => {
        const root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        expect(levelOrderBottom(root)).toEqual([
            [15,7],
            [9,20],
            [3]
        ]);
    });

    test('空树', () => {
        const root = null;
        expect(levelOrderBottom(root)).toEqual([]);
    })
});