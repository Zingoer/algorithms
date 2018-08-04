const quickSort = (input, start, end) => {
  // Divide the array to two sub arrays by pivot
  if(start < end){
    console.log(`Before partition: ${input}`);
    const pivotIndex = partition(input, start, end);
    console.log(`After partition: ${input}`);
    console.log(`pivot index: ${pivotIndex}`);

    // Recursively
    quickSort(input, start, pivotIndex-1);
    quickSort(input, pivotIndex+1, end);
  }
  
  return input;
}

const partition = (input, start, end) => {
  // Pick last element as pivot
  const pivot = input[end];
  let i = start-1, j=start;
  // Swap element position if current j element is less or equal than pivot
  while(j < end){
    if(input[j] <= pivot){
      i++;
      swap(input, i, j);
    }
    j++;
  }
  // Finally swap pivot with the first element that bigger than pivot
  swap(input, ++i, end);
  return i;
}

const swap = (input, x, y) => {
  console.log(`Before swap: ${input}`);
  const temp = input[x];
  input[x] = input[y];
  input[y] = temp;
  console.log(`After swap: ${input}`);
}

const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
const answer = quickSort(input, 0, input.length-1);
