const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

function calculateAverage(scores) {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
}

function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);

    document.writeln(`<h3>Dolphins' average score: ${dolphinsAverage.toFixed(2)}</h3>`);
    document.writeln(`<h3>Koalas' average score: ${koalasAverage.toFixed(2)}</h3>`);

    if (dolphinsAverage >= 100 || koalasAverage >= 100) {
        if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
            document.writeln("<h2>Dolphins win the trophy!</h2>");
        } else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
            document.writeln("<h2>Koalas win the trophy!</h2>");
        } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100) {
            document.writeln("<h2>It's a draw! Both teams score at least 100.</h2>");
        } else {
            document.writeln("<h2>No team wins the trophy.</h2>");
        }
    } else {
        document.writeln("<h2>No team wins the trophy. Both teams scored less than 100.</h2>");
    }
}

document.writeln("<h1>=== Test Data 1 ===</h1>");
determineWinner(dolphinsScores1, koalasScores1);

document.writeln("<h1>=== Bonus Test Data 1 ===</h1>");
determineWinner(dolphinsScoresBonus1, koalasScoresBonus1);

document.writeln("<h1>=== Bonus Test Data 2 ===</h1>");
determineWinner(dolphinsScoresBonus2, koalasScoresBonus2);
