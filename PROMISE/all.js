// const promise1 = new Promise((resolve,reject)=>{
//     resolve(["Javascript","Python"]);
// });
// const promise2 = new Promise((resolve,reject)=>{
//     resolve(["React","Angular"]);
// });

// promise1.then((res)=>{
//     console.log(res);  
// });

// promise2.then((res)=>{
//     console.log(res);  
// });


const promise1 = new Promise((resolve,reject)=>{
    resolve(["Javascript","Python"]);
});
const promise2 = new Promise((resolve,reject)=>{
    resolve(["Node","Java"]);
});
const promise3 = new Promise((resolve,reject)=>{
    resolve(["React","Angular"]);
    // reject("API failed")
});

const allpromises=Promise.all([promise1,promise2,promise3]);

allpromises.then((res)=>{
    console.log(res);
    // console.log(res.flat());
    // console.log(res.flat(Infinity));
})
.catch((error)=>{
    console.log(error);
    
})