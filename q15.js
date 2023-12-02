
let star
function printStar(n) {
    
    for (let i = 1; i <= n; i++) {
         star = ""
        for (let j = 0; j < i; j++) {
            star = star + "*"
        }
        console.log(star);
    }
}

printStar(5)