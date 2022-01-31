
// let student = 'Mustafa';

// function sayHi(studentName){
//     console.log(`Welcome ${studentName}`);
// }

// sayHi(student);


//  let students = ['John', 'Jane', 'Joe'];

// function sayHi(studentName){
//     console.log(`Welcome ${studentName}`);
// }
// sayHi(students)


// function sayHi(student){
//     for (let i = 0; i < student.length; i++) {
//         console.log(`Welcome ${student[i]}`)
//     }  
// }
// sayHi(students)

// function sum(){
//     let sum = 0;
//     console.log(arguments);
//     for (let i = 0; i <arguments.length; i++){
//         sum+= arguments[i]
//     }
//     return sum;
// }
// console.log(sum(1));
// console.log(sum(1,2,3,4,5,6));


// function sum(a,b, ...others){
//     console.log(arguments);
//     console.log(others);
//     let sum = 0;
//     for (let i = 0; i <others.length; i++){
//         sum+= others[i]
//     }
//     return sum * b;
// }

// console.log(sum(1,2,3,4,5,6,7,8));

// const bill = function(item, tax){
//     let total = 0;
//     for(let i =0; i < item.length; i++){
//         total += item[i]+item[i]*tax;
//     }
//     return total;
// }

// console.log(bill([10,15,20],0.18))

// const bill = function(tax, ...list){
//     let total = 0;
//     for(let i =0; i < list.length; i++){
//         total += list[i]+list[i]*tax;
//     }
//     return total;
// }

// console.log(bill(0.18,10,15,20,10))

// function bolme (num1,num2){
//     if(num2 === 0)return "Zero Division Error"
//     9return num1 / num2
// }
// console.log(bolme(12,2));
// console.log(bolme(12,0));

// function div2(num1, num2){
//     return num2 ? num1 / num2 : 'Zero division Error'
// }
// console.log(div2(10,3));

// function pascalNumber1(n){
//     let sum = 0;
//     for(let i = 1; i < n+1; i++){
//     sum += i
//     }
//     return  sum
// }
//  console.log(pascalNumber1(100)); 

// function pascalNumber2(n){
//     return (n* (n+1)/2)
// }
// console.log(pascalNumber2(100));

// function pascalNumber3 (n){
//     if(n === 1) return 1;
//     return n + pascalNumber3(n-1)
// }
// console.log(pascalNumber3(5));

// function pascalNumber4(n) {
//     return n === 1 ? 1 : n + pascalNumber4(n-1);
// }
// console.log(pascalNumber4(5));

// function add100(a){
//     return a + 100;
// }
// // function expression
// let toplam = function (a){return a + 100}

// Arrow Function

// let ahmet = (a) => {
//     return a + 100
// }

// let mehmet = (a) => a + 100

// console.log(mehmet(50));

// let toplam = a => a + 100;
// console.log(toplam(30));

// let user = 'Murat' ;

// let sayHi = () => console.log(`Welcome ${user}`);

// sayHi()

// let toplam2 = (num1, num2) => num1 + num2;

// console.log(typeof toplam2());

// let iife = (function trian(num) {
//     if (num === 1) return 1;
//     return num + trian(num-1);
// })(3);
// console.log(iife);

let nums = 5
let iife2 = (function(num) {
    return num *(num+1)/2;
})(nums);
console.log(iife2);