const calcAverage = (scores) => (scores[0] + scores[1] + scores[2]) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        document.writeln(`Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})<br>`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        document.writeln(`Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})<br>`);
    } else {
        document.writeln("No team wins.<br>");
    }
}

const dolphinsScores1 = [44, 23, 71];
const koalasScores1 = [65, 54, 49];

const dolphinsScores2 = [85, 54, 41];
const koalasScores2 = [23, 34, 27];

const avgDolphins1 = calcAverage(dolphinsScores1);
const avgKoalas1 = calcAverage(koalasScores1);
const avgDolphins2 = calcAverage(dolphinsScores2);
const avgKoalas2 = calcAverage(koalasScores2);

document.writeln("<h1>Gymnastics Team Results</h1>");
document.writeln("<h2>Test Data 1:</h2>");
checkWinner(avgDolphins1, avgKoalas1);

document.writeln("<h2>Test Data 2:</h2>");
checkWinner(avgDolphins2, avgKoalas2);
