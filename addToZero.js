function addToZero(numbers) {
    const numSet = new Set();

    for (let num of numbers) {
        if (numSet.has(-num)) {
            return true;
        }
        numSet.add(num);
    }

    return false;
}

// Test cases
console.log(addToZero([]));          
console.log(addToZero([1]));         
console.log(addToZero([1, 2, 3]));   
console.log(addToZero([1, 2, 3, -2]));

//Time complexity is O(n), and space complexity is O(n)