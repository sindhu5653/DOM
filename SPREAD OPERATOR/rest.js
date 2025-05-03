const globalPlayer={
    id:1,
    name:"Abhi",
    age:22,
};
const {name,...rest}=globalPlayer;
console.log(name);
console.log(rest);
