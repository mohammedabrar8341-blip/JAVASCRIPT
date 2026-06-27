// let car={
//     brand:"Tesla",
//     model:"Model 3",
//     year:2024,
//     color:"white",
//     };console.log(car.brand,car.year);

// let movie={
//     title:"Inception",
//     director:"Christopher Nolan",
//     year:2010,
//     rating:8.8

// };
// console.log(movie["director"],movie.rating);

// let std={
//     name:"John",
//     age:20,
//     grade:"B"
// };
// std.grade="A";
// std.city="Mumbai";
// delete std.age
// console.log(std);
// ;

// let product={
//     name:"Laptop",
//     price:50000,

// }
// product.price=45000;
// product.brand="Dell";
// product.inStock=true
// console.log(product);

// let classroom={
//     teacher:{name:"Ms.smith",subject:"Maths"},
//     student1:{name:"Alice",grade:"A"},
//      student2:{name:"Bob",grade:"B+"}
// };
// console.log(classroom.teacher.name);
// console.log(classroom.student1.grade);
// console.log(classroom.student2.name);

// let company={
//     enginnering:{employees:40,manager:"John"},
//     sales:{employees:25,manager:"sarah"}
// };
// console.log(company.enginnering.employees);
// console.log(company.sales.manager);
// company.enginnering.employees=45
// console.log(company.enginnering.employees)


// let student=[{
//     student1:{name:"Emma",age:20,grade:"A"},
//     student2:{name:"Lian",age:21,grade:"B"},
//     student3:{name:"Oliva",age:19,grade:"A+"}
// }];console.log(student[0].student1.name);
// console.log(student[0].student3.grade);
// console.log(Object.keys(student[0]).length);

// let products=[{
//     product1:{id:101,name:"Phone",price:30000},
//     product2:{id:102,name:"Laptop",price:55000},
//     product3:{id:103,name:"Tablet",price:20000},
// }];console.log(products[0].product2.name);
// console.log(products[0].product1.price)
// console.log(products[0].product4,{id:104,name:"Smart watch",price:15000});
// console.log(Object.keys(products[0]).length);  

// let posts=[{
//     post1:{
//     username:"tech_guru",content:"Learning js",likes:150
//     },
//     post2:{username:"code_ninja",content:"Arrays are awesome",likes:200}
// }];
// console.log(posts[0].post1.content);
// console.log(posts[0].post2.likes);
// posts[0].post1.likes=175
// console.log(posts[0].post1.likes);
 
// let courses=[{
//     course1:{name:"Javascript",Duration:40,instructor:"Joohn"},
//     course2:{name:"Python",Duration:35,instructor:"sarah"},
//     course3:{name:"React",Duration:30,instructor:"mike"}
// }];
// console.log(courses[0].course2.instructor);
// console.log(courses[0].course1.Duration);
// courses[0].course3.Duration=32
// console.log(courses[0].course1);
// console.log(courses[0].course2);
// console.log(courses[0].course3);

// console.log(Math.PI)
// console.log(Math.pow(2,5));
// console.log(Math.abs(-25));

// let num=Math.floor(7.8)
// console.log(num);
// let num2=Math.ceil(7.2)
// console.log(num2);
// let power=Math.pow(3,4)
// console.log(power);
// let abs=Math.abs(-100)
// console.log(abs);

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.random()*100);

// let randomNum=(Math.random());
// let divd5=randomNum*5;
// let divd20=randomNum*20;
// console.log(randomNum);

// console.log(divd5);
// console.log(divd20);

// let step1=Math.random();
// let step2=step1*10;
// let step3=Math.floor(step2);
// let step4=step3+1;
// console.log(step1);
// console.log(step2);
// console.log(step3);
// console.log(step4);

// let num1=(Math.floor(Math.random()*10)+1);
// let num2=(Math.floor(Math.random()*10)+1);
// let num3=(Math.floor(Math.random()*10)+1);
// console.log(num1,num2,num3);

//  let num1=Math.floor(Math.random()*(10-1+1))+1
//  console.log(num1);
//  let num2=Math.floor(Math.random()*(6-1+1))+1
//  console.log(num2);
 
//  let num0=Math.floor(Math.random()*(10-5+1))+5
//  console.log(`Random num:${num0}`);
//   let num1=Math.floor(Math.random()*(100-50+1))+50
//  console.log(`Random num:${num1}`);
//   let num2=Math.floor(Math.random()*(1000-1+1))+1
//  console.log(`Random num:${num2}`);

// let scores=Math.floor(Math.random()*(100-0+1))+0
// console.log(scores);
// let celsius=Math.floor(Math.random()*(40-(-10)+1)+(-10))
// console.log(celsius);
// let price=Math.floor(Math.random()*(500-100+1))+100
// console.log(price);

// let color=["red","green","blue","yellow","purple"];
// const randomIndex=Math.floor(Math.random()*color.length);
// console.log(color[randomIndex]);

// let foods=["Pizza","Burger","Pasta","Sushi"]
// const randomIndex=Math.floor(Math.random()*foods.length)
// console.log(`"Todays special:${foods[randomIndex]}"`);

// let players=[
//     {name:"Alice",scores:0},
//      {name:"Bob",scores:0},
//       {name:"Charlie",scores:0}
// ];
// players[0].scores=Math.floor(Math.random()*(6))+1;
// players[1].scores=Math.floor(Math.random()*(6))+1;
// players[2].scores=Math.floor(Math.random()*(6))+1;
// console.log(players[0]);
// console.log(players[1]);
// console.log(players[2]);

// let product=[{name:"Phone",price:20000,discount:0},
//     {name:"Laptop",price:50000,discount:0}

// ];
// product[0].discount=Math.floor(Math.random()*(20-5+1))+5;
// product[1].discount=Math.floor(Math.random()*(20-5+1))+5;

// console.log(product[0]);
// console.log(product[1]);


let tickets=[];
for (let i=0;i<5;i++){
    let randomIndex=Math.floor(Math.random()*(9999-1000+1))+1000
    tickets.push(randomIndex)
}console.log(tickets);
let winner=Math.floor(Math.random()*(9999-1000+1))+1000
console.log(winner);
















