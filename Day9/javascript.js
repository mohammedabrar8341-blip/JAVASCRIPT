// let numbers=[10,20,30,40]
// numbers.forEach(numbers => {
//     console.log(numbers);
    
    
// });

// let price=[90,149,299]
// price.forEach(price => {
//     console.log(`$${price}`);
    
    
// });

// let fruit=["apple","banana","mango"]
// fruit.forEach((elem,i) => {
//     console.log(elem,i);
    
    
// });

// let scores=[85,90,78,92]
// let total=0;
// scores.forEach((elem) => {
//     total+=elem
    
// });console.log(`Total:${total}`);

// let name=["alice","bob","charlie"]
// let captlizeName=[]
// name.forEach(element => {
//     captlizeName.push(element.toUpperCase())
    
// });
// console.log(captlizeName);

// let Number=[1,2,3,4];
// let double=Number.map((Elem)=>Elem*2);
// console.log(double);
// console.log(Number);

//  let name=["alice","bob","charlie"]
//  let captlizeName=name.map((ele)=>ele.toUpperCase())
//  console.log(captlizeName);

// let std=[
//     {name:"John",age:20},
//      {name:"sarah",age:22},
//       {name:"Mike",age:21}
// ];
// let studentName=std.map((ele)=>ele.name)
// console.log(studentName);

// let price=[100,200,150];
// let tax=price.map((ele)=>ele*1.18)
// console.log(tax);

// let items=["Home","About","Contact"];
// items.map((items)=>
//     console.log(  `<${items}/>`)
// );

// let numbers=[1,2,3,4,5,6,7,8]
// let even=numbers.filter((elem)=> elem%2==0)
// console.log(even);

// let grade=[45,78,89,34,92,56]
// let passing=grade.filter((ele)=>ele>=50)
// console.log(passing);

// let words=["hi","hello","bye","goodbye"];
// let strlength=words.filter((word)=>word.length>3)
// console.log(strlength);

// let people=[
//     {name:"john",age:17},
//     {name:"sarah",age:22},
//     {name:"mike",age:15},
//     {name:"emma",age:25},

// ];
// let adult=people.filter((person)=>person.age>=18)
// console.log(adult);

// let cart=["apple","banana","apple","mango","apple"]
// let remove=cart.filter((item)=>item!=="apple")
// console.log(remove);

// let ages=[20,25 ,18,30]
// let alladlut=ages.every((age)=>age>=18)
// console.log(alladlut );
// let ages=[20,25 ,17,30]
// let alladlut=ages.some((age)=>age>=18)
// console.log(alladlut );

// let fromfields=["John","john@email.com","password123"]
// let allfields=fromfields.every((filed)=>filed.length>0)
// console.log(allfields);

// let numbers=[5,19,-3,20]
// let hasnegative=numbers.some((num)=>num<0)
// console.log(hasnegative);

// let prices=[50,77,120,30]
// let priceAffordable=prices.every((price)=>price<=100)
// console.log(priceAffordable);

// let numbers=[1,2,3,4,5]
// let sum=numbers.reduce((total,num)=>total+num,0)
// console.log(sum);

// let numbers = [45, 78, 12, 89, 34];
// let maximum=numbers.reduce((acc,ele)=>{
//     return ele>acc? ele : acc;
// },0)
// console.log(maximum);

// let fruits = ["apple", "banana", "apple", "mango", "apple"];
// let count=fruits.reduce((counter,fruit)=>{
//     counter[fruit]=(counter[fruit]||0)+1
//     return counter
// },{})
// console.log(count);

// let cart = [
// { item: "Shirt", price: 500 },
// { item: "Shoes", price: 1200 },
// { item: "Hat", price: 300 }]
// let totalCart=cart.reduce((acc,ele)=>acc+ele.price,0)
// console.log(totalCart);

// let nested = [[1, 2], [3, 4], [5, 6]];
// let arr=nested.reduce((acc,ele)=>acc.concat(ele),[])
// console.log(arr);

// function greet(name = "Guest") {
// console.log(`Hello, ${name}!`);
// }greet('abrar')

// function taxRate(amount,taxRate=1){
//     return amount*taxRate;

// }
// console.log(taxRate(1000,1.5));

// function createProfile(name, age = 18, country = "India") {
// return { name, age, country };
// }
// console.log(createProfile("abrar"));
// console.log(createProfile('priya',25,"UAE"));

// function power(base, exponent = 2) {
//     return base**exponent}
//     console.log(power(2,3));
    
// function getSlice(arr, start = 0, end = arr.length) {
// return arr.slice(start, end);
// }
// let arr=[1,2,3,4,5]
// console.log(getSlice(arr));
// console.log(getSlice(arr,3));
// console.log(getSlice(arr,2,4));

// let arr1=[1,2,3];
// let copy=[...arr1]
// console.log(copy);
// console.log(arr1);
// copy.push(4)
// console.log(copy);
// console.log(arr1);

// let fruits = ["apple", "banana"];
// let vegetables = ["carrot", "potato"];
// let food=[...fruits,...vegetables]
// console.log(food);

// let numbers = [2, 3, 4];
// let addnum=[1,...numbers,5,6]
// console.log(addnum);
// numbers.push(7)
// console.log(numbers);
// console.log(addnum);

// let user = {
// name: "Tony Stark",
// email: "tony@stark.com"}

// let update={...user,city:"New york",email:"ironman12@gamil.com"}

// console.log(update);

// let greet="HELLO";
// let updategreet=[...greet];
// console.log(updategreet);

// function sum(...numbers) {
// return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1,2,3));

// announce=(first,...others)=>{
//     console.log(`Winner ${first}`);
//     console.log(`Others ${others}`);
     
// }
// announce("Abrar","Rahman","Atif","Saleem")

// function creatteam(captain,voicecaptain,...players){
//     return {captain,
//         voicecaptain
//         ,players
//     }

// }
// let team=creatteam("Virat","Rohit","Msd","Ronaldo","Messi")
// console.log(team);

// function maxnum(...nums){
//     return Math.max(...nums)
// }
// console.log(maxnum(45,76,89));

// function mult(multiple,...Number){
//     return  Number.map((num)=>multiple*num)
// }
// console.log(mult(2, 1, 2, 3, 4));
// console.log(mult(10, 5, 6, 7));

    // let colors = ["Red", "Green", "Blue"];
    // let  [first,second,third]=colors;
    // console.log(first);
    // console.log(second);
    // console.log(third);

    // let numbers = [1, 2, 3, 4, 5];

    // let [,,third,four,five]=numbers
    // console.log(third)
    // console.log(four);
    // console.log(five);

    // let a=10;
    // let b=20;
    // let [first,second]=[b,a];
    // console.log(first);
    // console.log(second);

    // let [a = 5, b = 10] = [1];
    // console.log(a);
    // console.log(b);

    // let scores = [95, 87, 92, 78, 85];
    // let[first,...remanning]=scores;
    // console.log(first);
    // console.log(remanning);

    // let std={
    //     name:"rahul",
    //     age:20,
    //     grade:"A"
    // };
    // let {name,age,grade}=std
    // console.log(name);
    // console.log(age);
    // console.log(grade);

    //     let user={
    //     name:"karan123",
    //     email:"karan@example.com"
    // };
    // let {name:id,email:mail}=user

    // console.log(id,mail);

    // let setting={
    //     theme:"dark"
    // }
    // let {theme,language="english"}=setting
    // console.log(theme,language);
    
    // let person={
    //     name:"John",
    //     address:{
    //         city:"mumbai",
    //         pin:40001
    //     }
    // };
    // let {name,address:{city,pin}}=person

    // console.log(name);
    // console.log(city);
    // console.log(pin);
    
    // function displayUser({name,age,country="India"}){

    // console.log(`${name} is ${age} years old from ${country}`);
    
    // }
    // displayUser({name:"ABRAR",age:20});
    //     displayUser({name:"MAR",age:21,country:"USA"})
    
    
    
    


    
    
    
    
    
    
    
    










