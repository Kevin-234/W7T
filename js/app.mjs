function fizzBuzz() {
  for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
    // If i is divisible by both 3 and 5, log "FizzBuzz" 
      console.log('Fizz Buzz');
    } else if (i % 5 === 0){
    // If i is divisible by 5, log "Buzz"
      console.log('buzz');
    } else if (i % 3 === 0);
    // If i is divisible by both 3, log "Fizz"
    console.log('fizz');
  } else {
    // Otherwise, print the number
    console.log(i); 
  }
}



console.log('===');
console.log('solution 2');
console.log('===');

// option 2
let result;
for (let i =1; i <= 100; i++) {
  result = '';

  if (i % 3 === 0){
    result = "Fizz";
  }

  if (i % 5 === 0) {
    // =. is result + whatever already in there?
    result =. 'Buzz';
  }

  if (!result) {
    result = i;
  }

  console.log(result);
}

// patrick code
for (let i = 1; i <= 100; i++) {
  if(Number.isInteger(i/3) && Number.isInteger(i/5)) {
console.log('FizzBuzz');
  }else if(Number.isInteger(i/5)){
      console.log('Buzz');
  }else if(Number.isInteger(i/3)){
              console.log('Fizz');
      }else {
              console.log(i);
      }
}
