function isDivisible(x, y){
    if(x%y == 0 || y%x == 0){
        return true;
    }return false
}
console.log(isDivisible(5, 27))