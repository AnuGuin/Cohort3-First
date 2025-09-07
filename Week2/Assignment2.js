//Write a code that logs hi after 1 sec, logs hello after 3 sec, hello there after 5 sec

// function delay(ms){
//     return new Promise(resolve =>{
//         setTimeout(resolve, ms);
//     })
// }

// // //avoiding callback hell

// delay(1000).then(hi => {
//     console.log("Hi");
//     return delay(3000);
// }).then(hello => {
//     console.log("Hello");
//     return delay(5000);
// }).then(ht => {
//     console.log("Hello There");
// });

function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
	await setTimeoutPromisified(1000);
	console.log("hi");
	await setTimeoutPromisified(3000);
	console.log("hello");
	await setTimeoutPromisified(5000);
	console.log("hi there");
}

solve();