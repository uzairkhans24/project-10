#!/usr/bin/env node
import data from './data.json' assert { type: 'json' };
function createUser(this: any, username: string, score: number) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    return this.score++
}
createUser.prototype.printMe = function () {
    return `price is ${this.score}`
}

const chai = new (createUser as any)("chai", 25)
const tea = new (createUser as any)("tea", 250)

console.log(chai.printMe())
console.log(tea.increment())




class my {
    name: string
    age:number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    logValue() {
        return this.name + this.age
    }
}

let user1 = new my("Ammar", 19)
console.log(user1.logValue())

declare global {
    interface Array<T> {
        customForEachOne(callBack: (curr: T, index: T, arr: T) => void): void
    }
}

if (!Array.prototype.customForEachOne) {
    Array.prototype.customForEachOne = function <T>(callBack: (curr: any, index: number, arr: any[]) => void): void {
        for (let i: number = 0; i < this.length; i++) {
            callBack(this[i], i, this)
        }
    }
}

let arr = [1, 2, 3, 4, 5]
arr.customForEachOne((curr, i, arr) => {
    console.log(curr)
})


class person {
    name:string
    constructor(name: string) {
        this.name = name
    }
    showPersonName() {
       return this.name.toUpperCase()
    }
}

class student extends person {
    age: number
    grade: number
    constructor(name:string, age: number, grade: number) {
        super(name)
        this.age = age
        this.grade = grade
    }
    showStudent() {
        return this.name.toUpperCase() + this.age + this.grade
    }
}

let stu1 = new student("Ammar", 18, 10)
console.log(stu1.showStudent())


let str = "*"
for (let i = 0; i < 5; i++){
    console.log(str.repeat(i))
}