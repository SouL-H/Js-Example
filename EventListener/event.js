let listen =document.querySelector("#listener")
listen.addEventListener("click",clickFunc)


function clickFunc(){
    console.log("Clicked")
    this.style.color="yellow"
}


let over =document.querySelector("#over")
over.addEventListener("mouseover",overFunc)


function overFunc(){
    alert("Over")

}