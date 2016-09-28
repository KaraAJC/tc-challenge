// CHALLENGE:
// Given an array of numbers, assume that they are all different. Calculate the largest difference (subtraction) between any two numbers of the array.

// Code in Javascript 2 solutions for this problem
// Explain which one is better than the other one.


// PSEUDOCODE:
// Input - An array of numbers, assuming they are all different
// Output - The largest difference between any two numbers of the array.

// Option One: Sorting
// Steps
//    - Sort Array
//    - Choose first value in array (lowest value)
//    - Choose last value in array (highest value)
//    - Subtract the two values

var sortBiggestDiff = function sortBiggestDiff(array) {
  sa = array.sort();
  return sa[sa.length-1] - sa[0];
}

// Option Two: Using Math
// Steps
//    - Find Max value in Array
//    - Find Min value in Array
//    - Subtract the two values

var mathBiggestDiff = function mathBiggestDiff(array) {
  return Math.max(...array) - Math.min(...array);
}

