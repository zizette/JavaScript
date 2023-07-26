const numbers = [55, 11, 222, 333, 666, 999, 800, 945, 961, 52];
conteur = 0;
let znumb = 0;
let zrest = 0;
for (conteur; conteur < numbers.length; conteur++) {
    znumb = numbers[conteur];
    console.log(numbers[conteur]);
    zrest = znumb % 2;
    if (zrest == 0) {

        console.log("Here is an Even number : ", conteur, "  ", numbers[conteur]);
    }
    else { console.log("Here is an Odd number : ", numbers[conteur]); }
}