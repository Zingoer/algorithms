// Without any language helper functions
function insertionSort (nums) {
  for(let i = 1; i < nums.length; i++){
    // Pull the value into temp variable so that it can be inserted into new position later on
    let temp = nums[i];
    let j = i - 1;
    // Compare each value before the ith element with the ith element until ith element is not the smaller one
    // Or reach the start of array
    while(j >= 0 && temp < nums[j]){
        console.log(nums);
        // Move the current jth element one position back
        nums[j+1] = nums[j];
        j--;
    }
    // Insert the original ith value to the space
    nums[j + 1] = temp;
  }
  console.log(nums);
}

// With js splice helper function
var insertionSort2 = nums => {  
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      console.log(nums);
      if (nums[i] < nums[j]) {
        // Pull out the ith element from array
        let spliced = nums.splice(i, 1);
        // Insert it back to the jth position that pulled out value is just smaller than the original jth element
        nums.splice(j, 0, spliced[0]);
      }
    }
    console.log(nums);
  }
};

let nums1 = [10,5,3,8,2,6,4,7,9,1];
insertionSort(nums1);
let nums2 = [10,5,3,8,2,6,4,7,9,1];
insertionSort2(nums2);
