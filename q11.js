const input = 25
function isPrimenumber(num) {
    let isPrimenumber = true
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrimenumber = false
            
        }
    }
    return isPrimenumber

}

for (let i = 0; i <= input; i++) {
    if(isPrimenumber(i)){
        console.log(i);
    }
    
}
