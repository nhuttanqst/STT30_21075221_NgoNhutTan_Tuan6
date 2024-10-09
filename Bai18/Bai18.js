const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] }
];

dogs.forEach((dog) => {
    dog.recommendedFood = dog.weight * 0.75 * 28;
});

const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
    `Sarah's dog is eating ${
        sarahsDog.curFood > sarahsDog.recommendedFood ? "too much" : "too little"
    }`
);

const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recommendedFood)
    .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recommendedFood)
    .flatMap((dog) => dog.owners);

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood)); // some returns true/false if at least one element matches the condition

const isEatingOkay = (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(isEatingOkay));

const dogsEatingOkay = dogs.filter(isEatingOkay); // returns array of dogs meeting the condition
console.log(dogsEatingOkay);

const dogsSorted = dogs
    .slice() // creates a copy of the array
    .sort((a, b) => a.recommendedFood - b.recommendedFood); // sort based on recommended food amount
console.log(dogsSorted);
