console.log("start");

const waitForSomeTime = (ms) => {
    const start = Date.now();
    console.log(start);
    while (Date.now() - start < ms) {
        //do nothing
    }
}
const syncUsingTimer = () => {
    waitForSomeTime(4000);
    console.log("Wait has been completed");
}
const asyncUsingTimer = () => {
    setTimeout(() => {
        console.log("Wait has been completed");
    }, 4000);
}

console.log("start");
syncUsingTimer();
asyncUsingTimer();
console.log("end");