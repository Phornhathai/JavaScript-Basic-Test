let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let arrFinal = []
function encrypt(str){
    let splitedStr = str.split('')
    for (const s of splitedStr) {

        if(s != ' '){
            let inputIndex = arr.indexOf(s)
            let nextIndex = inputIndex - 5
            let nextValue = arr[nextIndex]
            if(nextValue){
                arrFinal.push(nextValue)
            }else{
                let numOfStart = inputIndex
                let newLoop = 5 - numOfStart
                let indexAns = arr.length - newLoop
                let ans = arr[indexAns]
                arrFinal.push[ans]
            }

        }else{
            arrFinal.push(s)
        }
        
    }
    let t = arrFinal.join('')
    console.log(t);
}

encrypt("cat")