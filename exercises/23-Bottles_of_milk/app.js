// Your code here:

let str1 = " bottles of milk on the wall, ";
let str2 = " bottles of milk.";
let str3 = " Take one down and pass it around, ";
let str4 = " bottle of milk on the wall, ";
let str5 = " bottle of milk.";
let str6 = "no more bottles of milk on the wall.";
let str7 = " bottles of milk on the wall.";
let str8 = " bottle of milk on the wall.";
for (let i = 99; i >= 0; i--) {
    if (i === 2) {
        console.log(i + str1 + i + str2 + str3 + (i - 1) + str8);
    } else if (i === 1) {
        console.log(i + str4 + i + str5 + str3 + str6);
    } else if (i === 0) {
        console.log(
            "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall."
        );
    } else {
        console.log(i + str1 + i + str2 + str3 + (i - 1) + str7);
    }
}
