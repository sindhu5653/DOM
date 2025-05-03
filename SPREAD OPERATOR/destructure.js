//array destructring
const player=["Bob","Alice","Charlie"];
const [first,second,third]= player;
console.log(second);  //Alice


//object destructuring
const globalPlayer={
    id:1,
    name:"Abhi",
    age:22,
};
const {name,id}=globalPlayer;
console.log(name,id);  //Abhi 1
