//write a program to add 'ing' at the end of a given string (length should be at least 3).
//if the given string already ends with 'ing'then add 'ly' instead. if the string length of the 
//given string is less than 3,leave it unchanged.
let  n="Rockying"

  
if(n.lenght<3)
{
    console.log("n")  
    
}
else if(n.endsWith('ing'))
{
    console.log(n + "ly")
}
else
{

    console.log(n+"ing")
}