let arr = ""
function decrypt(str) {
    // console.log(str);
    for (let i = 0; i < str.length;) {
        let char = str[i]   
        console.log(char);
        if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
            arr = arr + char
            i = i + 3

        } else {
            arr = arr + char
            i = i + 1
        }
    }
    
}

decrypt("zepelepenapa papapripikapa");