// function printPattern (){
//     for (i=1;i<=4;i++){
// console.log("*".repeat(i));

//     }
// }
// printPattern()

// function studuentInfo(name,age,course){
//     console.log("Name:",name);
//     console.log("Age:",age);
//     console.log("Course:",course)
    
// }studuentInfo("abrar",20,"js")

// function multiplyThree(a,b,c){
//     const product=a*b*c;
//     console.log(product)
    
// }multiplyThree(2,3,4);
// multiplyThree(5,5,2)

// function isEligibleToVote(Name,Age){
//     if(Age>=18){
//         console.log("you can vote");
        
//     }else {
//         console.log("you are not eligible");
        
//     }
// }isEligibleToVote("Alice",20);
// isEligibleToVote("Bob",16)

// function findlargest(num1,num2){
   
//     if (num1>num2){
//       return num1;
        
//     }else{
// return num2;

//     }}let max= findlargest(10,25);
//     console.log(max);
    
// findlargest()


// function calculateDiscount(org,dis){
//     return (org*dis/100)
// }
// let dis=calculateDiscount(100,20);
// console.log(dis);

// let x=10;

// function test(){
//     let x=20;
//     console.log(x);
    
// }test()
// console.log(x);

// function calculate(){
//     let result=100;
// console.log(result);

// }
// calculate()

// function outer(){
//     let message="Hello"
//     function inner(){
//         console.log(message);
        
//     }
//     inner()
// }
// outer()

// function parent(){
//     let a=10;
//     function child(){
//         let b=20;
//         console.log(a+b);
//         console.log(b);
        
//     }
//     child();
    
    
// }
// parent()
// Function expression
// const dividefunction =function divide(a,b){
//     return a/b
    
// }
//   let result=  dividefunction(10,2)
//   console.log(result);

// function celsiusToFahrenheit(cel){
//     return (cel*9/5)+32;
// }
//   let result=celsiusToFahrenheit(25)
//   console.log(result);
//   higher-order function
// function executeOperation(a,b,operation){
//         return operation(a,b)
// }
//     const add=(x,y)=>x+y;
//     const multiply=(x,y)=>x*y;

// console.log(executeOperation(5,3,add));
// console.log(executeOperation(5,3,multiply));

// function repeat(Hello,a){
// for(let i=0;i<a;i++){
//     Hello()}
// }
// const Hello=()=>{console.log("hello!");}
// repeat(Hello,4)

// const studuent={
//     name:"Abrar",
//     marks:[98,87,85],
//     getAverage(){
//         let sum=this.marks.reduce((acc,elem)=> acc+elem,0)
//             return sum/this.marks.length
        
//     }
// }
// console.log(studuent.getAverage())

// const rectangle={
//     length:10,
//     width:5,
//     getArea(){
//         let multi=(this.length*this.width)
//         console.log(multi);
        
//     },
//     getPerimeter(){
//         let par=(this.length+this.width)*2
//         console.log(par);
        
//     }
// }
// console.log(rectangle.getArea());
// console.log(rectangle.getPerimeter());



