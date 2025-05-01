  const button = document.getElementById("btn");
  button.addEventListener("click", () => {
    alert("Button was clicked!");
  });


//Mouse over
  const text1 = document.getElementById("text");
  text1.addEventListener("mouseover", () => {
    text1.textContent = "You hovered!";
  });


//Multiple Listener
  const box = document.getElementById("myBox");
box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "lightblue";
  box.style.color="blue";
});
box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "green";
  box.style.color="red";
});


//Arrow function
function greet(name) {
  alert("Hello " + name);
}
document.getElementById("greetBtn").addEventListener("click", () => {
  greet("Alice");
});


//key board event
document.addEventListener("keydown", (event) => {
  console.log("Key pressed: " + event.key);
});


//using this function
const div = document.getElementById("myDiv");
div.addEventListener("click", function() {
  this.style.backgroundColor = "yellow"; 
});

//Add and Remove element
const btn1 = document.getElementById("btn1");
const removeBtn = document.getElementById("remove");
function sayHi() {
  alert("Hi!");
}
btn1.addEventListener("click", sayHi);
removeBtn.addEventListener("click", function() {
  btn1.removeEventListener("click", sayHi);
  alert("Event listener removed");
});

