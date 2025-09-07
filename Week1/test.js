
// function waitFor3s(resolve){
//     setTimeout(resolve, 3000);
// }

// function promisifiedSettimeout(){
//     return new Promise(waitFor3s);
// }

// function main(){
//     console.log("Main is called");
// }

// promisifiedSettimeout().then(main);

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     })
// }

// setTimeoutPromisified(1000)
//   .then(() => {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(() =>{
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then( () => {
//     console.log("hello there");
//   });


let counter = 0;
function timer(num) {

  const intervalId = setInterval(() => {
    console.log(counter);
    if (counter <= num) {
      counter = counter + 1;
    } else {
      console.log("done");
      clearInterval(intervalId); // stop the interval
    }
  }, 1000);
}

timer(10); // Call the function to start the timer
