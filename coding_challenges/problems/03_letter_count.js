// Write a function, `letter_count(str)` that takes a string and
// returns an object mapping each letter to its frequency. Do not include
// spaces.

function letterCount(str) {
    // Split to get an array of strings
    let string = str.toLowerCase().split("")

    // Filter out all empty strings
    let newStr = string.filter(s => s !== " ")

    // Create an empty object
    let obj = {}

    // Loop through the string array
    for (let i = 0; i < newStr.length; i++) {
        // Check if the element is NaN, then just return 1, otherwise increment it by 1
        if (isNaN(obj[newStr[i]])) {
            obj[newStr[i]] = 1
        } else {
            obj[newStr[i]] = obj[newStr[i]] + 1
        }
    }

    // return the new object
    return obj
}

module.exports = letterCount;
