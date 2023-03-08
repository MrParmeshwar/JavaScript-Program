let x=-1
let s1="Hello World"
while(true) 
{
    x=s1.indexOf("3",x+1)
    console.log(x)
    if(x==-1)
    {
        break
    }
}