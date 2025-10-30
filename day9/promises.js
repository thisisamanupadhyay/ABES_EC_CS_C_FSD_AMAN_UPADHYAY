// const orderCoffee = () => {
//     setTimeout(() => {
//         console.log("Make some order.");
//         setTimeout(() => {
//             console.log("Brewing Coffee.");
//             setTimeout(() => {
//                 console.log("Serving Coffee.");
//                 setTimeout(() => {
//                     console.log("Thankyou for the visiting.");
//                 }, 1000)

//             }, 3000)

//         }, 2000)
//     },
//         4000)
// }
const waitFun = (time, message) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, time)
    })
}
const orderCoffee = async () => {
    await waitFun(4000, "Make some order.");
    await waitFun(2000, "Brewing Coffee.");
    await waitFun(3000, "Serving Coffee.");
    await waitFun(1000, "Thankyou for the visiting.");
}
// const orderCoffee = () => {
//     waitFun(4000, "Make some order.")
//         .then(() => waitFun(2000, "Brewing Coffee."))
//         .then(() => waitFun(3000, "Serving Coffee."))
//         .then(() => waitFun(1000, "Thankyou for the visiting."));
// }