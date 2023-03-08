//Program for sorting
/*
let arr=[1,2,15]
console.log(arr)
arr.sort()
console.log(arr) //Here it considering 1 is less than 2 so it will pront 15 before 2.
*/
function check (a,b)
{
    if(a==b)return 0
    if(a>b)return 1
    if(a>b)return-1
}
let arr=[1,2,15]
arr.sort(check)
console.log(arr)