let star
function printStar(n) {
    
    for (let i = n - 1; i >= 0; i--) {
         star = ""
        for (let j = 0; j < i; j++) {
            star += " "
        }
        for (let k = n - i; k > 0; k--) {
            star += "o"
        }
        
        console.log(star);
    }
}

printStar(5)