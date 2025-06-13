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