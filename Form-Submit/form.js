let formDOM =document.querySelector('#userForm')

formDOM.addEventListener('submit',formHandler)
const alertDOM =document.querySelector('#alert')

const alertFunction=(title,message,className)=>`
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
    <strong>${title}</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
`
// function formSubmit(e){
//     e.preventDefault()//Get parametreleri gelmiyor bu şekilde. Default işlemi engelliyoruz.n b 
//     let InputDOM= document.querySelector('#score')
//     console.log(InputDOM.value)
//     localStorage.setItem('score',InputDOM.value)
//    console.log("success")
// }

function formHandler(e){
    e.preventDefault()
    const USER_NAME=document.querySelector('#username')
    const SCORE= document.querySelector('#score')
    if(USER_NAME.value&&SCORE.value){
        addItem(USER_NAME.value,SCORE.value)
        USER_NAME.value=""
        SCORE.value=""
       
    }else{
        alertDOM.innerHTML=alertFunction("Error","Değerleri boş girdiniz.","danger")
    }
 
}

let userListDOM=document.querySelector('#userList')

const addItem=(name,score)=>{
    let liDom=document.createElement("li")
    liDom.innerHTML=`${name} 
    <span class="badge bg-primary rounded-pill"> ${score}</span>
    `
    liDom.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    userListDOM.append(liDom)

}