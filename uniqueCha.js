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

//the overall space complexity of the hasUniqueChars function is O(n)