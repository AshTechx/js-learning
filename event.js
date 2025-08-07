//events in js 
const button = document.querySelector("#btn");
button.onclick =()=>{
  console.log("button was clicked");

};

//div 
const redbox = document.querySelector('#box');
redbox.onmouseup=(evt)=>{
console.log('div was hovered');
console.log(evt);
console.log(evt.type);
console.log(evt.target);
console.log(evt.clientX);
};

// //event listeners 
//  const first = box_2.addEventListener("click",()=>{
//   console.log("div clciked");
// });
// const second = box_2.addEventListener("click",()=>{
//   console.log("hello!");

// });
//event listeners 
function firstevent(){
  console.log("div was clciked");
}
function secondevent(){
  console.log("div was clciked again");
}

box_2.addEventListener("click",firstevent);
box_2.addEventListener("click",secondevent);

box_2.removeEventListener("click",firstevent);