const mode = document.querySelector("#btn");
let body = document.querySelector("body");
let current = "dark";

mode.onclick = () => {
  if (current === "dark") {
    current = "light";
    console.log(current);
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    current = "dark";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    console.log(current);
  }
};
