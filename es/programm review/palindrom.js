// function palindrome(str){
//     let myStr = "";
//     for(i=str.length-1; i>=0; i--){
//         myStr = myStr + str[i];
//     }return myStr;
// }
// console.log(palindrome('saqeb'));



function palindrome(str){
    let myStr = "";
    for(i=str.length-1; i>=0; i--){
        myStr = myStr + str[i];
    }if(myStr==str){return true}return false;
}
console.log(palindrome('madam'));


// function palindrome(str){
//     let arrStr = str.split('');
//     for(i=0; i<str.length/2; i++){
//         if(arrStr[i]!==arrStr[arrStr.length-1]){
//             return false
//         }return true;
//     }
// }
// console.log(palindrome('adil'));