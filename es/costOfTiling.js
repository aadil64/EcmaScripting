// function costoftilling(areaOfRoom,sizeOfTile,costOfTile){
//     areaOfRoom=10*10; sizeOfTile=2*2;costOfTile=10;
//     return areaOfRoom/sizeOfTile*costOfTile
// }
// console.log(costoftilling(100, 4, 10));

function costOfTile(lengthRoom, widthOfRoom, lengthOfTile, widthOfTile, costOfTile){
    areaOfRoom = lengthRoom * widthOfRoom;
    areaOfTile = lengthOfTile * widthOfTile;
    totalTile = areaOfRoom/areaOfTile;
    return totalTile*costOfTile
}
console.log(costOfTile(10,10,2,2,20));