function findMaxSum(numbers) {
  // Your code goes here

  // sort array from highest to lowest number
  const sortedArr = numbers.sort(function (a, b) {
    return b - a;
  });

  // get the index of half of the array
  const half = Math.ceil(sortedArr.length / 2);

  // split array in 2 using 'half' as an index
  const firstHalf = sortedArr.splice(0, half);

  // sum all the highest values
  const total = firstHalf.reduce((acc, nextVal) => {
    return acc + nextVal;
  });

  return total;
}

findMaxSum([5, 9, 7, 11]);
console.log(findMaxSum([5, 9, 7, 11])); // should print 20
