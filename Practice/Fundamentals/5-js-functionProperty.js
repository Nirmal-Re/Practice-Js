'use strict'


const person = {
    firstName:'Nirmal',
    lastName: 'Bhandari',
    birthYear: 2001,
    hasDriversLicense: true,
    age: function() {
        return 2022-this.birthYear;
    }
}

console.log(person.age())


console.log(`My name is ${person.firstName} ${person.lastName} 
and I have ${person.age() >= 18 ? " ": 'not'} got a driver's licences`)


//playing with functions a bit


const function1 = (hello)=> {
    console.log(this.hello)

}