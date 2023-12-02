//สร้าง function decrypt รับค่าที่เข้ารหัสมา
//แยก string ที่รับมา เป็น array
//สร้าง array a-z
//เอา string ที่รับเข้ามา หาใน array ว่าเจอ index ที่เท่าไร
//จากนั้น เอา index ที่ได้ไป + 5 เพื่อหา ตัวอักษรใน array a-z แล้ว return ค่ากลับไป
//สร้าง array ตัวใหม่มารับค่า string ชุดใหม่เพื่อ return ค่ากลับไปให้ user
//กรณีที่ +5 แล้วไม่พบใน array a-z จะ return -1 ต้องเอาไปหาค่าเริ่มต้นใหม่เท่าไร

let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let arrFinal = []
function decrypt(str) {
    let splitedStr = str.split('')
    // console.log(splitedStr);
    
    for (const s of splitedStr) {

        if(s != ' '){

            let inputIndex = arr.indexOf(s)
            let nextIndex = inputIndex + 5 
            let nextValue = arr[nextIndex]
            if(nextValue){
                arrFinal.push(nextValue)
            }else{ //ถ้าเลย z ให้ไปหาต่อที่ต้น arr 
                let numOfEnd = (arr.length - 1) - inputIndex
                let newLoop = 5 - numOfEnd
                let ans = arr[newLoop - 1]
                arrFinal.push(ans)
            }
            
        }else{
            arrFinal.push(s)
        }
    }
    let result = arrFinal.join('')
    console.log(result);
}

decrypt("xvo");