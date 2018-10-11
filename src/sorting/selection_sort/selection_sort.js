export const selectionSort = (unsortedArr) => {
  const sortedArr = [...unsortedArr]

  for (let i = 0; i < sortedArr.length - 1; i++) {
    let indexOfMinVal = i
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j] < sortedArr[indexOfMinVal]) {
        indexOfMinVal = j
      }
    }
    if (indexOfMinVal !== i) {
      [sortedArr[i], sortedArr[indexOfMinVal]] = [sortedArr[indexOfMinVal], sortedArr[i]]
    }
  }

  return sortedArr
}
