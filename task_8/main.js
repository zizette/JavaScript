let rndm = Math.floor(Math.random() * 10);
console.log(rndm);
i = 0
while (rndm <= 8) {
    i = i + 1;
    console.log(rndm, "ith generation test with while random", i);
    rndm = Math.floor(Math.random() * 10);
    console.log(rndm);
}
i = 0;
// test do .... while
do {
    ++i;
    rndm = Math.floor(Math.random() * 10);
    console.log(rndm, 'Random number ith : ', i);
} while (rndm <= 8);