/**
 * @file 希尔排序
 * 
 * 是一种优化的插入排序
 * 定义一个间隔，然后排序，再依次缩小范围
 * 先分组使用插入排序，然后整体使用插入排序
 */

export function shellSort (arr: number[]): number[] {
    for (let gap = Math.floor(arr.length / 2); gap > 0; Math.floor(gap /= 2)) {
        for (let i = gap; i < arr.length; i++) {
            let j = i;

            while (j - gap >= 0 && arr[j] < arr[j - gap]) {
                [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];

                j-=gap;
            }
        }
    }
    
    return arr;
}