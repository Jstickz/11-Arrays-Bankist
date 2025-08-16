"use strict";

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogsAge = function (dogsJulia, dogsKate) {
//   const newData = dogsJulia.slice();
//   newData.splice(0, 1);
//   newData.splice(-2);

//   console.log(newData);

//   const juliaAndKate = newData.concat(dogsKate);
//   console.log(juliaAndKate);

//   juliaAndKate.forEach(function (dogAge, i) {
//     dogAge >= 3
//       ? console.log(
//           `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
//         )
//       : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//   });
// };

// checkDogsAge([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogsAge([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (dogAges) {
//   const dogHumanAge = dogAges.map(age => (age <= 2 ? age * 2 : 16 + age * 4));

//   const ageFilter = dogHumanAge.filter(age => age >= 18);

//   const totalAge = ageFilter.reduce((acc, age) => acc + age, 0);

//   const averageDogAge = Math.trunc(totalAge / ageFilter.length);

//   return `Average Human Age: ${averageDogAge}`;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge2 = dogAges => {
//   const average = dogAges
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

//   return average;
// };

// console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

// const breeds = [
//   {
//     breed: 'German Shepherd',
//     averageWeight: 32,
//     activities: ['fetch', 'swimming'],
//   },
//   {
//     breed: 'Dalmatian',
//     averageWeight: 24,
//     activities: ['running', 'fetch', 'agility'],
//   },
//   {
//     breed: 'Labrador',
//     averageWeight: 28,
//     activities: ['swimming', 'fetch'],
//   },
//   {
//     breed: 'Beagle',
//     averageWeight: 12,
//     activities: ['digging', 'fetch'],
//   },
//   {
//     breed: 'Husky',
//     averageWeight: 26,
//     activities: ['running', 'agility', 'swimming'],
//   },
//   {
//     breed: 'Bulldog',
//     averageWeight: 36,
//     activities: ['sleeping'],
//   },
//   {
//     breed: 'Poodle',
//     averageWeight: 18,
//     activities: ['agility', 'fetch'],
//   },
// ];

// // 1. Huskey Average weight
// const huskyWeight = breeds.find(dog => dog.breed === 'Husky').averageWeight;
// console.log(huskyWeight);

// // 2. Dog with both activities
// const dogBothActivities = breeds.find(
//   dog => dog.activities.includes('running') && dog.activities.includes('fetch')
// ).breed;
// console.log(dogBothActivities);

// // 3. Create an array "allActivities" of all the activities of all the dog breeds
// const allActivities = breeds.flatMap(dog => dog.activities);
// console.log(allActivities);

// // 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
// const uniqueActivities = [...new Set(allActivities)];
// console.log(uniqueActivities);

// // 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
// const swimmingAdjacent = [
//   ...new Set(
//     breeds
//       .filter(breed => breed.activities.includes('swimming'))
//       .flatMap(breed => breed.activities)
//   ),
// ].filter(act => act !== 'swimming');

// console.log(swimmingAdjacent);

// // let swimmingAdjacent = [];

// // const breedWithSwimming = breeds.forEach(
// //   breed =>
// //     breed.activities.includes('swimming') &&
// //     swimmingAdjacent.push(breed.activities)
// // );

// // swimmingAdjacent = [...new Set(swimmingAdjacent.flat())].filter(
// //   act => act !== 'swimming'
// // );
// // console.log(swimmingAdjacent);

// // 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
// const haveAverageWeight = breeds.every(breed => breed.averageWeight >= 10);
// console.log(haveAverageWeight);

// // 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".
// const isActive = breeds.some(breed => breed.activities.length >= 3);
// console.log(isActive);

// // BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

// const breedFetch = Math.max(
//   ...breeds
//     .filter(breed => breed.activities.includes('fetch'))
//     .map(breed => breed.averageWeight)
// );
// console.log(breedFetch);

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they want to figure out if the dogs in their environment are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.


TEST DATA:

GOOD LUCK 😀

*/

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
//   { weight: 18, curFood: 244, owners: ["Joe"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// // const recommendedFood = weight ** 0.75 * 28

// // 1.
// const recommendedFoodPortion = dogs.forEach((dog) => {
//   const recommendedFood = dog.weight ** 0.75 * 28;
//   dog.recFoodPortion = Math.floor(recommendedFood);
// });
// console.log(dogs);

// // 2.
// const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
// console.log(
//   `Sarah's dog eats too ${
//     sarahsDog.curFood > sarahsDog.recFoodPortion ? "much!" : "little"
//   }`
// );

// // 3.
// const ownersTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recFoodPortion)
//   .flatMap((dog) => dog.owners);
// console.log(ownersTooMuch);

// const ownersTooLittle = dogs
//   .filter((dog) => dog.curFood < dog.recFoodPortion)
//   .flatMap((dog) => dog.owners);
// console.log(ownersTooLittle);

// //4.
// console.log(`${ownersTooMuch.join(" and ")}'s dog eat too much!`);

// console.log(`${ownersTooLittle.join(" and ")}'s dog eat too little!`);

// // 5.
// console.log(dogs.some((dog) => dog.curFood === dog.recFoodPortion));

// // 6.
// const isOkayamountOfFood = dogs.every(
//   (dog) =>
//     dog.curFood > dog.recFoodPortion * 0.9 &&
//     dog.curFood < dog.recFoodPortion * 1.1
// );
// console.log(isOkayamountOfFood);

// // 7.
// const okayAmount = dogs.filter(
//   (dog) =>
//     dog.curFood > dog.recFoodPortion * 0.9 &&
//     dog.curFood < dog.recFoodPortion * 1.1
// );
// console.log(okayAmount);

// // 8.
// const exactToomuchToolittle = Object.groupBy(dogs, (dog) => {
//   if (dog.curFood > dog.recFoodPortion) return "Too Much";
//   if (
//     dog.curFood > dog.recFoodPortion * 0.9 &&
//     dog.curFood < dog.recFoodPortion * 1.1
//   )
//     return "Exact";
//   if (dog.curFood < dog.recFoodPortion) return "Too Little";
// });

// console.log(exactToomuchToolittle);

// // 9.
// const groupByOwners = Object.groupBy(
//   dogs,
//   (dog) => `${dog.owners.length}-owners`
// );
// console.log(groupByOwners);

// //. 10

// const sortByRecFood = dogs
//   .map((dog) => dog.recFoodPortion)
//   .toSorted((a, b) => a - b);
// console.log(sortByRecFood);
