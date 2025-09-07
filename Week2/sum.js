// This is a simple program to calculate the sum of two numbers
function sum(a,b){
    return a + b;
}

// This is a simple program to calculate the sum of all numbers from 0 to n using loop
function loopSum(num){
    let sum = 0;
    for(let i = 0; i <= num; i++){
        sum += i;
    }
    return sum;
}

// This is a simple program to calculate the sum of all numbers from 0 to n using natural number formula
function naturalSum(num){
    return (num * ( num + 1)) / 2;
}

let sum1 = sum(2,3);
let sum2 = loopSum(5);
let sum3 = naturalSum(5);
console.log(sum1);
console.log(sum2);
console.log(sum3);