const patients = require("./patients");

// console.log(patients);

function calculateBMI(height, weight) {
  return Math.round(weight / (height * height));
}

const bmis = patients.map(
   (patient) => calculateBMI(patient.height, patient.weight)
);

console.log(bmis);