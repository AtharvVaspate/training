"use strict";
console.log("hello");
let age277 = 22;
console.log(age277);
if (age277 > 20) {
    age277 += 20;
}
console.log(age277);
let sales = 99;
let name12 = "atharv";
let sales2 = 55;
console.log(sales + " " + name12 + " " + sales2);
let sales4;
sales4 = 9;
sales4 = "rahul";
let name4;
let numbers = [21, 32, 'o'];
let numbers2 = [231, 43, 'ds', true];
let numbers8 = [12, 43, 13];
let numbers9 = ['atharv', 22];
console.log(numbers9[0]);
let abc = "a";
console.log(abc);
function tax(income, interest) {
    if (income < 100 && interest < 100) {
        return 1;
    }
    return 0;
}
console.log(tax(991, 991));
let obj = {
    name: "atharv",
    age: 99
};
console.log(obj.name + " " + obj.age);
obj.name = "rahul";
obj.age = 123;
console.log(obj.name + " " + obj.age);
let obj9 = {
    name: "abcd",
    age1: 213
};
console.log(obj9.name);
let emplo = {
    name: "abcd",
    age: 77,
    display: (date) => { return date; }
};
let empl1 = {
    name: "efgh",
    age: 99,
    display: (date) => { return date; },
};
console.log(emplo.age);
console.log(emplo.display(123));
console.log(empl1.age);
console.log(empl1.display(789));
function weight123(weight1) {
    if (typeof (weight1) === 'number') {
        return weight1 * 20;
    }
    else {
        return parseInt(weight1) * 20;
    }
}
console.log(weight123(100));
console.log(weight123('666'));
let c = {
    AA: () => { },
    BB: () => { }
};
let num1;
let num2;
let abcdef = "inch";
function greet(name) {
    if (name) {
        console.log(name);
    }
}
greet("atharv");
let zz = {
    name: "atharv",
    age: 131231,
    email: "a@a.com",
    role: "admin",
    start: () => {
        return "started";
    },
    end: (fname) => {
        return "inside end" + fname;
    }
};
console.log(zz);
console.log(zz.end("abcd"));
function add(int1 = 3, int2 = 4) {
    console.log(int1 + int2);
}
add();
let var1 = "atharv";
console.log(var1);
function add2(firstnum, secondnum) {
    return firstnum + secondnum;
}
console.log(add2(10, 20));
console.log(add2(2.4, 3.5));
console.log(add2(-3, -4));
console.log(add2(-2, 10));
//# sourceMappingURL=prac.js.map