function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);
}

const bills = [125, 555, 44];

const tips = bills.map(calcTip);

const totals = bills.map((bill, index) => bill + tips[index]);

document.writeln("<h1>Tip Calculator Results</h1>");
document.writeln("<h2>Bills, Tips, and Totals:</h2>");
for (let i = 0; i < bills.length; i++) {
    document.writeln(`Bill: ${bills[i]}, Tip: ${tips[i]}, Total: ${totals[i]}<br>`);
}
