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

import { TreeNode } from './tree/leetcode_104'

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function hasCycle(head: ListNode | null): boolean {
  /**
   * map标记法，如果有重复的节点，就返回true，否则返回false
   */
  // const map = new Map();
  // while (head) {
  //     if (!map.has(head)) {
  //         map.set(head, true);
  //         head = head.next;
  //     } else {
  //         return true;
  //     }
  // }

  // return false;

  /**
   * 快、慢指针
   */
  let quick = head
  let slow = head

  while (slow && quick && quick.next) {
    slow = slow.next
    quick = quick.next.next

    if (slow === quick) {
      return true
    }
  }

  return false
}
