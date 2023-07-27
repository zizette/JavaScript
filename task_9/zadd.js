function my_add(x, y) {
    const c = x + y;
    return c;
}
function my_substract(x, y) {
    return (x - y);
}
function my_multiply(x, y) {
    return (x * y);
}
function my_divide(x, y) {
    if (y == 0) { return "Impossible division by zero"; }
    else { return (x / y); }
}
console.log(my_add(23, 60));
console.log(my_divide(30, 3))
console.log(my_substract(23, 60));
console.log(my_multiply(23, 60));

function my_calculator(sign, x, y) {
    switch (sign) {
        case "+": return (my_add(x, y));
            break;
        case "-": return (my_substract(x, y));
            break;
        case "*": return (my_multiply(x, y));
            break;
        case "/": return (my_divide(x, y));
            break;
        default:
            console.log("no such operator");
            break;

    }

}

// test mycalculator funct

console.log("My substraction", my_calculator("-", 30, 40));
console.log("my Addition func: ", my_calculator("+", 30, 40));
console.log("my Multiplication func: ", my_calculator("*", 30, 40));
console.log("my Division func: ", my_calculator("/", 400, 40));