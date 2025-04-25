const fibonacci = function(n) {
    let arr = [1, 1];
    if (n === String) {
        Number(n);
    }
    if (n === 0 || n === '0') {
        return 0;
    } 
    if (n < 0) {
        return "OOPS";
    }
    for (let i = 2; i < n; i++) {
        let firstNum = arr[i - 1]; // (arr[1])
        let secondNum = arr[i - 2]; // (arr[0])
        let nextNum = firstNum + secondNum;
        arr.push(nextNum);   
    }
    console.log(arr);
    console.log(arr[n-1]);
    return(arr[n-1]);
};

// Do not edit below this line
module.exports = fibonacci;
