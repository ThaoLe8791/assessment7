function findLongestWord(words) {
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}
console.log(findLongestWord(["hi", "hello"])); // -> 5

//Time complexity is O(n), and space complexity is O(1).

