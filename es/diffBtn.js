// whether diffrence between x and y is greater than 5

// function diffrencebetween(x, y){
//     if(x>5<y && y>5<x){
//     return true
//     }
//         return false
//         }
// console.log(diffrencebetween(8, 4));

function greater(x, y){
    if(x-y < 5 || y-x > 5){
        return 'less than 5';
    }return 'greater than 5';
}
console.log(greater(10, 8));