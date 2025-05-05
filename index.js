// const sample=document.createElement("h1");
// sample.textContent="Welcome";
// document.getElementById("card").appendChild(sample);



const users = ["Sindhu", "Sneha", "Dhanya"];
console.log(users);

const returnValue = users.filter((item) => {
    return item === "Sindhu"
})
console.log(returnValue);
