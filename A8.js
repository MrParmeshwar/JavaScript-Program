//Write a function filterRangelnPlace(arr,a,b) that  gets an array arr and removes from it all 
//values except those 
//that are between a and b. the test is:a<=arr[i]<=b.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(arr)
function Rocky(arr, b, c)
 {
    for (let i = 0; i <= arr.length; i++) 
    {
        let y = arr[i]
        if (b <= y && c >= y)
        arr.splice(i,arr.lastindexof) 
    }
}
Rocky(arr, 2, 6)
console.log(arr)
//console.log(arr)

