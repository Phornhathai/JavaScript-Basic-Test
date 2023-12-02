let today = new Date()
let date = today.getDay()
let dayList = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
console.log(`Today is : ${dayList[date]}.`);

let hour = today.getHours();
// console.log(hour);
let minute = today.getMinutes();
// console.log(minute);
let second = today.getSeconds();
// console.log(second);
// เช็คว่าเป็น pm หรือ am
let checkTime = (hour >= 12)? " PM " : " AM ";
// แปลง 24 ชม. เป็น 12 ชม.
hour = (hour >= 12)? hour - 12: hour;
// เช็คว่าเป็น PM หรือ Am
if(hour === 0 && checkTime === ' PM '){
    if(minute === 0 && second === 0){
        hour = 12
        checkTime = ' Noon '

    }else{
        hour = 12
        checkTime = ' PM '
    }
}
if(hour === 0 && checkTime === ' AM '){
    if(minute === 0 && second === 0){
        hour = 12
        checkTime = ' Midnight '

    }else{
        hour = 12
        checkTime = ' AM '
    }
}

console.log(`Current Time : ${hour}${checkTime} : ${minute} : ${second}`);

