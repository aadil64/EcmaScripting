// function pali(str){
//     let reversedStr = "";
//     for(i=str.length-1; i>=0; i--){
//         reversedStr += str[i]
//     }return reversedStr==str;
// }
// console.log(pali('nan'))
function palis(str){
    let reversedstr = "";
    for (i=str.length-1; i>=0; i--){
        reversedstr += str[i]
    }return reversedstr==str;
}
console.log(palis("kam"))