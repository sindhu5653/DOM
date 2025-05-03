const promise1 = new Promise((resolve,reject)=>{
    // resolve(["Javascript","Python"]);
    reject("API Failed");
});

// promise1.then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{
//     console.log(error);
    
// })

// async function fetchData(){
//     const response = await promise1;
//     console.log(response); 
// }
// fetchData();


//IIFE
// ( async ()=>{
//     const response = await promise1;
//     console.log(response); 
// })();


//normal function
// (async function(){
//          const response = await promise1;
//          console.log(response); 
//      })();



//arrow function
// const fetchData= async ()=>{
//     const response = await promise1;
//     console.log(response); 
// };
// fetchData();


//one method
// const fetchData= async ()=>{
//     const response = await promise1.catch((err)=>{
//         console.log(err);
//     })
//     if (response) {
//     console.log(response); 
//     }
// };
// fetchData();


const fetchData= async ()=>{
    try{
        const response = await promise1;
        console.log(response);
        
    }
    catch (error){
        console.log(error);
        
    }
};
fetchData();


