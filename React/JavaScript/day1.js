// const hi = 'Hello World'
// message = 'Hello World'
// console.log(message)

// // TEMPLATE ITERAL

// const name = 'John'
// const age = 30
// console.log(`hi ${name} you are ${age}`)

// // ====================================
// console.log('====================================================================================');
// console.log("Redeclare using var");
// // Redeclare using var

// var myName = 'John'; // Global scope
// function myVarFunction() {
//     var myName = 'Jane'; // Function scope, shadows the global variable
//     console.log(myName); // Outputs: Jane
//     if (true) {
//         var myName = 'Mark'; // Same function scope, overwrites 'Jane'
//         console.log(myName); // Outputs: Mark
//     }
//     console.log(myName); // Outputs: Mark (value persists after the block)
// }
// myVarFunction();
// console.log(myName); // Outputs: John (global variable remains unchanged)

// console.log('====================================================================================');
// console.log("Redeclare using const");
// // Redeclare using const

// const myConst = 'John'; // Global scope
// function myConstFunction() {
//     const myConst = 'Jane'; // Block scope within the function
//     console.log(myConst); // Outputs: Jane
//     if (true) {
//         const myConst = 'Mark'; // Block scope within the 'if'
//         console.log(myConst); // Outputs: Mark
//     }
//     console.log(myConst); // Outputs: Jane (unchanged outside the 'if' block)
// }
// myConstFunction();
// console.log(myConst); // Outputs: John (global constant remains unchanged)

// console.log('====================================================================================');
// console.log("Redeclare using let");
// // Redeclare using let

// let myLet = 'John'; // Global scope
// function myLetFunction() {
//     let myLet = 'Jane'; // Block scope within the function
//     console.log(myLet); // Outputs: Jane
//     if (true) {
//         let myInnerLet = 'Mark'; // Block scope within the 'if'
//         console.log(myInnerLet); // Outputs: Mark
//     }
//     console.log(myLet); // Outputs: Jane (unchanged outside the 'if' block)
// }
// myLetFunction();
// console.log(myLet); // Outputs: John (global variable remains unchanged)
// // =======================================

// const arr = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
// ];

// console.log(arr);
// // Output: [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' } ]p
sum=0
arr=[1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i < 10; i++)
sum+=arr[i]

console.log(sum)

let a=[12,4,"sai",23.4]
console.log(a)
console.log("b4 del",a.length)
res=delete a[1]
console.log(a)

console.log("after del",a.length)

for(let i=0;i<a.length;i++)
console.log(a[i])

let person={
    roll:12,
    name:"sai",
    city:'ceb',
    state:'tn'
} 


console.log(person)
for(let key in person)
console.log(key ," : ",person[key])