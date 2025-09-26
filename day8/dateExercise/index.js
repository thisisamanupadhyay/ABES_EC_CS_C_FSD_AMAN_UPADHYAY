const callbackFun = () => {
    const inputDob = document.getElementById("dob").value;
    const output = document.getElementById("output");

    const currentDate = new Date();
    const userDate = new Date(inputDob);

    const currentDateInYear = currentDate.getFullYear();
    const currentDateInMonth = currentDate.getMonth();

    const userDateInYear = userDate.getFullYear();
    const userDateInMonth = userDate.getMonth();

    let age = currentDateInYear - userDateInYear;
    let ageInmonths = currentDateInMonth - userDateInMonth;

    if (currentDateInMonth < userDateInMonth) age--;
    if (ageInmonths < 0) ageInmonths = 12 + ageInmonths;

    output.innerText = `Users age is  ${age} years and ${ageInmonths} Months`; 
    
}
const btn = document.getElementById("btn");
btn.addEventListener("click" , callbackFun);