// Direct access
console.log(document);
console.log(document.body);
console.log(document.head);
console.log(document.images);

//!getElementById()
let h1=document.getElementById('dom'); 
console.log(h1);/h1.style.color="purple";

//!getElementaByClassName()
let div=document.getElementsByClassName('home')
console.log(div);
let arr=Array.from(div);
console.log(arr);
arr.forEach((element)=>{
    element.style.backgroundColour="red";
    element.style.height="20px";
    element.style.display="inline-back";
}
)

// ! getElementByTagname
let sections=document.getElementsByTagName('section');
console.log(section);
let arr2=Array.from(sections)
for(let i=0;i<3;i++){
    arr2[i].style.height="100px";
    arr2[i].style.width="100px";
    arr2[i].style.backgroundColor="crimson";
    arr2[i].style.margin="10px";
}
//!query Selector()
let btn=document.querySelector('.bth')
console.log(bth);
bth.style. backgroundColor="lightBlue"
bth.style.height="30px"
bth.style.width="100px"
bth.style.borderRadius="10px"

//! query SelectorAll()
let demo=document.querySelectorAll('.home,section,#dom')
console.log(demo);
demo.forEach((element)=>{
    element.style.border='10px solid blue'
})




