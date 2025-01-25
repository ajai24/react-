// # destructure Object
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

let {name, age, city} = person;
console.log(name, age, city);

// # destructure Array**
const numbers = [1, 2, 3];
let [a, b, c] = numbers;
console.log(a, b, c);

// # destructure object 
let {name:n, age:ag, city:ci} = person;

console.log(n, ag, ci);

// # restoperator

let {name:nam, ...rest} = person;
console.log(nam, rest);

console.log(rest.city);

// # spread operator
let newPerson = {...person, sate: 'Jane'};
console.log(newPerson);


let ajay =[];
data = [1, 'sai', 3,4.5,2,5];
ajay.push(...data);
console.log(ajay);


// closures

function calculator(a, b) {
    function add() {
        return a + b;
    }

    function subtract() {
        return a - b;
    }

    return {
        add,
        subtract
    };
}

const calc = calculator(5, 3);
console.log(calc.add()); // 8
console.log(calc.subtract()); // 2

// Arrow function

let fn =(a,b)=>a+b
r = fn(10,20);
console.log("Arrow function",r);

// call back function

function greet(name, callback) {
    setTimeout(()=>console.log(`Hello, ${name}!`), 1000);   // Aynchronous
    callback();
}

function sayGoodbye() {
console.log('Goodbye!');
}

greet('John', sayGoodbye);

// Promise

const res = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const a = 'sai1'; 
            if (a==='sai') {
                resolve(a);
            } else {
                reject(new Error('no data'));
            }
        }, 1000);
    });
};

const handleData = async () => {
    try {
        const name = await res(); // Wait for the promise to resolve
        console.log('received', name); // Handle resolved value
    } catch (err) {
        console.log(err.stack); // Handle error stack
    } finally {
        console.log('received'); // Final message
    }
};

handleData(); // Call the async function
