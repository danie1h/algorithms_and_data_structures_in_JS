const bubbleSort = (unsortedArray) => {
  const sortedArray = [...unsortedArray]

  for (let i = 0; i < sortedArray.length - 1; i += 1) {
    if (sortedArray[i] > sortedArray[i + 1]) {
      [sortedArray[i], sortedArray[i + 1]] = [sortedArray[i + 1], sortedArray[i]]
    }
  }

  return sortedArray
}

export default bubbleSort
