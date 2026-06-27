// let car={
//     brand:"BMW" ,
//      model:2020,
//       price:900000,
//     displayInfo:function(){
// console.log("Brand:"+this.brand+
//     "Model:"+this.model+"Price:"+this.price);

//     },
// applyDis:function(per){
//     let dis=(this.price*per)/100
//    this.price=this.price-dis
// console.log(per+this.price);

// }}
// car.displayInfo();
// car.applyDis(10)

// function greet(){
//     console.log("hello");
//     console.log(this);
    
    
// }
// window.greet()

// const student = {
// name: "John",
// subjects: [
// { name: "Math", marks: 85 },
// { name: "Science", marks: 90 },
// { name: "English", marks: 88 }],
// calculateAverage:function(){
//     let totalMarks=0;
//     for (let i=0;i<this.subjects.length;i++){
//         totalMarks+=this.subjects[i].marks;}
//         return totalMarks /this.subjects.length
//     },
//     displayReport:function(){
//         console.log(this.name);
//         console.log(this.calculateAverage());
        
        
//     }

// }
// student.displayReport()

// function safeDivide(a,b){
//     try{
//         if(b==0){
//             throw new error("Cannnot divide")
//         }

//         let result=a/b;
//          return result
//     }catch(error){
//         console.log("Error:"+error.message);
        
//     }
// }console.log(safeDivide(10,2));
// console.log(safeDivide(10,0));
// console.log(safeDivide(20,10));

// function getElement(arr, index){
//     try{
//         if(index<0){
//             throw new Error("Index cannot be negative!")
//         }
        
//             if(index>=arr.length){
//          throw new Error("Index out of bounds!")

//             }return arr[index]
        
//     }catch(error){
//        console.log(error.message);
   
        
//     }
// }
// let result=[10,20,30,40]
// console.log(getElement(result,2));
// console.log(getElement(result,-1));
// console.log(getElement(result,4));


// const example=(celsius)=>(celsius*9/5)+32


// const example2=(fahrenheit)=>(fahrenheit-32)*5/9

// const celsiusTemp=[0,10,20,30,40];
// const fahrenheitTemp=celsiusTemp.map(example)

// console.log(fahrenheitTemp);

// let num=[12,5,8,21,16,3,18,9];

// const result=num
// .filter(n=> n=>10)
// .map(n=>n**2)
// console.log(result);

// console.log("starting...");
// setTimeout(()=>{
//     console.log("This appears after 3sec");
    

// },3000)

// console.log("continuing");

// let count=10;
// const time=setInterval(()=>{
// if (count>0){
//     console.log(count);
//     count--;
    
// }else{
//     console.log("Time up!");
//     clearInterval(time);
    
// }
// },1000)

// const person = {
// firstName: "John",
// lastName: "Doe",
// greet: function() {
//     let time=0;
// let sec=setTimeout(()=>{
// console.log(`hello,${this.firstName}${this.lastName}`);

// },2000)
// }
// };
// person.greet()

// function animateText(text){
//          for(let i=1;i<=text.length;i++)
//     setTimeout(()=>{
//         console.log(text.slice(0,i));
        
//     },i*200)}

// animateText("hello")

const timer = {
    seconds: 0,
    intervalId: null,

    start() {
        this.intervalId = setInterval(() => {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    },

    stop() {
        clearInterval(this.intervalId);
    },

    reset() {
        this.seconds = 0;
        console.log("Timer reset to 0");
    }
};

// Example usage
timer.start();  // Starts counting

// Stop after 5 seconds
setTimeout(() => {
    timer.stop();
    console.log("Timer stopped");
}, 5000);

// Reset after 6 seconds
setTimeout(() => {
    timer.reset();
}, 6000);






