export const insertionSort = (unsortedArr) => {
  const sortedArr = [...unsortedArr]

  for (let i = 1; i < sortedArr.length; i += 1) {
    if (sortedArr[i] < sortedArr[i - 1]) {
      let currElement = i
      for (let j = i - 1; j >= 0; j -= 1) {
        if (sortedArr[currElement] < sortedArr[j]) {
          [sortedArr[currElement], sortedArr[j]] = [sortedArr[j], sortedArr[currElement]]
          currElement = j
        }
      }
    }
  }

  return sortedArr
}
