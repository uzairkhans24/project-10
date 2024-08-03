#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(username, score) {
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function () {
    return this.score++;
};
createUser.prototype.printMe = function () {
    return `price is ${this.score}`;
};
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);
console.log(chai.printMe());
console.log(tea.increment());
class my {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logValue() {
        return this.name + this.age;
    }
}
let user1 = new my("Ammar", 19);
console.log(user1.logValue());
if (!Array.prototype.customForEachOne) {
    Array.prototype.customForEachOne = function (callBack) {
        for (let i = 0; i < this.length; i++) {
            callBack(this[i], i, this);
        }
    };
}
let arr = [1, 2, 3, 4, 5];
arr.customForEachOne((curr, i, arr) => {
    console.log(curr);
});
class person {
    constructor(name) {
        this.name = name;
    }
    showPersonName() {
        return this.name.toUpperCase();
    }
}
class student extends person {
    constructor(name, age, grade) {
        super(name);
        this.age = age;
        this.grade = grade;
    }
    showStudent() {
        return this.name.toUpperCase() + this.age + this.grade;
    }
}
let stu1 = new student("Ammar", 18, 10);
console.log(stu1.showStudent());
let str = "*";
for (let i = 0; i < 5; i++) {
    console.log(str.repeat(i));
}
