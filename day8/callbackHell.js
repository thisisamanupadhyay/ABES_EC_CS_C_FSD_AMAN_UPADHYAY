const orderCoffee = () => {
    setTimeout (() => {
        console.log("Make some order");
        setTimeout (() => {
            console.log("Start the machine");
            setTimeout (() => {
                console.log("Grinding the beans");
                setTimeout (() => {
                    console.log("Boiling the water");
                    setTimeout (() => {
                        console.log("Mixing the coffee");
                        setTimeout (() => {
                            console.log("Pouring in the cup");
                            setTimeout (() => {
                                console.log("Adding sugar and milk");
                                setTimeout (() => {
                                    console.log("Coffee is ready!");
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 4000)
}

orderCoffee();