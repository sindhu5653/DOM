const nameInput1 = document.querySelector("#nameInput");
    const submitBtn1 = document.querySelector("#submitBtn");
    // const mainMsg = document.querySelector("#main");

    
    submitBtn1.addEventListener("click", function() {
      const name = nameInput1.value.trim();

      if (name === "") {
        nameInput1.style.display = "block";  
      } else {
        nameInput1.style.display = "none";   
        alert("Submitted name: " + name);
      }
    });