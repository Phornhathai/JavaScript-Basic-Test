function findMinandMax(num){
    let min = num[0]
    let max = num[0]

    num.forEach(temp => {
        if(temp < min){
            min = temp
        }
        if(temp > max){
            max = temp
        }
    });
    console.log(`max is ${max}`);
    console.log(`min is ${min}`);
}

findMinandMax([4,6,7,1])
findMinandMax([2,4,5,6,1,0,8])