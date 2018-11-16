export const quickSort = (arr, leftPointer, rightPointer) => {
  if (leftPointer < rightPointer) {
    let indexOfPartition = partition(arr, leftPointer, rightPointer)

    quickSort(arr, leftPointer, indexOfPartition)
    quickSort(arr, indexOfPartition + 1, rightPointer)
  } else {
    return arr
  }
}

const partition = (arr, leftPointer, rightPointer) => {
  let pivot = arr[rightPointer]

  while (leftPointer <= rightPointer) {
    while (arr[leftPointer] < pivot) {
      leftPointer += 1
    }
    while (arr[rightPointer] > pivot) {
      rightPointer -= 1
    }
    if (leftPointer <= rightPointer) {
      ;[arr[leftPointer], arr[rightPointer]] = [
        arr[rightPointer],
        arr[leftPointer],
      ]
      leftPointer += 1
      rightPointer -= 1
    }
  }
  return rightPointer
}

// let unsortedArray = [3, 1, 2, 15, 78, 4, 32]
// quickSort(unsortedArray, 0, unsortedArray.length - 1)
// console.log(unsortedArray)
