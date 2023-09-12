// Ternary operator

// let age = 18; 
// let check = (age>=18)? 'you can vote': 'you can not vote';
// console.log(check);

// Logical computation

// let age =  50;
// console.log( (false || false || 23)&& false );
// console.log( (false || false || 23)&& true );

//Control statement 

// 1. for loop

// for(let i = 1; i<=100; i++){
//     console.log(i);
// }

// 2. While loop

// let i = 1; 
// while(i<=100){
//     console.log(i);
//     i++;
// }

// 3. do while loop

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=100);


// // factory function 

// function empl(name){
//     return employee_data = {
//         Name: name,
//         Expertise: "web development",
//         details: function(){
//             console.log('Employee'+ " " + employee_data.Name + " " + 'and i have expertise in'+ " " + employee_data.Expertise);
//         }
//     };
// }

// let emp1 = empl("Rahul");
// console.log(emp1.details());

// Constructor function

// function Rectangle(){
//     this.length = 10;
//     this.breadth = 20;
//     this.area = function(){
//         console.log('Area of Rectangle is '+ " " + this.length*this.breadth);
//     }
// }


// const Constr = new Rectangle();
// Constr.dimension = "20'40";
// console.log(Constr);


// console.log(`constr.constructor is ${Constr.constructor}`);
// console.log(`Rectangle.constructor is ${Rectangle.constructor}`);



// let Rect = new Function(`length`, `breadth`,`function Rectangle(){
//     this.length = 10;
//     this.breadth = 20;
//     this.area = function(){
//         console.log('Area of Rectangle is '+ " " + this.length*this.breadth);
//     }
// }`);

// console.log(Rect);



// differce between primitives and refrences in javascript

//Primitives are copied by their values and refrences are copied by their addresses
// 1. Primitives

//  var a = 3;
//  var b = a;
// a++;
// console.log(a);
// console.log(b);

// 2. Refrences 

// let c = {
//     value: 4,
//     length:5
// };

// let d = c;

// c.value++;
// c.length++;
// console.log(c);
// console.log(d);

// Object cloning using :-
// 1. Iteration 
// 2. using assign method
// 3. using spread method

// 1. Iteration 

// let Rect = {
//     length: 3,
//     breadth: 5
// };
// let dest = {};
// for(let keys in Rect){
//     dest[keys] = Rect[keys];
// }
// console.log(dest);


// 2. using assign method

// let dest = Object.assign({} , Rect);
// console.log(dest);

// 3. using spread operator

// let dest = {...Rect};
// console.log(dest);