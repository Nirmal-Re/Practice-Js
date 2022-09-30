// 'use strict';

// printFirstName; /// THIS WILL THROW AN ERROr BECAUSE it a function expression
// WHERE IT WAS A function declaration this wouldn't have been a problem

const printFirstName = function () {
  console.log(`My name is Nirmal`);
};

printFirstName();

const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

greet('Hey')(`Nirmal`);
