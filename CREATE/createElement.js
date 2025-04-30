const card = document.createElement("div");
// card.classList.add("card1");

const heading = document.createElement("h1");
heading.textContent = "Card Title";

const para = document.createElement("p");
para.textContent = "This is a card with nested elements.";

card.appendChild(heading);
card.appendChild(para);

document.body.appendChild(card);
