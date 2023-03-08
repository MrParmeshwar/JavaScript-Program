//Second example of class 
class area
{
    constructor(radius)
    {
        this.radius=radius
    }
    calculateArea()
    {
        this.area=3.14*this.radius*this.radius;
    }
    showArea()
    {
        console.log(`area.is${this.area}`);
    }
}
//get all methods names 
console.log(Object.getOwnPropertyNames(area.prototype))
let Ob=new area(1.2)
Ob.calculateArea()
Ob.showArea()