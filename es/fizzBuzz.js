//if user enters the number that is divisible by 5 then you have to print fizz
//if user enters the number that is divisible by 3 then you have to print buzz
//if user enters the number that is divisible by 3 as well as then you have to print fizzbuzz

function fizzBuzz(n){

    if(n%3==0 && n%5 == 0){
        return 'fizzbuzz'
    }
    if(n%5==0){
        return 'fizz'
    }
     if(n%3==0){
        return 'buzz'
    }
}
console.log(fizzBuzz(27))



