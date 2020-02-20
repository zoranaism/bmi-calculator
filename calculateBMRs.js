const patients = require("./patients");

function calculateBMR(user) {
   console.log('user test:', user)
   const { weight, height, age, gender, gender: x } = user;
   // const weight = user.weight
   // const height = user.height
   console.log('x test:', x)
   const heightInCm = height * 100;
   
   
   const genderCalculator = gender === "m" 
   ? 10 * weight + 6.25 * heightInCm - 5 * age + 50 
   : 10 * weight + 6.25 * heightInCm - 5 * age - 150;

   return genderCalculator;
}

const bmrs = patients.map((patient) => calculateBMR(patient));
 
console.log(bmrs);



