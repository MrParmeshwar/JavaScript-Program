//Program for object destructuring
let user={id:100,name:'Rocky',address:"Unknown"}
//let {id,name,address}=user
// console.log(id)
// console.log(name)
// console.log(address)


//order of variable does not matter to the left hand side.
// let {name,id,address}=user
// console.log(id)
// console.log(name)
// console.log(address)


//we can unpack only the required value.
let {id,name,address}=user 
console.log(id)
console.log(name)
console.log(address)

// if we want to assing any another propertuy to a variable with another name then we can use 
// following syntax that is colon(:).
let {id:x,name:n,address:adr}=user
console.log(x)
console.log(n)
console.log(adr)
/* in above program there is a 4 different methods to write the code that all method we have 
    seen in above example */