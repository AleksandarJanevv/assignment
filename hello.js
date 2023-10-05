const findAndReturnTheLongestWord = (sentance) => {
    const wordsConversion = sentance.toLowerCase().match(/[a-z]+/g);

    if(!wordsConversion){
        return null;
    }

    let longestWord = '';
    let maxVowelCount = 0;

    for (const individualWord of wordsConversion) {
        const vowelCount = individualWord.replace(/[^aeiou]/g, '').length;
        if (individualWordlength > longestWord.length || (individualWord.length === longestWord.length && vowelCount > maxVowelCount)) {
            longestWord = individualWord;
            maxVowelCount = vowelCount;
        }
    }
    return longestWord;
}

console.log("Longest word with most vowels is: " + findAndReturnTheLongestWord());


