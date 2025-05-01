//ID
const box = document.querySelector("#box");
box.style.color = "red";


//CLASS
const firstMessage = document.querySelector(".message");
firstMessage.textContent = "Updated Message";


//TAG
const heading = document.querySelector("h3");
  heading.style.fontSize = "30px";
  heading.style.fontStyle = "italic";
  heading.style.fontWeight = "bold";


//INPUT
const input1 = document.querySelector('input[placeholder="Enter name"]');
  input1.style.border = "2px solid green";

//NESTED
const nested = document.querySelector(".container .text");
nested.style.backgroundColor = "lightblue";
nested.style.color="blue";


//INSIDE FORM
const submitBtn = document.querySelector("form button[type='submit']");
  submitBtn.style.backgroundColor = "yellow";
//   submitBtn.disabled=true;

//LIST ITEM
const menuItem = document.querySelector("#menu li");
  menuItem.style.color = "blue";

//RADIO BUTTON
const selectedRadio = document.querySelector('input[type="radio"]');
console.log("Selected gender:", selectedRadio.value);

//Value from text input
  const usernameInput = document.querySelector("#username");
  console.log(usernameInput.value);  


//HIDE MESSAGE
const popup = document.querySelector(".popup");
  popup.style.display = "none";