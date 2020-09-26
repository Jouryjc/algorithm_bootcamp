const { buildTree } = require('../src/leetcode_106');

describe('从中序与后序遍历序列构造二叉树', () => {
    test('leetcode106测试', () => {
        const inorderArr = [9, 3, 15, 20, 7];
        const postorderArr = [9, 15, 7, 20, 3];

        expect(buildTree(inorderArr, postorderArr)).toEqual({
            val: 3,
            left: {
                val: 9,
                left: null,
                right: null
            },
            right: {
                val: 20,
                left: {
                    val: 15,
                    right: null,
                    left: null
                },
                right: {
                    val: 7,
                    right: null,
                    left: null
                }
            }
        });
    });
});