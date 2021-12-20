

function costOfFencing(sides, numberOfFencingWire, costPerMeter){
    sum = 0;
    sides.forEach((e)=> sum += e );
    return sum* numberOfFencingWire* costPerMeter;
}
console.log(costOfFencing([1,2,3], 7, 20));