const heapSort = array => {
  snapshot(array);
  // code
  createMaxHeap(array);
  console.log("created the max heap");
  // Swap the first and last element in array
  for(let i = array.length - 1; i >= 1; i--){
    swap(array, i, 0);
    heapify(array, 0, i);
  }
  snapshot(array);
  return array;
};

const createMaxHeap = array => {
  // code
  let length = array.length;
  let startPoint = Math.floor(length/2);
  for(let i = startPoint; i >= 0; i--){
    heapify(array, i, length);
  }
};

const heapify = (array, index, heapSize) => {
  // code
  const l = index*2+1;
  const r = index*2+2;
  let largest = index;
  // Find the index that has maximum value between node, its left and right
  if(l < heapSize && array[l] > array[index]){
    largest = l;
  }
  if(r < heapSize && array[r] > array[largest]){
    largest = r;
  }
  
  // node is the largest
  if(largest !== index) {
    // swap the node value down and swap the bigger value up
    swap(array, index, largest);
    heapify(array, largest, heapSize);
  }
  
  snapshot(array);
};

const swap = (array, a, b) => {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};

const snapshot = (array) => {
  console.log(array);
}

const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
heapSort(nums);
