//display sum of even and odd numbers in 100 numbers
const evenOddSum = (x) => {
    let sumEven=0;
    let sumOdd=0;
    for(i=0; i<=x; i++){
        if(i%2==0){
            sumEven += i;
        }if(i%2!==0){
            sumOdd += i;
        }
    }console.log(sumEven+sumOdd);
}
evenOddSum(100)