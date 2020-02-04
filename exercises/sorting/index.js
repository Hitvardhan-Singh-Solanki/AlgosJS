// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {}

function selectionSort(arr) {}

function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

function halfArray(arr) {
  const halfIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, halfIndex);
  const right = arr.slice(halfIndex);
  return { left, right };
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const { left, right } = halfArray(arr);
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
