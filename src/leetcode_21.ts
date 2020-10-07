/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null) {
        return l2;
    }

    if (l2 === null) {
        return l1;
    }

    if (l1.val > l2.val) {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    } else {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }

    // 将值存在数组中，然后对数组排序，再生成链
    // let arr: Array<number> = [];

    // const helper = (link: ListNode | null) => {
    //     while (link !== null) {
    //         arr.push(link.val);
    //         link = link.next;
    //     }
    // }

    // helper(l1);
    // helper(l2);

    // // 默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
    // arr.sort((v1, v2) => { return v1 - v2 });

    // let helperList = new ListNode(0);
    // let head = helperList;
    // for (let val of arr) {
    //     head.next = new ListNode(val);
    //     head = head.next;
    // }

    // return helperList.next;
};