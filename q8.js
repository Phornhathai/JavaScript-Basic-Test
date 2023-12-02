let count = 0
let newArr = []
function findSpace(str){

  for (const s of str) {
    // console.log(s);
    if(s === ' '){
      count++
    }
  }
  console.log(count);
}


findSpace("My name is bob")
