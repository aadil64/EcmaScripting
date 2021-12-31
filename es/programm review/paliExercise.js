const palin=(x)=>{
    var reversedx='';
    for(i=x.length-1;i>=0;i--){
        reversedx+=x[i]
    }return reversedx==x;
}
console.log(palin('ada'))