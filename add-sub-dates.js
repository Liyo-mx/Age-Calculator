//how to add 2 days in todays date

let date= new Date();
console.log(date)
console.log(date.toLocaleDateString())
//add two days to the existing date
console.log(date.setDate(date.getDate()+2));
console.log(date.toLocaleDateString())

