let firstNum;
let secondNum;
let resultElement = document.getElementById('result')


function add(){
    let firstNum = document.getElementById("first-num").value;
    let secondNum = document.getElementById('second-num').value;
    let result = Number(firstNum) + Number (secondNum)
    resultElement.innerHTML = `Result is : ${result}`
}

function sub(){
    let firstNum = document.getElementById("first-num").value;
    let secondNum = document.getElementById('second-num').value;
    let result = Number(firstNum) - Number (secondNum)
    resultElement.innerHTML = `Result is : ${result}`
}

function mul(){
    let firstNum = document.getElementById("first-num").value;
    let secondNum = document.getElementById('second-num').value;
    let result = Number(firstNum) * Number (secondNum)
    resultElement.innerHTML = `Result is : ${result}`
}

function div(){
    let firstNum = document.getElementById("first-num").value;
    let secondNum = document.getElementById('second-num').value;
    let result = Number(firstNum) / Number (secondNum)
    resultElement.innerHTML = `Result is : ${result}`
}