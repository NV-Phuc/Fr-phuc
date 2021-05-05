var max = undefined;
var arrNumber = [ 2, 13, 24, 4, 7, 43, 36, 1, 0, 27, 9, 8, 37, 40];
function LargerNumber(arrNumber){
max = arrNumber.length[0];
for(var i = 1; i <= arrNumber.length; i++){
if(arrNumber[i] >= max){
    max = arrNumber[i];
    
}
   return max ; 
}
console.log('Gia tri lon nhat trong mang la :', max);
}