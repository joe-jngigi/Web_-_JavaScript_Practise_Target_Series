const prompt = require("prompt-sync")();

// Synchronus JS
console.log('This is test to run on node');
console.log('and this This will test nodemon.');
console.log('The tests are already done,');
console.log('now we run the code as a sychronus JS file.');
console.log('This will print each on a single line');
console.log('');
console.log('');

// Assynchronus JS
console.log('This is test to run Assynchronus');
setTimeout(() => {
    console.log('');
    console.log('');
    console.log('');
    console.log('now we run the code as a assychronus JS file.');
    console.log('This has run this pice of code after 3 seconds (3000 milliseconds)');

    console.log('');
    console.log('');
    console.log('');
}, 3000);
console.log('This will print each on a single line');

// JS setTimeout => a building function of JS
//it is a function that sets a timer which executes a function or specified piece of code once the timer expires.

// CALLBACKS
// This is calling a function inside another function
//  => Callback is a function passed as an argument to another function.

function calledFunction(name){
    const greetings = `Hello ${name}`
    console.log(greetings);
}

const callingFunction = (Callback) => {
    const name = prompt('Enter your name:')
    calledFunction(name)
}
// In this, it will call the calling function that asks for a prompt, and then it will call the called function again,
// which will inturn allow to use the parameter name in this second function. Now to apply for a callback function,
// you call the main calling function so that it can call the second function.
callingFunction(calledFunction)