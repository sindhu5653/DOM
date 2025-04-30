const para = document.createElement("p"); 
para.textContent = "I'm a new paragraph!"; 
document.getElementById("container").appendChild(para);

const btn = document.createElement("button");
btn.textContent = "Click Me";
btn.onclick = () => alert("Button clicked!");
document.body.appendChild(btn);


//Btn add click event
// const btn = document.createElement("button");
// btn.textContent = "Click Me";
// btn.addEventListener("click", () => {
//   alert("Button was clicked!");
// });
// document.body.appendChild(btn);


//Create div with class and Id
const div1 = document.createElement("div");
div1.className = "box";
div1.id = "uniqueBox";
div1.textContent = "I have a class and an ID!";
document.body.appendChild(div1);


//create ul list with list items
const unorder = document.createElement("ul");
const items = ["Apple", "Banana", "Cherry"];
items.forEach(fruit => {
  const list = document.createElement("li");
  list.textContent = fruit;
  unorder.appendChild(list);
});
document.body.appendChild(unorder);


const imgage = document.createElement("img");
imgage.src = "flwr.jpeg";
// img.alt = "Placeholder image";
document.body.appendChild(imgage);
