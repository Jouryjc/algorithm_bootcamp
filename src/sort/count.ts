/**
 * @file 计数排序
 *
 * 找出数组中的最大和最小值
 * 统计所有数字出现的次数
 * 填充到结果中
 */

export function countingSort(arr: number[]): number[] {
  if (arr.length === 0 || arr.length === 1) {
    return arr
  }

  const max = Math.max(...arr)
  // const min = Math.min(...arr);
  const helper = new Array(max + 1).fill(0)

  // 构造计数数组
  arr.forEach(value => {
    helper[value]++
  })

  const result: number[] = []

  helper.forEach((value, index) => {
    if (value !== 0) {
      result.push(...new Array(value).fill(index))
    }
  })

  return result
}
