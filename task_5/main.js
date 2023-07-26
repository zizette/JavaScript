
const zarray_num = [55, 11, 222, 333, 666, 999, 800, 945, 961, 52];
conteur = 0;
let znumb = 0;
let zrest = 0;
for (conteur; conteur <= zarray_num.length; conteur++) {
    znumb = zarray_num[conteur];
    // alert(zarray_num[conteur]);
    console.log(zarray_num[conteur]);
    zrest = znumb % 2;
    if (zrest == 0) {
        // alert("even", znumb);
        console.log("Here is an Even number : ", conteur, "  ", zarray_num[conteur]);
    }
    else { console.log("Here is an Odd number : ", zarray_num[conteur]); }
}