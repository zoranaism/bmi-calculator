

// MAIN FUNCTION
function bmiCalculator() {
   validateNumberOfInputs(process.argv);

   // VARIABLES DISPLAYED
   let weightInKg = parseInt(process.argv[2]);
   let heightInM = parseFloat(process.argv[3]);
   let age = parseInt(process.argv[4]);
   let dailyExercise = process.argv[5];
   let gender = process.argv[6];
 
   validateWeightHeightAndAge(weightInKg, heightInM, age);
   validateDailyExercise(dailyExercise);
   validateGender(gender);
   validateAge(age);
   validateWeight(weightInKg);
 
   const BMI = calculateBMI(weightInKg, heightInM);
   const idealWeight = calculateIdealWeight(heightInM);
   const BMR = calculateBMR(weightInKg, heightInM, gender, age);
   const dailyCalories = calculateDailyCalories(BMR, dailyExercise);
   const weightToLoseKg = calculateweightToLoseKg(weightInKg, idealWeight);
   const dietWeeks = calculateDietWeeks(weightToLoseKg);
   const dietCalories = calculateDietCalories(weightToLoseKg, dailyCalories);
 

   const user = {
      weightInKg: weightInKg,
      heightInM: heightInM,
      age: age,
      dailyExercise: dailyExercise,
      gender: gender,
      BMI: BMI,
      idealWeight: idealWeight,
      dailyCalories: dailyCalories,
      weightToLoseKg: weightToLoseKg,
      dietWeeks: dietWeeks,
      dietCalories: dietCalories,
    };
  
    const output = formatOutput(user);
    console.log(output);
   
 }
 
 bmiCalculator();




// VALIDATING NUMBER OF INPUTS FUNCTION
function validateNumberOfInputs(arr) {
   if (arr.length !== 7) {
      console.log(`
         You gave ${arr.length - 2} arguments(s) to the program
      
         Please provide 5 arguments for
         
         weight (kg), 
         height (m), 
         age (years), 
         wether you exercise daily (yes or no)
         and your gender (m or f)
         
         Example:
      
         $ node index.js 82 1.79 32 yes m
      `);
      
      process.exit();      
      
   } 
}


// VALIDATING INPUT NUMBERS FUNCTION
function validateWeightHeightAndAge(weight, height, userAge) {

   if (isNaN(weight) || isNaN(height) || isNaN(userAge)) {
      console.log(`
      Please make sure weight, height and age are numbers:
      
      weight (kg) example: 82 | your input: ${weight}
      height (m) example 1.79 | your input: ${height}
      age (years) example 32  | your input: ${userAge} 
      
      Example:
      
      $ node index.js 82 1.79 32 yes m
      `);
      
      process.exit();
      
   }
}


// AGE VALIDATION FUNCTION
function validateAge(userAge) {
   if (userAge < 20) {
      console.log(`
      This BMI calculator is designed for people over 20. 
      
      You entered: ${userAge}
      `);
      
      process.exit();
   } 
}
 

// WEIGHT VALIDATION 
function validateWeight(weight) {
   if (weight < 30 || weight > 300) {
      console.log(`
         Please provide a number for weight in kilograms between 30 and 300.
         
         You entered: ${weight}
         
         Example:

         $ node index.js 82 1.79 32 yes m
      `);

      process.exit();
   } 
}


//  GENDER VALIDATION FUNCTION
function validateGender(maleOrFemale) {
   if (maleOrFemale !== "m" && maleOrFemale !== "f") {
      console.log(`
         Please specify your gender with "m" or "f"
         
         You entered: ${maleOrFemale}

         Example:

         $ node index.js 82 1.79 32 yes m
      `);
      
      process.exit();
   }
}


// DAILY EXERCISE VALIDATION FUNCTION
function validateDailyExercise(exerciseDaily) {
   if (exerciseDaily !== "yes" && exerciseDaily !== "no") {
      console.log(`
         Please specify if you exercise daily with "yes" or "no"
         
         You entered: ${exerciseDaily}

         Example:

         $ node index.js 82 1.79 32 yes m
      `);
      
      process.exit();
   }
}


// BMI CALCULATION FUNCTION
function calculateBMI (weight, height) {
   return weight / (height * height);
}


// IDEAL WEIGHT CALCULATION FUNCTION
function calculateIdealWeight(height) {
   return 22.5 * Math.pow( height, 2 );
}


// BMR CALCULATOR FUNCTION
function calculateBMR(userWeight, userHeight, userGender, userAge) {
   if (userGender === "m") {
      return 10 * userWeight + 6.25 * userHeight * 100 - 5 * userAge + 50;
   } else {
      return 10 * userWeight + 6.25 * userHeight * 100 - 5 * userAge + 150;
   }
}


// DAILY CALORIES CALCULATOR FUNCTION
function calculateDailyCalories(userBMR, userDailyExercise) {
   return userDailyExercise === "yes" ? userBMR * 1.6 : userBMR * 1.4;
}


// AMOUNT OF WEIGHT TO GAIN/LOSE CALCULATOR FUNCTION
function calculateweightToLoseKg(userWeight, userIdealWeight) {
  return userWeight - Math.round(userIdealWeight);
}


// DIET CALORIES CALCULATOR FUNCTION
function calculateDietCalories(weightToGainLose, userDailyCalories) {
   if (weightToGainLose < 0) {
      return userDailyCalories + 500;
   } else {
      return userDailyCalories - 500;
   }
}


// TIME TO LOSE WEIGHT CALCULATOR FUNCTION
function calculateDietWeeks(weightToGainLose) {
   let daysToDiet = Math.abs(weightToGainLose) / 0.5;

   return Math.ceil(daysToDiet / 7);
}


// OUTPUT
function formatOutput(userObject) {
   return `
   **************
   BMI CALCULATOR
   **************
   age: ${userObject.age}
   height: ${userObject.heightInM} m
   weight: ${userObject.weightInKg} kg
   exercise daily? ${userObject.dailyExercise}
   gender: ${userObject.gender}

   ****************
   FACING THE FACTS
   ****************

   Your BMI is ${Math.round(userObject.BMI)}

   A BMI under 18.5 is considered underweight
   A BMI above 25 is considered overweight

   Your ideal weight is ${Math.round(userObject.idealWeight)}kg
   With a normal lifestyle you burn ${Math.round(userObject.dailyCalories)} calories a day.

   **********
   DIET PLAN
   **********

   If you want to reach your ideal weight of ${Math.round(userObject.idealWeight)} kg:

   Eat ${Math.round(userObject.dietCalories)} calories a day 
   for ${Math.round(userObject.dietWeeks)} weeks.

   `;
}