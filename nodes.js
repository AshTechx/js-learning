// const variable = document.getElementById("box");
// console.log(variable.childNodes);

// const second = document.getElementById("box");
// let arr = [];
// function elements(){
// for(let i =0;i<=second.childNodes.length;i++){
//   const node = second.childNodes[i];
//   if(node.nodeType===1){
//     console.log("text node", node.textContent);
//     arr.push(node.textContent);
//   }else{
//     console.log("not a childnode");
//   }
 
// }};

// elements();
// console.log("final array",arr);


// const sect = document.getElementById("sec");
// console.log(sect.childNodes);

// let newstr ="";

// for (let i=0;i<sect.childNodes.length;i++){
//   const node = sect.childNodes[i];
//   if(node.nodeType===1){
//     console.log("text node",node.textContent);
//      newstr = newstr + newstr.concat(node.textContent);
//   }else{
//     console.log("not a text node");
//   }
// }
// console.log("final",newstr);


// function elementnode(){
//   const sect = document.getElementById("sec");
//   for(let i=0;i<=sect.childNodes.length;i++){
//     const node = sect.childNodes[i];
//     if(node.nodeType===1){
//       node.style.backgroundColor = "red";
//     }else{
//       console.log("not element");
//     }
//   }
// }

// let calling = elementnode();


function removing (){
  const sect = document.getElementById("sec");
  for(let i=0;i<=sect.childNodes.length;i++){
    const node = sect.childNodes[i];
    if(node.nodeType===8){
      console.log("removed")
    }else if(node.nodeType!==8){
      console.log("not a comment node",node)
    }else{

      console.log("different");
    }
  }
}
let calling = removing();