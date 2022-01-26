 // Write a function, `nearestLarger(arr, i)` which takes an array and an
 // index.  The function should return another index, `j`

 // Index `j` should satisfy two contitions:
 // (a) `arr[i] < arr[j]`, AND
 // (b) there is no other index closer to i than j where `arr[i] < arr[j]`

 // In case of ties (see example below), choose the earliest (left-most)
 // of the two indices. If no number in `arr` is larger than `arr[i]`,
 // return `null`.
 
const nearestLarger = (arr, targetIndex) => {
  let itemLeft = null
  let itemRight = null

  let indexLeft = 0
  let indexRight = 0

  let result = null

  // Left index
  for (let i = targetIndex; i >= 0; i--) {
    if (itemLeft < arr[i]) {
      itemLeft = arr[i]		
      indexLeft = i
    }
  }

  // Right index
  for (let j = targetIndex; j <= arr.length; j++) {
    if (itemRight < arr[j]) {
      itemRight = arr[j]		
      indexRight = j
    }
  }

  // Final result
  if (itemLeft < itemRight) {
    result = indexRight
  } else if(itemLeft > itemRight) {
    result = indexLeft
  } else {
    return result
  }

  console.log(result)
  return result
}

module.exports = nearestLarger;