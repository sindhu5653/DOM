//P
const paragraphs = document.querySelectorAll("p");
console.log(typeof paragraphs); //object
  paragraphs.forEach(p1 => {
    p1.style.color = "blue";
  });

//CLASS
  const items = document.querySelectorAll(".item");
  items.forEach(item1 => {
    item1.style.border = "2px solid green";
  });

//button
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(button1 => {
    button1.addEventListener("click", () => {
    //   button1.classList.toggle("active");
    });
  });


//CHECK BOX
const checkboxes = document.querySelectorAll(".check");
  checkboxes.forEach(box => {
    box.addEventListener("change", () => {
      const checkedValues = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
      console.log("Checked items:", checkedValues);
    });
  });


  //LIST ITEMS
const menuItems = document.querySelectorAll("#menu li");
  menuItems.forEach(item => {
    item.style.fontWeight = "bold";
  });


  const items1 = document.querySelectorAll(".item1");
  items1.forEach((item2, index) => {
    if ((index + 1) % 2 === 0) { 
      item2.style.backgroundColor = "lightblue";
    }
  });