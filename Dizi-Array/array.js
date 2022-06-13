let user1={
    firstName:"Bilgi",
    lastName:"Test",
    score:[1,2,3],
    shortName:function(){
        return `${this.firstName} ${this.lastName}`
    }
}


let settings= {
    user:"abc",
    pass:"123",
    ip:"localhost",
    port:"8080"
}


let {user:newUser,pass,ip,...newList}=settings//  Destructuring and listing

console.log(newUser)//New name of user
console.log(pass)
console.log(ip)

console.log(newList)