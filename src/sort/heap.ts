/**
 * @file 堆排序
 * 
 * 1. 将无需序列构建成一个堆，根据升序降序需求选择大顶堆或小顶堆;
 * 2. 将堆顶元素与末尾元素交换，将最大元素"沉"到数组末端;
 * 3. 重新调整结构，使其满足堆定义，然后继续交换堆顶元素与当前末尾元素，反复执行调整+交换步骤，直到整个序列有序
 */

let len = 0;

export function heapSort (arr: number[]): number[] {

    // 1. 将无需序列构建成一个堆，根据升序降序需求选择大顶堆或小顶堆;
    buildMaxHeap(arr);

    console.log(arr);

    for (let i = arr.length - 1; i > 0; i--) {

        // 逐渐将堆顶排除，然后继续构建最大堆
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }

    return arr;
}

function buildMaxHeap (arr: number[]) {
    len = arr.length;

    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify (arr: number[], i: number) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // 假设当前最大的节点下标是 i
    let largest = i;

    // 判断左、右节点的最大值
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

/**
 * 交换两个值
 *
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap (arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function downAjust (arr: number[], parentIndex: number, len: number) {
    let temp = arr[parentIndex];
    let childIndex = 2 * parentIndex + 1;
    
    while (childIndex < len) {
        if (childIndex + 1 < len && arr[childIndex + 1] > arr[childIndex]) {
            childIndex++;
        }

        if (temp >= arr[childIndex]) {
            break;
        }

        arr[parentIndex] = arr[childIndex];
        parentIndex = childIndex;
        childIndex = 2 * childIndex + 1;
    }

    arr[parentIndex] = temp;
}

export function heapSort2 (arr: number[]): number[] {
    for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
        downAjust(arr, i, arr.length);
    }

    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, arr[i], arr[0]);
        downAjust(arr, 0, i)
    }

    return arr;
}