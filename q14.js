let count = 0
function module(input , divider){
    for (let i = 0; i <= input; i = i + divider) {
        count++
    }
    return input - (count - 1) * divider
}

// console.log(module(18,11));
console.log(module(18,3));