import input from './input.js'

//1.feladat
let year = 100;
function isLeapYear(year) {
    if(year % 4 == 0){
        return true;
    }
    else{
        return false; 
    }
}
console.log(isLeapYear(year))
//2.feladat
let number = 4;
function factorial(number) {
    let factorial = 0;
    for(let i = 1; i < number; i++){
        factorial = number * i;
    }
    return factorial;
    }
console.log(factorial(number))
//3.feladat
 function digitsAverage(number1) {
    let sumDigits = 0;
    let str = number1.toString();
     for(let i = 0; i < str.length; i++){
        sumDigits += parseInt(str.charAt(i))
     }
     let avg = sumDigits / str.length;
     return avg;
     }
console.log(digitsAverage(268));
//4.feladat
function threeRuls() {
    
    }