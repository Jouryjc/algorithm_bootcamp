const { addTwoNumbers, ListNode } = require('../src/leetcode_2');

describe('两数相加', () => {
    test('leetcode2示例测试', () => {
        const link1 = new ListNode(2);
        link1.next = new ListNode(4);
        link1.next.next = new ListNode(3);

        const link2 = new ListNode(5);
        link2.next = new ListNode(6);
        link2.next.next = new ListNode(4);

        const result = new ListNode(7);
        result.next = new ListNode(0);
        result.next.next = new ListNode(8);

        expect(addTwoNumbers(link1, link2)).toEqual(result);
    });
})