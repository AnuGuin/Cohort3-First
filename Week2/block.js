function wait(ms) {
  let start = Date.now();
  while (Date.now() - start < ms) {} // blocks the thread
}

console.log("Start");
wait(3000);  // pauses for 3 seconds
console.log("End");