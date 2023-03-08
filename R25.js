//Below is the example of map function .
//write a  program to calculate square of each array element 
let arr=[10,20,30,40,50,60,70,80,90]
let arr1=[]
for(let i=0;i<arr.length;i++)
{
      let y=arr[i]*arr[i];
      arr1.push(y)
}
console.log(arr1)

console.log("Second method")
//Method two 
arr2=arr.map(n=>n*n) // We use here arrow Function
console.log(arr2)
//Method Third
console.log("Third method ")
arr3=arr.map(function(n)

{
    return n*n
})
console.log(arr3)