const palindromes = function(string) {
    string = string.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let stringArr = string.split('');
    console.log(stringArr);
    let regString = stringArr.join('');
    console.log(regString);
    let reversedArr = stringArr.reverse(); 
    let reversedString = reversedArr.join('');
    console.log(reversedString);
    if (regString === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
