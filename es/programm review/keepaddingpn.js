function keepadding(x){
    let sum=0
    for(i=x; i>=0; i--){
      sum = sum + i
    }return sum;
}
console.log(keepadding(5));