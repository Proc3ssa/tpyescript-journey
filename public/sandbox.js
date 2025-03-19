"use strict";
let greet = (user, department) => {
    console.log(`User is ${user.name} and ID is ${user.uid} and is at department ${department}`);
};
greet({
    name: "faisal",
    uid: "898898"
}, "Computer Science");
let woman;
woman = (standard) => {
    console.log(`She is class ${standard.clss} so she is ${standard.grade}`);
};
