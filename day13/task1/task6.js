function bmical(weight,height){
    let bm=weight/(height*height);
    if(bm<18.5){
        console.log("You are Under Weight:"+round(bm));
    }
    else{
        console.log("You are Normal Weight"+round(bm));
    }
    
}
var bmi=bmical(55,1.8);
