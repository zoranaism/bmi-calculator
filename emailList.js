const patients = require("./patients");

const emailAdresses = patients.map(
   (patient) => patient.email 
);

console.log(emailAdresses);


