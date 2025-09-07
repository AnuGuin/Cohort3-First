const delayFunction = (fn: () => void) => {
    setTimeout(fn, 1000);
}

delayFunction(() => {
    console.log(`Hello`);
})