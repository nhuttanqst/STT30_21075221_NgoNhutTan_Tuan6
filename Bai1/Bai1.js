const markMass1 = 78;
const markHeight1 = 1.69; 
const johnMass1 = 92; 
const johnHeight1 = 1.95; 

const markMass2 = 95; 
const markHeight2 = 1.88; 
const johnMass2 = 85; 
const johnHeight2 = 1.76; 

function calculateBMI(mass, height) {
    return mass / (height * height);
}

const markBMI1 = calculateBMI(markMass1, markHeight1);
const johnBMI1 = calculateBMI(johnMass1, johnHeight1);

const markBMI2 = calculateBMI(markMass2, markHeight2);
const johnBMI2 = calculateBMI(johnMass2, johnHeight2);

const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;

document.writeln("<h2>Test Data 1:</h2>");
document.writeln("Mark's BMI: " + markBMI1.toFixed(2) + ", John's BMI: " + johnBMI1.toFixed(2) + "<br>");
document.writeln("Does Mark have a higher BMI than John? " + markHigherBMI1 + "<br><br>");

document.writeln("<h2>Test Data 2:</h2>");
document.writeln("Mark's BMI: " + markBMI2.toFixed(2) + ", John's BMI: " + johnBMI2.toFixed(2) + "<br>");
document.writeln("Does Mark have a higher BMI than John? " + markHigherBMI2);