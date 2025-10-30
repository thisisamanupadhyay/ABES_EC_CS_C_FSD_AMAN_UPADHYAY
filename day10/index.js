// ReactDOM.createRoot(document.getElementById("root")).render(
        //     React.createElement("div", {}, "Hello React Learners(React)")
        // );
{/* <div id="outer">
    <div id="inner1">
        <div id="span-container">
            <span>
                span 1
            </span>
            <span>
                span 2
            </span>
        </div>
    </div>
    <div id="inner2">
        <div id="span-container">
            <span>
                span 1
            </span>
            <span>
                span 2
            </span>
        </div>
    </div>
    <div id="inner3">
        <div id="span-container">
            <span>
                span 1
            </span>
            <span>
                span 2
            </span>
        </div>
    </div>
</div> */}


// const reactElement= React.createElement("div",{id:"outer"},
//     [React.createElement("div",{id:"inner1"},
//         React.createElement("div",{id:"span-container"},
//             [React.createElement("span",{}, "span 1"),
//                React.createElement("span",{}, "span 2")
//             ] 
//         )
//     ),
//     React.createElement("div",{id:"inner2"},
//         React.createElement("div",{id:"span-container"},
//             [React.createElement("span",{}, "span 1"),
//                React.createElement("span",{}, "span 2")
//             ] 
//         )
//     ),
//     React.createElement("div",{id:"inner3"},
//         React.createElement("div",{id:"span-container"},
//             [React.createElement("span",{}, "span 1"),
//                React.createElement("span",{}, "span 2")
//             ] 
//         )
//     )]
// );
const span1Content= "span-1";
const reactElement2= <div>Header</div>;
console.log(typeof reactElement2);
// const divStyle= {
//     backgroundColor: "lightblue",
//     border: "2px solid black",
// };
const reactElement=<div id="outer" style={{backgroundColor: "lightblue", border: "2px solid black"}}>
    {reactElement2}
    <div id="inner1">
        <div id="span-container">
            <span className="span-1">
                {span1Content}
            </span>
            <span className="span-1">
                span 2
            </span>
        </div>
    </div>
    <div id="inner2">
        <div id="span-container">
            <span>
                span 1
            </span>
            <span>
                span 2
            </span>
        </div>
    </div>
    <div id="inner3">
        <div id="span-container">
            <span>
                span 1
            </span>
            <span>
                span 2
            </span>
        </div>
    </div>
</div>
const root= ReactDOM.createRoot(document.getElementById("root"));
//const divElement= React.createElement("div", {}, "Hello React Learners(React)");
root.render(reactElement);