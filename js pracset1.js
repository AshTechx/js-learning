let iden_1 = "aashiya";
let iden_2 = iden_1 + 25;
console.log(iden_2);
console.log(typeof iden_1);
console.log(typeof iden_2);

//creating a const and then trying to change it 
const student ={
    name:"aashiya",
    age:20,
    weight:78
}
console.log(student["name"]);
student["height"] = "six";
console.log(student);

// word meaning dictionary of 5 words 
const dictionary ={
    demands :"wantings",
    respect : "dignity",
    marry :"wed"
}
console.log(dictionary["respect"]);
dictionary["aashiya"] ="ash";
console.log(dictionary); 
console.log(dictionary["demands"]);


// creating array 
let princess = ["aurora" , "rapunzel" , "snowhite" , "cindrella"];
console.log(princess);
princess[1] = "sleeping beauty";
console.log(princess);

//calculating average of an array 

let arr = [85 , 97 , 44, 37 ,76, 60];
let sum = 0;
for(val of arr){
    sum+=val;


}
console.log(sum/6);


// offer on each array value of 10 percent 
let prices = [250 , 645 ,300 , 900, 50];

for (let i=0;i<prices.length;i++){
    prices[i] = prices[i]-prices[i]*10/100;
    console.log(prices[i]);
}

// array methos example 
let companies = ["bloomberg" , "microsoft", "uber", "google","ibm" , "netflix"];
let update = companies.shift();
console.log(companies);
companies.splice(1, 1, "ola");
console.log(companies);

companies.push("amazon");
console.log(companies);

// function definition 
function addition(p,q){
    console.log(p+q);
}
addition(1,3) // function call 

// return type of function 
function retfunc(x,y){
    j =x+y;
    return j ;

}
let content = retfunc(45,67);
console.log(content);


// arrow function of multiplication 

const arrowMul = (g,h) => {
    return g*h;
}
let store = arrowMul(5,6);
console.log(store);

// question practise 
// function in_put(line){
//    for (i=0;i<=line.length;i++){
//     if (line[i]==="a" ||
//         line[i]=== "e" ||
//         line[i]==="i" || 
//         line[i]==="o"||
//         line[i]==="u"){
//         console.log("yes"+ "=" + line[i]);
//     }
   
//    }
// }
// in_put("hello guys")


// const in_put =(line) => {
// for (i=0;i<=line.length;i++){
//     if (line[i]==="a" ||
//         line[i]=== "e" ||
//         line[i]==="i" || 
//         line[i]==="o"||
//         line[i]==="u"){
//         console.log("yes"+ "=" + line[i]);
        
//     }
// }
// }
//  in_put("hello guys");



