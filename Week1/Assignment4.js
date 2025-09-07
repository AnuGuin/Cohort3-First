let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEven(arr){
    return arr.filter(function(num){
        return num % 2 === 0;
    })
}

let even = printEven(arr);
console.log(even);