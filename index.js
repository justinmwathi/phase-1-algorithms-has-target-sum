function hasTargetSum(array, target) {
  // Write your algorithm here
    // Iterate through every number starting from index[0]
    for (let i = 0; i < array.length; i++) {
      // Still iterate through each number but with an index ahead of i
      for (let k = i + 1; k < array.length; k++) {
        // If the number[i] + number[k] equals the target, return true
        if (array[i] + array[k] === target) {
          return true;
        }
      }
    }
    // If no pair of numbers adds up to the target, return false
    return false;
  
}

/* 
  Write the Big O time complexity of your function here
Time complexity=O(n^2)
Space complexity=O(n)
*/

/* 
  Add your pseudocode here
*/
//the function hasTargetSum(array,targetNumber)-it takes two arguments.
//if the sum of any numbers in the array equals to target number,the function should return true else it should return false.

/*
  Add written explanation of your solution here
  The function  returns true if any pair of numbers in the array adds up to the target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
