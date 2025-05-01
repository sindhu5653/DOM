const elements = document.getElementsByClassName("highlight");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "red";
  }


  const boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none";
    // boxes[i].style.display = "blcok";
  }


  const tags = document.getElementsByClassName("tag");
  console.log(typeof tags); // object 
  //convert to array
  [...tags].forEach(tag => {
    tag.style.backgroundColor = "yellow";
  });


  const notes = document.getElementsByClassName("note");
  console.log("Total notes:", notes.length);  



  const boxesLive = document.getElementsByClassName("box");
  const boxesStatic = document.querySelectorAll(".box");
  const newBox = document.createElement("div");
  newBox.className = "box";
  document.body.appendChild(newBox);
  console.log("Live collection:", boxesLive.length); //updated   
  console.log("Static NodeList:", boxesStatic.length);  //unchange