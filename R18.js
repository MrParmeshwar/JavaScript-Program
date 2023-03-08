//use of For Each Function .
function show (n)
{
    console.log(n)
}
let arr=[10,20,30,40,50,60,]
console.log(arr)
arr.forEach (show) //Here we call the arrow function 
console.log("  ")
arr.forEach((n)=>console.log(n))
console.log("  ")
arr.forEach(n=>console.log(n))