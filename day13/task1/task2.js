let arr1=[1,5,8,2,3];
let arr2=[6,9,1,2,5];
let merge=arr1.concat(arr2);
console.log("Array-1:"+arr1);
console.log("Array-2:"+arr2);
console.log("Merge Array:"+merge);
let sorted=merge.sort();
console.log("Sorted Array:"+sorted);
let s=sorted.includes(1);
console.log("1 if found:"+s);
let ind="hello".indexOf("e");
console.log("e-th index value:"+ind);
let fruits = ["apple", "banana", "cherry", "date"];
let removed = fruits.splice(1, 2); 
console.log("Fruits:"+fruits);
console.log("Splice fruits:"+removed);

