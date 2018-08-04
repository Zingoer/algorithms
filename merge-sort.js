// The idea
function mergeSort(nums) {
  let length = nums.length;
  console.log(`length: ${length}`);
  // Base
  if(length <= 1){
    return nums;
  }
  
  // Split nums to two array around middle point
  let lengthOfA = Math.floor(nums.length/2);
  let lengthOfB = length - lengthOfA;
  console.log(`a length: ${lengthOfA}`);
  console.log(`b length: ${lengthOfB}`);
  
  // Left array from 0 to middle point
  let a = [];
  for(let i = 0; i < lengthOfA; i++){
    a.push(nums[i]);
  }
  
  // Right array from middle point to the end
  let b = [];
  for(let i = lengthOfA; i < length; i++){
    b.push(nums[i]);
  }
  a = mergeSort(a);
  b = mergeSort(b);
  console.log(`a:${a}`);
  console.log(`b:${b}`);
  
  // Merge the two arrays back to one
  let p = 0;
  let q = 0;
  for(let i = 0; i < length; i++){
    console.log(`i: ${i}, p: ${p}, q: ${q}, a value: ${a[p]}, b value: ${b[q]}`);
    // Only add b to the end of result array because a is used up
    if(p >= lengthOfA){
      nums[i] = b[q];
      q++;
    }
    // Only add a to the end of result array because b is used up
    else if(q >= lengthOfB){
      nums[i] = a[p];
      p++;
    }
    // Add the smaller one to the end of result array
    else if (a[p] < b[q]){
      nums[i] = a[p];
      p++;
    }else{
      nums[i] = b[q];
      q++;
    }
    console.log(`merged array: ${nums}`);
  }
  
  return nums;
}

var nums = [10,5,3,8,2,6,4,7,9,1];
var ans = mergeSort(nums);

// With JS Util functions
let mergeSort2 = (nums) =>  {
  let length = nums.length;
  console.log(`length: ${length}`);
  // Base
  if(length <= 1){
    return nums;
  }
  
  let mid = Math.floor(nums.length/2);
  
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);
  console.log(`left:${left}`);
  console.log(`right:${right}`);
  
  return stitch(mergeSort(left), mergeSort(right));
}

let stitch = (left, right) => {
  let result = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      // pop the first one in the left array and push it into result
      result.push(left.shift());
    }else{
      // pop the first one in the right array and push it into result
      result.push(right.shift());
    }
  }
  
  // If one array is used up, then add the rest of the other array to the end of the result
  // Or fancy one
  // return [...result, ...left, ...right];
  return result.concat(left, right);
}

var nums2 = [10,5,3,8,2,6,4,7,9,1];
var ans2 = mergeSort2(nums);
