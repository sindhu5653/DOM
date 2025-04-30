const p = document.createElement("p");
p.textContent = "This is a new paragraph.";
document.body.appendChild(p);


//append li to a ul
const ul = document.createElement("unorder");
const li = document.createElement("list");
li.textContent = "First item";
ul.appendChild(li);       
document.body.appendChild(ul);  


//Multiple list items
const fruits = ["Apple", "Banana", "Cherry"];
const unodered = document.createElement("ul");
fruits.forEach(fruit => {
  const ls = document.createElement("li");
  ls.textContent = fruit;
  unodered.appendChild(ls); 
});
document.body.appendChild(unodered);


//append text node
const div = document.createElement("div");
const text = document.createTextNode("Plain text node");
div.appendChild(text);
document.body.appendChild(div);


//nested elements
const card = document.createElement("div");
const h3 = document.createElement("h3");
h3.textContent = "Card Title";
const para = document.createElement("p");
para.textContent = "Card description here.";
card.appendChild(h3);
card.appendChild(para);
document.body.appendChild(card);