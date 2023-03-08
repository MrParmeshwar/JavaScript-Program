//Accessing Array Element 
//method 1.
console.log("Method 1")
let arr=[10,20,30,1.2,"abc"]
console.log(arr)
//answer by using indexing method 
console.log("by using indexing method ")
console.log(arr[0])
console.log(arr[1])
console.log(arr[5])   //Here Array is have only position up to 4 so 5th element is not defiend  
//find length of array 
console.log("Below is the length of array")
console.log(arr.length)
console.log("  ")
//by using for loop
console.log("by using for loop")
for(let i=0;i<arr.length;i++ )
{
    console.log(arr[i])
}
//by using at function
console.log("By using at function")
for(let i=0;i<arr.length;i++)
{
    console.log(arr.at(i))
}