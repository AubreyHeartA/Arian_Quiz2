

function compute(){
    let operator = document.getElementById("operator").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = Number(num1);
    num2 = Number(num2);

    let answer = document.getElementById("answer");

    switch(operator){
        case '+':
            answer.innerHTML = num1 + num2;
            break;
        case '-':
            answer.innerHTML = num1 - num2;
            break;
        case '*':
            answer.innerHTML = num1 * num2;
            break;
        case '/':
            answer.innerHTML = num1 / num2;
            break;
        default:
            innerHeight.HTML = "Invalid Input"
    }
    
}