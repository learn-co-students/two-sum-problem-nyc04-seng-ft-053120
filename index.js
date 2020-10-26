function bruteForceTwoSum(array, sum) {

  let result = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        result.push([array[i], array[j]])
      }
    }
  }

  return result

}

// Time complexity of this will be O(n^2)

function binarySearchTwoSum(array, sum) {
  let result = [];

  array = mergeSort(array);

  let leftPointerIdx = 0;
  let rightPointerIdx = array.length - 1;

  while (leftPointerIdx < rightPointerIdx) {
    let currentSum = array[leftPointerIdx] + array[rightPointerIdx];

    if (currentSum === sum) {
      result.push([array[leftPointerIdx], array[rightPointerIdx]]);
      rightPointerIdx--;
      leftPointerIdx++;
    } else if (currentSum < sum) {
      leftPointerIdx++;
    } else {
      rightPointerIdx--;
    }
  }

  return result
}

function binaryMatch(sortedArray, sum) {
  let leftPointerIdx = 0;
  let rightPointerIdx = sortedArray.length - 1;

  while (leftPointerIdx < rightPointerIdx) {
    let currentSum = sortedArray[leftPointerIdx] + sortedArray[rightPointerIdx];

    if (currentSum === sum) {
      return true;
    } else if (currentSum < sum) {
      leftPointerIdx++;
    } else {
      rightPointerIdx--;
    }
  }

  return false
}

function hashTwoSum(array, sum) {
  let hash = {};
  let result = [];

  for (let num of array) {
    let complement = sum - num;
    if (hash.hasOwnProperty(complement)) {
      result.push([complement, num])
    } else {
      hash[num] = true; 
    }
  }

  return result
}
// Adding item into hash is O(n)
// Checking hash is O(1)
// Looping over eah num is O(n)
// Therefore overall is O(n)


// Takes in 2 sorted arrays, and merge them
function merge(arr1, arr2) {
  let result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return [...result, ...arr1, ...arr2]
}

function mergeSort(arr) {

  if (arr.length <= 1) return arr;

  let midpoint = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0, midpoint);
  let rightHalf = arr.slice(midpoint);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf))

}

 