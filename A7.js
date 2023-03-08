//Write the function filterRange(arr,a,b)that gets an array arr,looks for elements with 
//values higgher or equal to a and lower or equal to b and return a result as an array.
//It Should return the new array.
function Rocky(arr,a,b)
{
    return arr.filter(n=>(a<=n && n<=b));

}
let arr=[5,3,8,1];
let filtered = Rocky(arr,1,4);
console.log(filtered);
console.log(arr);
