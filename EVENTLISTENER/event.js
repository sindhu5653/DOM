  const button = document.getElementById("btn");
  button.addEventListener("click", () => {
    alert("Button was clicked!");
  });


//Mouse over
  const text1 = document.getElementById("text");
  text1.addEventListener("mouseover", () => {
    text1.textContent = "You hovered!";
  });

