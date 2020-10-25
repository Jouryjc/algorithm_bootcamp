/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 */

export function climbStairs(n: number): number {
    // f(n)表示第n阶楼梯的走法，一次性能走1步或2步，那么f(n) = f(n-1) + f(n-2)
    // 这道题就变成了斐波那契数列
    let arr = [0, 1, 2];
    if (arr.includes(n)) {
        return n;
    }

    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
};