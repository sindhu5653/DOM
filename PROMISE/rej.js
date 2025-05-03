const promise = new Promise((resolve,reject)=>{
    reject("Failed");
});
promise.then((response)=>{
    console.log(response); 
})
.catch((error)=>{
    console.log(error);
    
});