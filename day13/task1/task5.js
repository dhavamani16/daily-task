function bmical(weight,height){
    let bm=weight/(height*height);
    return bm;
}
var bmi=bmical(55,1.8);
console.log("BMI:"+bmi);