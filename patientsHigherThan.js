const patients = require("./patients");
const height = parseInt(process.argv[2]);

const patientsHigherThan = patients.filter(
   (patient) => height < patient.height * 100
);

if (patientsHigherThan.length < 1 || patientsHigherThan == undefined) {
   console.log(`No results. Try again.`);
} else {
   console.log("OUTPUT:", patientsHigherThan);
}

console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS HIGHER THAN ${height}cm:`, patientsHigherThan.length);