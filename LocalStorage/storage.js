localStorage.setItem("key","value");
let a=localStorage.getItem("key");
console.log(a);
console.log("deletee");

localStorage.removeItem('key');
console.log(localStorage.getItem('key'));

let data = {name:"John",age:25,job:"Backend Developer",married:false}
console.log(data)
localStorage.setItem('userData',JSON.stringify(data))//Important
let userData = localStorage.getItem('userData')
parseData = JSON.parse(userData)//Object to JSON
console.log(parseData)
console.log(parseData.age)
