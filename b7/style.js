
var a = -20;
var b = -20;
var c = -30;

var max = undefined ;
if(a == b && a == c){
    max = a ;
    console.log('Ba so co gia tri bang nhau la :',max);
}
else if(a == b && a > c){
    max = a;
    console.log('a va b co cung GTLN la :', max);
}
else if(b == c && b > a){
    max = b;
    console.log('b va c co cung GTLN la :', max);
}
else if(a == c && a > b){
    max = c;
    console.log('a va c co cung GTLN la :', max);
}
else if(a > b && a > c){
    max = a ;
    console.log('Gia tri lon nhat la a =', max);
}
else if(b > a && b > c){
    max = b;
    console.log('Gia tri lon nhat la b =', max);
}
else{
    max = c ;
    console.log('Gia tri lon nhat la c =', max);
}
// console.log('Gia tri lon nhat la', max);