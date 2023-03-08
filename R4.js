//Below is the programs for multiline arrow functions 
/*single line arrow function 
  let add=(x,y)=>x+y */
//Multiline arrow function 
  /*let add=(x,y)=>
  {
    return(x+y);
  }
  let a=add(10,20)
  console.log(a)*/
  //  second example of multiline arro function      
  let add=(x,y)=>
  {
    x=x+10
    y=x+10
    let z=x+y 
    return z
  }
  let a=add(10,20)
  console.log(a)
