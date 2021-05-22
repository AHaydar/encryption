const reverseString = (str) => {
    if (str === "") {
        return "";
    }

    return reverseString(str.substring(1)) + str.charAt(0);
}

const encrypt = (text) => {
    // Get each word of the provided text
    const words = text.split(' ');

    // Convert each word in the array
    const convertedWords = words.map((word) => {
        const middleIndex = Math.floor(word.length / 2);

        // Get the letter in the middle after splitting the word length by 2, so that we concatenate it after converting each half separately
        let middleLetter = '';
        if (word.length % 2) {
            middleLetter = word[middleIndex];
        }

        // Get first half of the word and reverse it
        const firstHalfReversed = reverseString(word.slice(0, middleIndex));
        // Get second half of the word and reverse it
        const secondHalfReversed = reverseString(word.slice(middleIndex + 1));

        return firstHalfReversed + middleLetter + secondHalfReversed;
    })

    return convertedWords.join(' ');
}

const encryptedText = encrypt('hello world')
console.log(encryptedText)