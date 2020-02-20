const patients = require("./patients");
const id = parseInt(process.argv[2]);

// id === patient.id will already resolve to true or false
// so we don't need to use an if statement

const specificPatient = patients.find(function(patient) {
  return id === patient.id;
});

if (specificPatient !== undefined) {
   console.log("OUTPUT:", specificPatient);
 } else {
   console.log(`Patient with id: ${id}, not found`);
 }