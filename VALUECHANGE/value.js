//Change input
function changeInputValue() {
    document.getElementById("myInput").value = "New Value!";
  }

//Get input
function showValue() {
   const value = document.getElementById("userInput").value;
   document.getElementById("output").textContent = `You entered: ${value}`;
 }

//change input
 function changeText() {
    document.getElementById("text").textContent = "Text has been changed!";
  }


function changeSelection() {
    document.getElementById("mySelect").value = "banana";
  }
