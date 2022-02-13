
// // const x = 250;
// // if (x <170){
// //     console.log("X is positive");
// // } else if (x===0){
// //     console.log("x is 0")
// // } else{
// //     console.log("x is negative")
// // }


// // const word ="hippopotamus"
// // word[0]=="h"? console.log("The word might be hippopotamus"): console.log("The word is definetly not hippopotams");

// // let fruit = "Strawberry";
// // switch(fruit){
// //     case "banana": console.log(" this is a banana");
// //     break;
// //     case"Apple": console.log("this is an Apple");
// //     break;
// //     case'Strawberry': console.log('this is Strawberry');
// //     break;
// //     default: console.log('fruit not found')
// // }

// // for(let i=1; i<=10; i++){
// //     console.log(i);
// // }

// // for ( let i=10; i>=1;i--){
// //     console.log(i)
// // }
// // let myString="responsiveness"
// // for(let i=0; i<=10; i=i+1)
// // console.log(myString[i]);

// // excersise 5
// // const myString='i!a!m!!a!s!t!r!i!n!g'
// // for( i=0; i<myString.length; i++){
// //     let A = myString[i];
// //     if(A ==='!'){
// //         continue;
// //     }
// //     console.log(A);
// // }
     



// // // excersise 4
// // let myString = 'Java$cript'

// // for(i=0; i<myString.length; i++){

// // let A=myString[i];

// // if(('!'=== A)||
// //    ('@'=== A)||
// //    ('$' === A))
// // {
// //     console.log('error msg due to symbol');
// //     break;
// // }

// // console.log(A);
// // }

// // function myFirstFunction(){
// //     console.log("i just called my function");
// // }
// // myFirstFunction();
// // //function parameter
// // function funcWithPara(num1, num2){
// //     console.log(num1+num2)
// // }
// // funcWithPara(13,54);

// // function myName(first, last){
// //     console.log ("My name" + " " +first + " " +last);
// // }
// // myName("Nisha", "Chottath");

// function empty(string){
//     if(string ===""){
//         console.log("False")
//     } else{ console.log("True")}
//     }
//     empty("Java")
//     empty("")


// function sum(firstNam, secName){
//     return firstNam + secName;
// }
// console.log(sum(1,2));

// const hello = (string1, string2) => {
//     return string1 +" "+ string2
// }
// console.log(hello('Apple', 'Sauce'))

// const phraseOne =  'The exact phrase she use was \"There is no way we will get there in time\" ';
// const PhraseTwo = 'Jane\'s favorite class is English';

// console.log(phraseOne)
// console.log(PhraseTwo)

// const a = 'Concentrate all your thoughts';
// const b = 'upon the work in hand.The sun\'s rays do not burn';
// const c = 'until brought to a focus.';
// const d = '- Alexander Graham Bell';

// const myString = a +''+' '+b+' '+c+d
// console.log(myString + " "+ myString.length);

// // function myName(first, last){
// //     console.log ("My name" + " " +first + " " +last);
// // }
// // myName("Nisha", "Chottath");

// Exmp = prompt("sentence")

// function messageCaseConverter(Exmp){
//     string = Exmp.trim(Exmp)
//     if(Exmp.length<=10){
//         string = Exmp.toUpperCase()

//     } else if(Exmp.lenghth>10){
//         string=Exmp.toLowerCase()

//     }
//     alert(Exmp)
// }

// messageCaseConverter(Exmp)

//numbers ex 5 .1

// const x = 50
// function halfNumber(){
//     z = x / 2;
// }
// console.log("Half of" + x +'is'+ z);

// halfNumber(x);

// const num = 50

// function halfNumber (){
//     halvednumber = num / 2;
//     console.log('Half of'+ num+'is'+halvednumber)
// }

// halfNumber(num)

//Objects ex 1

// const person = {
//     firstName: 'Nisha',
//     lastName:'Chottath'
// };
// console.log(person.firstName+' '+ person.lastName);

//ex 2

// const rectangle={
//     length: 20,
//     width: 40
// };

// const areaRec = rectangle['length'] * rectangle['width'];

// console.log (areaRec)

// //ex 3

// const person = {
//     firstName: 'Nisha',
//     secName: 'Chottath',
//     favNum:3,
//     favDay:'Friday'
// }
// console.log(person);
// person.favFood = "Pizza";
// console.log(person);
// delete person.favDay
// person.favNum = (person.favNum*2);
// console.log(person);


//ex 4

// const myFavNum = {
//     firNum:3,
//     secNum:6,
//     ThrNum:9,
// };
// let sum = 0;
// for (const key in myFavNum){
// sum = sum +myFavNum[key];
// };
// console.log(sum, myFavNum);

//ex 4.1
// const user = {
//     name:'John',
//     age: 5,
//     isAdmin: true
// };

// for ( key in user){
//    if(key === 'age'){
//     console.log (user[key]);
// }
// }

//Arrays

// const favFruit = ['Cherry','Mangoes','Lychee','Grapes'];
// console.log(favFruit);
// favFruit[4] = 'Orange';// if you wanna add something in array
// console.log(favFruit)

//ex6

// const myFavNums = [5, 6, 7, 8, 9, 10];let sum = 0;for (let i = 0; i < myFavNums.length; i++) {  sum = sum + myFavNums[i];}console.log("The sum of the array is",sum);const average = sum/myFavNums.length;console.log("The average is",average);

//my solution -  let sum = 5+6+7+8+9+10
// let sum = num.length
// let avg = sum/num.length

// console.log (avg);

//ex7
// const favRecp = {
//     title : 'french toast',
//     servings: 2,
//     ing : ['eggs', 'bread','vanilla','sugar']
// }
// console.log (favRecp, favRecp.ing.length)

// favRecp.ing.push('water');
// console.log (favRecp);
 
// //var scope & regex = regular expression

// const regex = /!/g
// const str = 'thi is !'


//for each array
// const color = ['black','blue','yellow','white'];


// color.forEach((color)=>console.log(color));

//Arry map not complete

// const num =[5,6,7,8,9,10];

// const numMap = num.map(num => num*3);
// console.log(numMap)

//includes not complete

// const favFood = ['pizza', ' cake', 'orange'];
// const foodItem = (bestFood,foods) => foods.includes(bestFood);
// foodItem('cake', favFood)


//sort method ex 1.A
// const characters = [
//     { name: 'Peter Griffin', birthdate: 2000, death: 2054 },
//     { name: 'Tom Sawyer', birthdate: 1900, death: 1945},  
//     { name: 'Bart Simpson', birthdate: 1989, death: 2017 }];
//solution
// const old = characters.sort((a,b) => a.birthdate - b.birthdate)

// console.log (old)

//ex 1.B
//solution

// const death = characters.sort ((a,b) => a.death - b.death);
// console.log(death)

//ex 1.C
//solution different
// const firstName = (sortFirst) =>{
//     return sortFirst.sort((a,b) => a.name - b.name);
// } 
// console.log(firstName(characters));

//filter

// const unFiWords = ['Hello', 'Learning','JavaScript','Bye'];
// console.log (unFiWords.filter(item => item.length>4))


//filter ex
// const exmp = [ {"userId": 1,    
// "id": 1,    
// "title": "delectus aut autem",   
//  "completed": false}, 

//   {"userId": 1,   
//    "id": 2,    
//    "title": "quis ut nam facilis et officia qui",    
//    "completed": true}, 

//     {"userId": 1,    
//     "id": 3,   
//      "title": "fugiat veniam minus",    
//      "completed": false}, 

//       {"userId": 1,    
//       "id": 4,    
//       "title": "et porro tempora",    
//       "completed": true}, 
      
//       {"userId": 1,   
//        "id": 5,   
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",    "completed": false}
//     ]

// const arr = exmp.filter(item => item.completed ===true);
// console.log (arr)

//Splice ex

// const originalNum = [0,1,2,3,4,5,6,7,8,9];
// console.log(originalNum)
// originalNum.splice(3,5);
// console.log (originalNum)



// methods
// const per = {
//     nameFirst:'Nisha',
//     nameSecond:'Chottath',
//     id:41564,

//    hello: function(){
//        return "Hello Nisha Chottath";
//    }
// };

// console.log (per.nameFirst);
// console.log (per.hello());


// this keyword
// const per = {
//     nameFirst:'Nisha',
    
//     id:41564,

//    hello: function(){
//        return "Hello" + this.name;
//    }
// }

// console.log (per.hello());

// per.name = "Jane";

// console.log (per.name());

//example 2 this keywork
// const person = {
//         nameFirst:'Nisha',
//         nameSecond:'Chottath',
//         hello: function(){
//             console.log ('Hello:' + this.nameFirst+ ' '+ this.nameSecond);
// }
// };

// function greet(){
//     console.log('Hello:' + this.nameFirst +' '+ this.nameSecond);
// }

// persons.hello();
// nameFirst = "Jane";
// nameSecond = "Doe";
// window.greet();


// Object Oriented Programming

// class User {

//     constructor(first,last){
//         this.firstName = first;
//         this.lastName = last;
//     }
// different method
//     greet(){
//         console.log('Hello'+' ' + this.firstName+ ' ' + this.lastName);
//     }
// };
// const otto = new User ('John', 'Snow');
// otto.greet();
// different ends

// const user1 = new User('John', 'Snow')
// console.log (user1);
// console.log(user1.firstName, user1.lastName);

// const user2 = new User('Ned', 'Stark')
// console.log (user2);
// console.log(user2.firstName, user2.lastName);


//Getter method

// const person = {
//     fName: 'Nisha',
//     lName: 'Chottath',
//     get name() {
//         console.log('A name is just called');
//         return this.fName + ' ' + this.lName;
//     }
// };

// console.log (person.name);

// const bankDetails = {
//     bank: 12,
//     branch: 1234,
//     account: 1234567,
//     suffix: 99,
//     get bankNumber(){
//        return (this.bank +'-'+ this.branch +'-'+ this.account +'-'+ this.suffix);   
//     },
    
//     set newSuffix(suffix){
//         this.suffix = suffix;
//     }
// };
// console.log(bankDetails.bankNumber)

const divideNums = (num1, num2 = 1) => { 
     return num1 / num2;
    };
console.log(divideNums(6, 3));
console.log(divideNums(3))
  