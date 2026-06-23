// let statement = {
//     spellString: function () {
//         let text = document.getElementById("statement").value;

//         for (let i = 0; i < text.length; i++) {
//             if (text.charAt(i) !== " ") {
//                 console.log(text.charAt(i));
//             }
//         }
//     },

//     replaceWord: function () {
//         let text = document.getElementById("statement").value;
//         let toReplace = document.getElementById("toReplace").value;
//         let replaceWith = document.getElementById("replaceWith").value;

//         let result = text.replaceAll(toReplace, replaceWith);
//         console.log(result);
//     },

//     countWords: function () {
//         let text = document.getElementById("statement").value;
//         let count = 0;

//         for (let i = 0; i < text.length; i++) {
//             if (text.charAt(i) !== " ") {
//                 count++;
//             }
//         }
//         console.log(count);
//     },

//     vowelsCount: function () {
//         let text = document
//             .getElementById("statement")
//             .value.trim()
//             .toLowerCase();

//         let count = 0;

//         for (let i = 0; i < text.length; i++) {
//             if (
//                 text.charAt(i) === "a" ||
//                 text.charAt(i) === "e" ||
//                 text.charAt(i) === "i" ||
//                 text.charAt(i) === "o" ||
//                 text.charAt(i) === "u"
//             ) {
//                 count++;
//             }
//         }

//         console.log(count);
//     },
// };

function countWord() {
    let text = document.getElementById("statement").value.trim();
        let words = text.split(" ");
        console.log(`Word count:${words.length}`);
}

function countLetters() {
    let text = document.getElementById("statement").value.trim();
    let bigCount = 0;
    let smallCount = 0;

    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if (char === " ") {
            continue;
        }
        if (char === char.toUpperCase()) {
            bigCount++;
        } else {
            smallCount++;
        }
    }
    console.log(`Big:${bigCount} Small: ${smallCount}`);
}

function reverseWord() {
    let text = document.getElementById("statement").value.trim();
    let reversedText = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text.charAt(i);
    }
    console.log(`Reversed:${reversedText}`);
    return reversedText;
}

function findLongWord() {
    let text = document.getElementById("statement").value.trim();
    let words = text.split(' ');
    let longestWord = '';
    let wordCount = 0;

    for (let i = 0; i < words.length; i++) {
        if (wordCount < words.at(i).length) {
            wordCount = words.at(i).length;
            longestWord = words.at(i);
        }
    }

    console.log(`LongWord is : ${longestWord}`);
}

function checkPalindrome() {
    let text = document.getElementById("statement").value.trim().toLowerCase();
    let reverse = reverseWord();
        if (text === reverse) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }

