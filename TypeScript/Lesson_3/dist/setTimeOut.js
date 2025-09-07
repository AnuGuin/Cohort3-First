"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delayFunction = (fn) => {
    setTimeout(fn, 1000);
};
delayFunction(() => {
    console.log(`Hello`);
});
//# sourceMappingURL=setTimeOut.js.map