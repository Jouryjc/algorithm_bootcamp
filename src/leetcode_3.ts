/**
 * 无重复字符的最长子串
 * 注意：子序列和子串的区别
 */

export function lengthOfLongestSubstring(s: string): number {

    /**
     * 暴力解法
     * 1. 枚举所有的子字符串
     * 2. 利用集合数据结构检查是否有重复的字符，如果有就返回false，没有就返回true
     */    

    // function checkAllUnique (str: string, start: number, end: number) {
    //     const set = new Set();

    //     for (let i = start; i < end; i++) {
    //         let char = str.charAt(i);

    //         if (set.has(char)) {
    //             return false;
    //         }

    //         set.add(char);
    //     }

    //     return true;
    // }

    // let len = s.length;
    // let result = 0;

    // for (let i = 0; i < len; i++) {
    //     for (let j = i + 1; j <= len; j++) {
    //         if (checkAllUnique(s, i, j)) {
    //             result = Math.max(result, j - 1);
    //         }
    //     }
    // }

    // return result;

    /**
     * 滑动窗口解法
     */
    const set = new Set();
    const len = s.length;

    let rightIndex = -1;
    let result = 0;

    for (let i = 0; i < len; i++) {
        if (i !== 0) {
            let char = s.charAt(i - 1);
            
            set.delete(char);
        }

        while (rightIndex + 1 < len && !set.has(s.charAt(rightIndex + 1))) {
            set.add(s.charAt(rightIndex + 1));
            ++rightIndex;
        }

        result = Math.max(result, rightIndex - i + 1);
    }

    return result;
};