function calculateTip(bill) {
    const tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);
    const total = bill + tip;

    document.writeln(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}<br>`);
}

document.writeln("<h1>Tip Calculator Results</h1>");
calculateTip(275); 
calculateTip(40); 
calculateTip(430); 
