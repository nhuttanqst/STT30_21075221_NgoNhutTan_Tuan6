const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

let resultMessage = "";
if (markBMI > johnBMI) {
    resultMessage = `${mark.fullName}'s BMI (${markBMI.toFixed(1)}) is higher than ${john.fullName}'s (${johnBMI.toFixed(1)})!`;
} else if (johnBMI > markBMI) {
    resultMessage = `${john.fullName}'s BMI (${johnBMI.toFixed(1)}) is higher than ${mark.fullName}'s (${markBMI.toFixed(1)})!`;
} else {
    resultMessage = `Both have the same BMI (${markBMI.toFixed(1)})!`;
}

console.log(resultMessage);

document.writeln("<h1>BMI Comparison Result</h1>");
document.writeln(`<p>${resultMessage}</p>`);
