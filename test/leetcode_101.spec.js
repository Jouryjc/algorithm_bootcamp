const { TreeNode, isSymmetric } = require('../src/tree/leetcode_101');

describe('对称二叉树', () => {
    test('成功示例测试', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(2);

        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(4);

        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(3);

        expect(isSymmetric(root)).toBeTruthy();
    });

    test('失败示例测试', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(2);

        root.left.right = new TreeNode(3);

        root.right.right = new TreeNode(3);

        expect(isSymmetric(root)).toBeFalsy();
    });

    test('失败示例测试2', () => {
        // [1, 2, 2, 2, null, 2]
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(2);

        root.left.left = new TreeNode(2);

        root.right.left = new TreeNode(2);

        expect(isSymmetric(root)).toBeFalsy();
    })
})