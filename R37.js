//first example of class 
class student
{
    constructor(name)
    {
        console.log("constructor called")

        this.name=name
    }
    say_hello()
    {
        console.log("hello"+this.name)
    }
}
let s1=new student ("abc")
let s2=new student("xyz")
s2.say_hello()
s1.say_hello()