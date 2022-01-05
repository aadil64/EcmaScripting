//whether x has more than 6 digits
const digits = (x) =>{
    if (x>99999 && 1000000>x){
        return "true";
    } return "false";
}
console.log(digits(1999999))