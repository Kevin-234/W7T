// 
const greet = function(callback) {
    const name = 'Akari';

    callBack(name);
}

const casual = function(name) {
  console.log('Hi ${name}!')
}

const formal = function(name) {
  console.log('Hello, Mr. ${name}.')
}

greet(casual);

greet(formal);

greet(function(name) {
  console.log(`This is my on-the-fly greeting. Doesn't even have a variable name (btw, ${name} was here)`);
});


function init call back
function one() {
  console.log('one');
  two();
}

function two() {
  console.log('two');
  one();
}

one();
function hack() {
  console.log('hacking in progress...');
  confirmHack();
}

function confirmHack() {
  console.log("I'm in");
  hack();
}

hack();

