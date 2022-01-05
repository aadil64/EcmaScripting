const prime=(num)=>{
     for(i=2;i<num;i++){
         if(num%i==0){
             return "composite n"
         }
     }return "prime n"
}
console.log(prime(9))