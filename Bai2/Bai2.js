const markMass1 = 78; // kg
const markHeight1 = 1.69; // m
const johnMass1 = 92; // kg
const johnHeight1 = 1.95; // m

const markMass2 = 95; // kg
const markHeight2 = 1.88; // m
const johnMass2 = 85; // kg
const johnHeight2 = 1.76; // m

function calculateBMI(mass, height) {
    return mass / (height * height);
}

const markBMI1 = calculateBMI(markMass1, markHeight1);
const johnBMI1 = calculateBMI(johnMass1, johnHeight1);

const markBMI2 = calculateBMI(markMass2, markHeight2);
const johnBMI2 = calculateBMI(johnMass2, johnHeight2);

document.writeln("<h2>Test Data 1:</h2>");
if (markBMI1 > johnBMI1) {
    document.writeln(`Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!<br>`);
} else {
    document.writeln(`John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!<br>`);
}

document.writeln("<h2>Test Data 2:</h2>");
if (markBMI2 > johnBMI2) {
    document.writeln(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})!<br>`);
} else {
    document.writeln(`John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})!<br>`);
}
