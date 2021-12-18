function fourDigs(x){
    if(x.toString().length>4){
        return "more than four";
    }return "not more than four";
}
console.log(fourDigs(1234))