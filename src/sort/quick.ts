/**
 * 快速排序
 *
 * 时间复杂度 O(nlogn)
 * 选择一项作为基准，
 */


export function quickSort(arr: number[]): number[] | undefined {
  return exceedQuickSort(arr, 0, arr.length - 1)
}

function exceedQuickSort(
  arr: number[],
  startIndex: number,
  endIndex: number
): number[] | undefined {
  if (startIndex >= endIndex) {
    return
  }

  let pivotIndex = partition(arr, startIndex, endIndex)

  console.log(pivotIndex)
  exceedQuickSort(arr, startIndex, pivotIndex - 1)
  exceedQuickSort(arr, pivotIndex + 1, endIndex)

  return arr
}

/**
 * 双边循环法
 *
 * @param {number[]} arr
 * @param {number} startIndex
 * @param {number} endIndex
 * @returns {number}
 */
// function partition (
//   arr: number[],
//   startIndex: number,
//   endIndex: number
// ): number {

//   // 当前基准值
//   let pivot = arr[startIndex];
//   let left = startIndex;
//   let right = endIndex;

//   while (left !== right) {

//     // 右指针如果比基准元素大，就往左移动
//     while (left < right && arr[right] > pivot) {
//       right--;
//     }

//     // 左指针如果比基准元素小，就往右移动
//     while (left < right && arr[left] <= pivot) {
//       left++;
//     }

//     if (left < right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//     }
//   }

//   [arr[startIndex], arr[left]] = [arr[left], pivot];

//   console.log('***********************************')
//   console.log(arr)
//   console.log('***********************************')

//   return left;
// }

/**
 * 单边循环法
 *
 * @param {number[]} arr
 * @param {number} startIndex
 * @param {number} endIndex
 * @returns {number}
 */
function partition(arr: number[], startIndex: number, endIndex: number): number {
  let pivot = arr[startIndex]
  let mark = startIndex

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < pivot) {
      mark++
      ;[arr[mark], arr[i]] = [arr[i], arr[mark]]
    }
  }

  [arr[startIndex], arr[mark]] = [arr[mark], pivot]

  return mark
}
