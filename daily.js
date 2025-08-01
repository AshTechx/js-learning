// // array and doubling even number 
// let input = prompt("Enter a set of numbers separated by commas");
// let numbers = input.split(',').map(Number);
// console.log(numbers);
// let result =[];

// for(let i=0 ;i<numbers.length; i++){
//   let variable = numbers[i];
//   if(variable%2==0){
//     result.push(variable*variable);
//   }else{
//     result.push(variable);
//   }
// }
// console.log(result);


// converting an number array into string of currency  symbol 
let input = prompt("enter the nos to convert in currency");
let result = input.split(',').map(function (currency){
  return "₹"+currency.trim();
});

console.log(result);
