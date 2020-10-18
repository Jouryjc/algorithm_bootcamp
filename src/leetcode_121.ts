export function maxProfit(prices: number[]): number {
    let max = 0;
    let len = prices.length;

    // 暴力法
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            max = Math.max(max, prices[j] - prices[i]);
        }
    }

    return max;
};