let x =parseFloat(prompt("Enter first number"));
let y =parseFloat(prompt("Enter second number"));
let input = prompt("Enter operator")
let sum = x + y;
let diff = x - y;
let multi = x * y;
let div = x / y;
if(input === "+"){
    alert("The result is " +sum);
}else if(input === "-"){
    alert("The result is " +diff);
}else if(input === "*"){
    alert("The result is " +multi);
}else if(input === "/"){
    alert("The result is " +div);
}