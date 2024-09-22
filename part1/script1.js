const numbers= [5,12,8,130,44]

//a
const descending = numbers.sort(function(a, b) {
    return b - a;
});
console.log(descending);

//b
const less30 = numbers.filter(function(numbers1){
   return numbers1<30;
})
console.log(less30);

//c
const sum1 = numbers.reduce(function(c,numbers1){
     return c + numbers1;
} , 0);
console.log(sum1)

//d
const stringarray1 = numbers.map(function(numbers1){
    return numbers1.toString();
});
console.log(stringarray1);

//e
const lessindex1= numbers.map(function(numbers1,index){
    return numbers1-index;
})
console.log(lessindex1);