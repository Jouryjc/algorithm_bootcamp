/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 */

export function isValid(s: string): boolean {
    if (s === '') {
        return true;
    }

    let arr: Array<string> = [];

    // 常用手段，将需要匹配或者统计的成对信息用map或object保存起来
    let obj: Record<string, any> = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let item of s) {

        // 不是obj的key，说明是左括号，直接入栈
        if (!obj.hasOwnProperty(item)) {
            arr.push(item);
        } else if (arr.pop() !== obj[item]) {
            return false;
        }
    }

    return !arr.length;
};