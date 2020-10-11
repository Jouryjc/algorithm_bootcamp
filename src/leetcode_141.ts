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

export function hasCycle(head: ListNode | null): boolean {
    if (!head) {
        return false;
    }
    
    const map = new Map();
    while (head) {
        if (!map.has(head)) {
            map.set(head, true);
            head = head.next;
        } else {
            return true;
        }
    }

    return false;
};