const { ListNode, mergeTwoLists } = require('../src/leetcode_21');

describe('合并两个有序链表', () => {
    test('leetcode示例测试', () => {
        const link1 = new ListNode(1);
        link1.next = new ListNode(2);
        link1.next.next = new ListNode(4);

        const link2 = new ListNode(1);
        link2.next = new ListNode(3);
        link2.next.next = new ListNode(4);

        const resultLink = new ListNode(1);
        resultLink.next = new ListNode(1);
        resultLink.next.next = new ListNode(2);
        resultLink.next.next.next = new ListNode(3);
        resultLink.next.next.next.next = new ListNode(4);
        resultLink.next.next.next.next.next = new ListNode(4);

        expect(mergeTwoLists(link1, link2)).toEqual(resultLink);
    });

    test('leetcode带有负数的用例', () => {
        const link1 = new ListNode(-10);
        link1.next = new ListNode(-10);
        link1.next.next = new ListNode(-9);
        link1.next.next.next = new ListNode(-4);
        link1.next.next.next.next = new ListNode(1);
        link1.next.next.next.next.next = new ListNode(6);
        link1.next.next.next.next.next.next = new ListNode(6);

        const link2 = new ListNode(-7);

        const resultLink = new ListNode(-10);
        resultLink.next = new ListNode(-10);
        resultLink.next.next = new ListNode(-9);
        resultLink.next.next.next = new ListNode(-7);
        resultLink.next.next.next.next = new ListNode(-4);
        resultLink.next.next.next.next.next = new ListNode(1);
        resultLink.next.next.next.next.next.next = new ListNode(6);
        resultLink.next.next.next.next.next.next.next = new ListNode(6);

        expect(mergeTwoLists(link1, link2)).toEqual(resultLink);
    });
})