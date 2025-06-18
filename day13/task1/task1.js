let fruit=["Apple","Banana","Cherry","Orange"];
console.log(fruit[2]);
let number=[1,2,3,4];
let ans=number.push(5);
console.log(number);
let ans1=number.pop()
console.log(number);
let ans2=number.shift();
console.log(number);
console.log(number.length);
let i;
for(i=0;i<number.length;i++){
    console.log(number[i]);
}
let ans3=number.reverse();
console.log(number);
let sm=0;
let j;
for(j=0;j<number.length;j++){
    sm=sm+number[j];
}
console.log(sm);