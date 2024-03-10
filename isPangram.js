function isPangram(sentence) {
    sentence = sentence.toLowerCase();
    let letters = new Set();
    for (let char of sentence) {
        if (/[a-z]/.test(char)) {
            letters.add(char);
        }
    }
    return letters.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!")); 
console.log(isPangram("I like cats, but not mice"));


//Time complexity is O(n), and space complexity is O(1)