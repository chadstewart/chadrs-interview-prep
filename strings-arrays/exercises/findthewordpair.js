//Original solution from a CodebookClub Member Abdulrahman Mazhar
function compoundMatch(words, target) {
    const dict = {};
    words.forEach((word) => {
        dict[`${word}`] = word;
    });

    for (let key in dict) {
        const keyIsInTarget = target.includes(key);
        if (keyIsInTarget) {
            const remainingWord = target.replace(key, '');
            const remainingwordIsInDict = remainingWord in dict;
            if (remainingwordIsInDict) {
                const indexOfKey = words.indexOf(key);
                const indexOfremainigWord = words.indexOf(remainingWord);
                console.log(key);
                console.log(remainingWord);
                if (key + remainingWord == target) {
                    return [key, remainingWord, [indexOfKey, indexOfremainigWord]];
                } else if (remainingWord + key == target) {
                    return [key, remainingWord, [indexOfremainigWord, indexOfKey]];
                }
                break;
            }
        }
    }
    return null;
}

//Updated solution based on CodebookClub Member Abdulrahman Mazhar
function compoundMatch(words, target) {
    const dictionary = {};
    for (let i = 0; i < words.length; i++) dictionary[words[i]] = i;

    for (let key in dictionary) {
        if (target.includes(key)) {
            const remainingWord = target.replace(key, '');
            if (dictionary[remainingWord]) {
                if (key + remainingWord == target) {
                    return [key, remainingWord, [dictionary[key], dictionary[remainingWord]]]
                } else {
                    return [key, remainingWord, [dictionary[remainingWord], dictionary[key]]]
                }
            }
        }
    }
    return null;
}

//unit-testable solution
function compoundMatch(words, target) {
	const dictionary = makeDictionary(words);
	return findPairs(dictionary, target);
}

function makeDictionary(array) {	
    const dictionary = {};
    for (let i = 0; i < array.length; i++) dictionary[array[i]] = i;
    return dictionary;
}

function findPairs(dictionary, target) {
	for (let key in dictionary) {
        if (target.includes(key)) {
            const remainingWord = target.replace(key, '');
            if (dictionary[remainingWord]) {
                if (key + remainingWord == target) {
                    return [key, remainingWord, [dictionary[key], dictionary[remainingWord]]]
                } else {
                    return [key, remainingWord, [dictionary[remainingWord], dictionary[key]]]
                }
            }
        }
    }

    return null;
}
