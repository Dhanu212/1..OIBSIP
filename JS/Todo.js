let input=document.getElementById('input');
let addBtn= document.getElementById('add');

let next= document.querySelector(".list")

addBtn.addEventListener('click',()=>{
    if(input.value==''){
        alert("Enter list");

    }
    else{
        let list=document.createElement('ul');
        list.innerHTML='${input.value} <i class="bi bi-trash"></i>';
        Text.appendChild(list);
        input.value='';
        let deleteBtn=list.querySelector("i");
        deleteBtn.addEventListener('click',()=>{
            list.remove();
        }
        )

    }
}
)