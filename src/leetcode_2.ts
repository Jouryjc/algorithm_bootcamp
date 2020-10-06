/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    /**
     * 解题思路
     * (2 -> 4 -> 3 -> null)
     *       +
     * (5 -> 6 -> 4 -> null)
     *       =
     * (7 -> 0 -> 8 -> null)
     * 
     * 链表按位数相加，只要链表next不为null或者进位不为0，就循环相加
     * 都为null且进位为0时，就返回结果
     */

    // 技巧：创建一个辅助链表helperLink和当前辅助链表的位置节点，最终结果返回helperLink.next即可
    let helperLink = new ListNode(0);
    let head = helperLink;
    let carryNumber = 0;

    while (l1 !== null || l2 !== null || carryNumber !== 0) {
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        let total = val1 + val2 + carryNumber;

        // 取个位数字直接取模即可
        head.next = new ListNode(total % 10);
        head = head.next;
        carryNumber = Math.floor(total / 10);

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return helperLink.next;
};