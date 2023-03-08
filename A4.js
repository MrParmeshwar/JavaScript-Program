//Write a program to get a string made of teh first 2 and the last 2 chars from a given a string.
//if teh string length is lwss than 2,return instead of the empty string
let s1="Parrot mute"
if(s1.length>2)
{
    console.log(s1.slice(0,2)+s1.slice(7,9))
}
else
{
    console.log(" ")
}