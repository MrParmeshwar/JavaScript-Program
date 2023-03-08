//write a js program for  spred operator 
/*function sum(...arr)
{
    let z=0;
    arr.forEach(n=>
        {
            z=z+n;
        });
        return z;
}
let a=sum(10,20)
console.log(a)
a=sum(10,20,30)
console.log(a)
*/
// above example is some different 
// lets see unother example 
function sum (...arr)
{
    let z=0;
    arr.forEach(n=>
        {
            z=z+n;
        });
        return z;
} 
let arr2=[1,2,3,4,5]
let arr3=[6,7,8,9,10]
let a=sum(...arr2,...arr3)
console.log(a) 
console.log("********************************")
//we can also combine spred syntax with normal values.
let a2=sum(10,...arr2,40,...arr3)
console.log(a2)

console.log("********************************")
//spred syntax can be use to merge array
let a3=[10,...arr2,40,...arr3]
console.log(a3)
console.log("********************************")
//spred syntax can be use to conbvert string into array 
let s1="Hello"
console.log([...s1])

console.log("********************************")
















