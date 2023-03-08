//Below is the example of Index Of
 /*   let arr=[120,30,20,10,20,10,23,10]
x=arr.indexOf(120)
console.log(x)
x=arr.indexOf(10)
console.log(x)
x=arr.lastIndexOf(10)
console.log(x)
console.log(arr.includes(90)) //Output of this line will be false because of 90 not in our array.
console.log(arr.includes(30)) */
//from here the main functions are started 
let arr=[120,30,20,10,20,10,23,10]
x=-1
while(true)
{
    x=arr.indexOf(10,x+1)
    console.log(x)
    if(x==-1)
    {
        break
    }
}
