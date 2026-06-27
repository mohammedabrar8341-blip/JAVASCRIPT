// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// for (let i=2;i<=20;i+=2){
//     console.log(i)
// }

// for (let i=10;i>=1;i--){
// console.log(i)

// }
// console.log("Blast off!")

// for(let i=1;i<=10;i++){
// console.log( `7X${i}=${i*7}`)
// }

// let n=20;
// let sum=0;
// for (let i=1;i<=20;i++){
//     sum+=i
// }
// console.log(sum)

// for (let r=1;r<=4;r++){
//     let line="";
//     for (let c=1;c<=4;c++){
//         line+=c+"";
//     }console.log(line)
// }

// let row=5;
// for (let star=1;star<=5;star++){
//            let pattern="*"
//            for (j=1;j<=5;j++){
//             pattern+="*"
//             }   
// console.log(pattern)
// }

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++
// }

// let sum=0;
// let num=1;
// while(sum<50){
//   sum+=num;
 
//   num++;
// }
//  console.log(`ADD:${num}`);
//  console.log(`SUM:${sum}`)

// let input;
// do{
//   input=prompt("Enter your menu");
//   if (input==="hello"){
//     console.log("Hello to you too!");
//   }else if(input==="exit"){
// console.log("Goodbye");
//   }
// }while(input!=="exit");

// for (i=1;i<=100;i++){
//   if((i%3==0) &&(i%5==0)){
//     console.log(`First num div by both 3&5 is:${i}`)
//      break;
//     } 
//   }

// for (let i=1;i<=10;i++){
//   if(i==3||i==6||i==9){
    
//     continue;
    
//   }
//  console.log(i)
// }

// let cities=["mumbai","delhi","chennai","hyderabad"];

// for (let i=0;i<=cities.length-1;i++){
//   console.log(i,cities[i])
// }

// let sum=0;
// let num=[10,25,30,45,20];
// for(let i=0;i<=num.length-1;i++){
//   sum+=num[i]
//   }
// console.log(sum);

// let scores=[78,92,85,99,88,76];
// let max=scores[0];
// for (i=0;i<=scores.length-1;i++){
//   if (scores[i]>max){
//     max=scores[i]
//   }
// }
// console.log(max);


// let teams=[
//   ["alice","bob"],
// ["charlie","david"],
// ["eve","frank"]];
// for (i=0;i<=teams.length-1;i++){
//   for (j=0;j<=teams[i].length-1;j++){
// console.log(teams[i][j]);

//   }
// }

// let fruits=["apple","banana","orange","mango"];
// for (let fruit of fruits){
//   console.log(fruit)
// }

//  let words="LOOP";
//  for (let chr of words){
//     console.log(chr)
//  }

// let sentence="Javascript is awasome";
// let vowel="aeiou";
// let count=0;

// for (let char of sentence.toLowerCase()){
//   if (vowel.includes(char)){
//     count++;
//   }
// }console.log(count)

for (let i=1;i<=30;i++){
  if (i*3){
    console.log("Fizz");
    
  }else if (i*5){                           18
    console.log("Buzz");
    
  }
}console.log(i)