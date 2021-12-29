//0to12=goodmorning,12to16=goodadternoon,16to21=goodevening,21to24=goodnight
function timeline(x){
   if(x>0&&x<=12){
       return 'good morning'
   }
   else if(x>12&&x<=16){
       return 'good afternoon'
   }
   else if(x>16&&x<=21){
       return 'good evening'
   }
   else if(x>21&&x<=24){
       return 'good night'
   }
}
console.log(timeline(23))