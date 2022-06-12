console.log(document.URL)
console.log(document.location)
console.log(document.location.pathname)
console.log(document.getElementById("test").innerText)

console.log(document.querySelector("ul#test2>li>a").innerHTML)//ul içindeki li içindeki a

let a = document.querySelector("#dataSelect")
a.style.color="red"
console.log(a.text)