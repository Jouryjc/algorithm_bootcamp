const { ListNode, hasCycle } = require('../src/leetcode_141');

describe('环形链表', () => {
    test('示例测试', () => {
        // [3,2,0,-4], pos=1
        const listhead = new ListNode(3);
        listhead.next = new ListNode(2);
        listhead.next.next = new ListNode(0);
        listhead.next.next.next = new ListNode(-4);
        listhead.next.next.next.next = listhead.next;

        expect(hasCycle(listhead)).toBeTruthy();
    });

    test('示例测试2', () => {
        // [1], pos=-1
        const listhead = new ListNode(1);

        expect(hasCycle(listhead)).toBeFalsy();
    });

    test('示例测试2', () => {
        // [1,2], pos=0
        const listhead = new ListNode(1);
        listhead.next = new ListNode(2);
        listhead.next.next = listhead;

        expect(hasCycle(listhead)).toBeTruthy();
    });
})