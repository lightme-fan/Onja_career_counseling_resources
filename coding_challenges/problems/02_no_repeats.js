// Write a function, `noRepeats(yearStart, yearEnd)`, which takes a
// range of years and outputs those years which do not have any
// repeated digits.
//
// Hint: It may be helpful to write a helper function `noRepeat(year)`
// which returns true/false if a single year doesn't have a repeat.

function uniqueNumber(numbers) {
    return numbers.filter((value, index, self) => self.indexOf(value) === index)
}

function noRepeats(yearStart, yearEnd) {
    let noRepeatDigits = []

    for (let i = yearStart; i < yearEnd; i++) {
         let year = String(i).split("").map(num => Number(num))

        if (uniqueNumber(year).length === year.length) {
            noRepeatDigits.push(Number(uniqueNumber(year).join("")));
        }
    }
    return noRepeatDigits
}

module.exports = noRepeats;
