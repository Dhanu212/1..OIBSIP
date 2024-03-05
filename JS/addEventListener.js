

//!mouseout
// darkmode.addEventListener('moseut',()=>{
//     document.body.style.backgroundColor='white'
//     h1.style.color="blue"
// })
// //!muse down
// let heart=document.getElementById('heart')
// heart.addEventListener('musedoown'.charAt()=>{
//     heart.innerHTML='😍'
// })

// //!mouseup
// heart.addEventListener('mouseup',()=>{
//     heart.innerHTML='❤️'
// })
//contaxmenu
let qsp=document.getElementById('qsp');
qsp.addEventListener('cotextmenu',()=>{
let h1=document.createElement('h2');
h1.innerHTML='the best tranning institute'
document.body.appendChild(h1)
}
)
//!dblclick
let div=document.querySelector('#hey');
div.addEventListener('dblclick',()=>{

    div.innerHTML='I am Good....😊😍😒'
})
//keypress,keyup,keydown
let input=document.querySelector('input');
let demo=document.getElementById('demo');
input.addEventListener('keypress',()=>{
    demo.innerHTML="You have pressed a key in the text field"
})
input.addEventListener('keydown',()=>{
    demo.innerHTML="You have a passed a key"
})
input.addEventListener('keyup',()=>{
    demo.innerHTML="<h1> you have submitted the form successfully...");
    open("z..../HTML/Form.html");
})
