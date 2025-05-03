const promise1 = new Promise((resolve,reject)=>{
    resolve(["Javascript","Python"]);
});
const promise2 = new Promise((resolve,reject)=>{
    resolve(["Node","Java"]);
});
const promise3 = new Promise((resolve,reject)=>{
    // resolve(["React","Angular"]);
    reject("API failed")
});

const allpromises=Promise.allSettled([promise1,promise2,promise3]);

allpromises.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
    
})