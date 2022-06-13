let lastChild= document.querySelector("ul#listData>li:last-child")
console.log(lastChild)
let ulDom=document.querySelector("ul#listData")
let liDom=document.createElement("li")
liDom.innerHTML="First added"

ulDom.prepend(liDom)//First added
ulDom.append(liDom)//Last added