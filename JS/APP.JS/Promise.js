console log("JS Promises");

const myPromise = new Promise(function(res,rej){
    let mock=true;
    if(mock==true){
        res('U have completed webtech so can attend react');
    }
    else{
        rej('first do completed webtech')
    }
})
console.log(myPromise);

myPromise.then((date)=>{
    console.log(data);
})
.catch((err)=>{
    
})