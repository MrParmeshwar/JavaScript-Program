//Below is the Example of Reduse 
let arr=[1,2,3,4,5,6,7,8,9,10]
//Method 1
let sum=0;
for(let i=0;i<arr.length;i++)
{
    sum=sum+arr[i];
}
console.log(sum)
//Method 2
console.log("Method No.2")
let v=arr.reduce((sum,n)=>sum+n,0)
console.log(v)
//Method 3
console.log("Method 3")
let v1=arr.reduce(function name(sum,n)
{
    return sum+n
},1) // this 1 will also add in the array 
console.log(v1)