const patients = require("./patients");
const weight = parseInt(process.argv[2]);

const patientsWeighingLessThan = patients.filter(
   (patient) => weight > patient.weight
);

if (patientsWeighingLessThan.length < 1 || patientsWeighingLessThan == undefined) {
   console.log(`No results. Try again.`);
} else {
   console.log("OUTPUT:", patientsWeighingLessThan);
}

console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS WEIGHING LESS THAN ${weight}:`, patientsWeighingLessThan.length);