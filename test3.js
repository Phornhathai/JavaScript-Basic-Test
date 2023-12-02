//Converts the first letter of each word of a string in upper case

function converter(letter) {
    let splitedStr = letter.split(' ')
    // console.log(splitedStr);
    //วนลูปแต่ละครั้งเอา ตัวอักษรแรก
    let arrString = []
    console.log(splitedStr);

    for (let i = 0; i < splitedStr.length; i++) {
        let currentWord = splitedStr[i];
        arrString.push(currentWord.charAt(0).toUpperCase() + currentWord.slice(1));
        
    }
    
    console.log(arrString.join(' '));
    return arrString;
}

converter("the quick brown fox");