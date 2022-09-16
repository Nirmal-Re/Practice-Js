
const bill = 530

console.log(bill)
const tip = (bill > 50 & bill < 250) ? (bill*15)/100 :  (bill*20)/100

console.log(`Total bill : ${bill + tip}`)
