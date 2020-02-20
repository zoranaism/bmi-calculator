const patients = require("./patients");

const age = parseInt(process.argv[2]);

const patientsOlderThan = patients.filter(
   (patient) => patient.age > age
);

if (patientsOlderThan.length < 1 || patientsOlderThan == undefined) {
   console.log("OUTPUT:", patientsOlderThan);
} else {
   console.log(`No results. Try again.`);
}

console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS OLDER THAN ${age}:`, patientsOlderThan.length);