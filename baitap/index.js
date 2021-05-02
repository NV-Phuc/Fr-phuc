// var BMIti = undefined;
// var BMIteo = undefined;

// var hightti = 1.8;
// var hightteo = 1.7;
// var massti = 80;
// var massteo = 70;

// BMIti = massti / ( hightti * hightti);
// BMIteo = massteo / ( hightteo * hightteo);
// console.log("BMI cua ti", BMIti);
// console.log("BMI cua teo", BMIteo);

// isTihonTeo=BMIti > BMIteo;
// console.log("ty hon teo?", isTihonTeo);

var scoreti = undefined;
var scoreteo = undefined;
var scoretun = undefined;

var scoreti = (89 + 120 + 103) / 3;
var scoreteo = (116 + 94 + 123) / 3;
var scoretun = (91 + 134 + 103) / 3;

console.log("DTB cua ti:", scoreti);
console.log("DTB cua teo:", scoreteo);
console.log("DTB cua tun:", scoretun);

if(scoreti > scoreteo && scoreti > scoreteo){
    console.log("ti thang:", scoreti);
}
else if(scoreteo > scoreti && scoreteo > scoreteo){
    console.log("teo thang:", scoreteo);
}
else if(scoretun > scoreteo && scoretun > scoreti){
    console.log("ti thang:", scoretun);
}
else if(scoreteo > scoretun && scoreteo > scoreti){
    console.log("teo thang:", scoreteo);
}
else if(scoreteo = scoreti && (scoreti || scoreteo) > scoretun){
    console.log("ti va teo thang:", scoreti );
}
else if(scoreteo = scoretun && (scoretun || scoreteo) > scoreti){
    console.log("tun va teo thang:", scoretun );
}
else if(scoretun = scoreti && (scoreti || scoretun) > scoreteo){
    console.log("ti va tun thang:", scoretun );
}
else{
    console.log("ca 3 cung hoa:", scoreteo);
}