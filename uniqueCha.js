function hasUniqueChars(word) {
    let seen = new Set();
    
    for (let char of word) {
        if (seen.has(char)) {
            return false;
        }
        seen.add(char);
    }
    
    return true;
}
console.log(hasUniqueChars("Monday"));   
console.log(hasUniqueChars("Moonday"));  

//Time complexity is O(n), and space complexity is O(n)