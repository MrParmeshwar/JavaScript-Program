//Write a program to get a single string from two given strings,separeted 
// by a space and swap the first two charecters of each string.
let s1="abc"
let s2="xyz"
let p=s1[0]
let q=s2[0]
console.log("String before Swap")
console.log(s1)
console.log(s2)
console.log("String after Swap")
s3=s1.replace(p,q)
console.log(s3)
s4=s2.replace(q,p)
console.log(s4 )