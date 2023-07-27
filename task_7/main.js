for (let i = 1; i < 21; i++) {
    rest = i % 3;
    rest1 = i % 5;
    rest3 = i % 15;
    if (rest3 == 0) { console.log(i + "Divi 3&5"); }

    else if ((rest1 == 0) | (rest == 0)) {
        if (rest == 0) { console.log(i + "Divi 3"); }
        else { console.log(i + "Divi 5"); }

    }
    else { console.log(i + "Neither divisible by 3 or 5"); }
}