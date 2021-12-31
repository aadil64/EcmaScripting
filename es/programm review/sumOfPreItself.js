//find the sum of all the previous numbers' itself;
const sumofpreitself=(x)=>{
    var sum=0;
    for(i=0;i<=x;i++){
        sum=sum+(i**i)
    }console.log(sum)
}
sumofpreitself(5)