const obj={
    barnd:'pulsur',
    cost:200000,
    color:'red'
}

console.log(obj);
let jsonObj=JSON.stringify(obj);
console.log(jsonObj);

let jsObj=JSON.parse(jsonObj);
console.log