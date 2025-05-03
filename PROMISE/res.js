// const promise = new Promise((resolve,reject)=>{
//     resolve("Success");
// });
// promise.then((response)=>{
//     console.log(response); 
// });  //success



// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Success");
//     }, 3000);
// });
// promise.then((response)=>{
//     console.log(response); 
// });

function getDataFromAPI(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num);
        },1000)
    });
}
function getDataFromAPI2(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num);
        },2000)
    });
}
getDataFromAPI(5)
.then((response)=>{
    return getDataFromAPI2(response)
    // return getDataFromAPI2(response+5)....... // 10
})
.then((response)=>{
    console.log(response); 
})