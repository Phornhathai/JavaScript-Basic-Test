//วนลูปหาค่า space
//เอา index ที่เจอมา ใส่ string "-"
let p = 0; 
let result = ""
function replaceSpace(str){
    for (const s of str) {
        if(str.includes(' ')){
            result = str.replaceAll(' ', '-')           
        }
    }
    
    return console.log(result);
}

replaceSpace("Hello world")
replaceSpace("My name is bob")