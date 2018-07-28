function mergeSort(nums) {
  let length = nums.length;
  console.log(`length: ${length}`);
  // Base
  if(length <= 1){
    return nums;
  }
  
  let lengthOfA = Math.floor(nums.length/2);
  let lengthOfB = length - lengthOfA;
  console.log(`a length: ${lengthOfA}`);
  console.log(`b length: ${lengthOfB}`);
  
  let a = [];
  for(let i = 0; i < lengthOfA; i++){
    a.push(nums[i]);
  }
  let b = [];
  for(let i = lengthOfA; i < length; i++){
    b.push(nums[i]);
  }
  a = mergeSort(a);
  b = mergeSort(b);
  console.log(`a:${a}`);
  console.log(`b:${b}`);
  
  let p = 0;
  let q = 0;
  for(let i = 0; i < length; i++){
    console.log(`i: ${i}, p: ${p}, q: ${q}, a value: ${a[p]}, b value: ${b[q]}`);
    if(p >= lengthOfA){
      nums[i] = b[q];
      q++;
    }else if(q >= lengthOfB){
      nums[i] = a[p];
      p++;
    }else if (a[p] < b[q]){
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
