//if user enter number which is divisible by 3 the print should be display "fizz"
//if user enter number which is divisible by 5 the print should be display "buzz"
//if user enter number which is divisible by 3 as well as 5 the print should be display "fizzbuzz"
function cfizzbuzz (n){
    if (n%3==0 && n%5==0)
    { return "fizzbuzz"}
        if (n%3==0){
    return "fizz"}
            if (n%5==0)
    { return "buzz"
        }
    
}
console.log(cfizzbuzz(9))