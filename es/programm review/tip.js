const bill=401
var tip = bill <= 400 && 100<=bill ? bill * 0.20 : bill*0.25;
console.log(`the bill was ${bill} , the tip was ${tip},and total value was ${bill+tip}`);