let creating = document.createElement("button");
creating.innerText = "click me";
creating.style.backgroundColor = "red";
creating.style.color = "white";
document.querySelector("body").prepend(creating);



//accessing thr attribute name and then using a different class styling 
// let classes = document.querySelector(".para_1");
// let attr = classes.getAttribute("class");
// console.log(attr);
// let change = classes.setAttribute("class","para_2");
// console.log(change);

//using classList 
let clist = document.querySelector(".para_1");
let newre = clist.classList.add("para_2");
console.log(newre);