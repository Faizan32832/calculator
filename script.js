
/* ======== MY CALCULATOR ======== */
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function askForNumbers() {
    firstnumber = parseInt(prompt(`Please Enter Your First Number`));
    secondnumber = parseInt(prompt(`Please Enter Your Second Number`));
    return [firstnumber, secondnumber]
}
flag = true;

while (flag) {
    let q = prompt(`Hello There! \n Please enter "A" for addition \n Please enter "S" for subtriction \n Please enter "M" for multiplication \n Please enter "D" for divide \n For exit press "E"`)
    switch (q.toUpperCase()) {
        case 'A':
            let addnumbers = askForNumbers();
            let addresult = add(addnumbers[0], addnumbers[1]);
            alert(addresult);
            break;
        case 'S':
            let subtractnumbers = askForNumbers();
            let subtractresult = subtract(subtractnumbers[0], subtractnumbers[1]);
            alert(subtractresult);
            break;
        case 'M':
            let multiplynumbers = askForNumbers();
            let multiplyresult = multiply(multiplynumbers[0], multiplynumbers[1]);
            alert(multiplyresult);
            break;
        case 'D':
            let dividenumbers = askForNumbers();
            let divideresult = divide(dividenumbers[0], dividenumbers[1]);
            alert(divideresult);
            break;
        case 'E':
            flag = false;
            break;
        default:
            alert('Invalid input');
            break;
    }
}