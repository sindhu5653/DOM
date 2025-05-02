const link = document.getElementById("myLink");
  link.setAttribute("href",'https://www.youtube.com/');
//   link.setAttribute("target", "_blank"); //open in new tab

//CHANGE INPUT TYPE
  const input = document.getElementById("inputField");
   console.log(typeof input); // object
  input.setAttribute("type", "password");
  
  
  const input1 = document.getElementById("myInput");
  input1.setAttribute("type", "email");
  input1.setAttribute("placeholder", "Enter your email");
