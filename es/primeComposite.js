function primeComposite(num){
    if(num<2){
        return 'Composite'
    }
    for(i=2; i<num; i++){
        if(num%i == 0){
            return 'Composite'
        }
    }return 'Prime'
}
console.log(primeComposite(21));
// function positivenagative(n)