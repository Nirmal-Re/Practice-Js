mconst juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const juliaData1 = [9, 16, 6, 8, 3];
const kateData1 = [10, 5, 6, 1, 4];

// Julia and Kate are doing a study on dogs. So each asked 5 different dogs owners
// about their dogs age and stored data on their individual array. For now they
// are only interested if dog is an adult (> 3) or is it a puppy (<3)

const checkDogs = (dogsJulia, dogsKate) => {
  const copyDogsJulia = dogsJulia.slice(0, dogsJulia.length);
  console.log(`Spliced: ${copyDogsJulia.splice(0, 1)}`);
  console.log(`Spliced: ${copyDogsJulia.splice(-2)}`);
  const total = copyDogsJulia.concat(dogsKate);
  total.forEach((age, index) => {
    console.log(
      age > 3 ? `Dog ${index + 1} is an adult` : `Dog ${index + 1} is an puppy`
    );
  });
};

checkDogs(juliaData, kateData);

/*
1.Calculate the dog age in human age
2.Exclude all the dogs that are more than 18 human year old.
3. Calculate average human dog age
*/

const test1 = [5, 2, 4, 1, 15, 8, 3];
const test2 = [16, 6, 10, 5, 6, 1, 4];

const calcDogHumanAge = dogsAge =>
  dogsAge
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(tAge => tAge >= 18);

const secondArray = calcDogHumanAge(test1);
console.log(
  secondArray.reduce((acc, age) => acc + age, 0) / secondArray.length
);
