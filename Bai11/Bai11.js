const game = {
    team1: "Bayern Munich",
    team2: "Borussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski"
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze"
        ]
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const printGoal = () => {
    let len = game.scored.length;
    for (let index = 0; index < len; index++) {
        const element = game.scored[index];
        console.log(`Goal ${index + 1}: ${element}`);
    }
};

printGoal();

const odds = Object.values(game.odds);
const avgOdd = () => {
    let len = game.scored.length;
    let sum = 0;
    for (const odd of odds) {
        sum += odd;
    }
    return sum / len;
};

console.log(`Average odd : ${avgOdd()}`);
console.log(`Odd of victory of ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory of ${game.team2}: ${game.odds.team2}`);

const scorers = game.scored.reduce((acc, player) => {
    acc[player] = (acc[player] || 0) + 1; // acc["Lewandowski"] = 1.
    return acc;
}, {});

console.log(scorers);