



// function sayHi(){
//     console.log('Hello');
// }
//  sayHi();


//  let username = 'Mevlüt'

//  function sayHi(name = 'New User'){
//      console.log(`Hello ${name}`);
//  }
//  sayHi()
//  sayHi(username)
//  sayHi('Mark')

// function sayHi2(name){
//     return ('Hello ' + name)

// }
// console.log(sayHi2('Matthew'));
// sayHi2()

// console.log(add100(23, 12));
// function add100(num1,num2 = 0){
//     return num1+num2
// }

// let square = function(a){return a*a};
// console.log(square(3));

// function square(num1){
//     num1 *= num1;
//     return num1;

// }
// let myNum = 4;

// console.log(square(myNum));
// console.log(myNum);

let student = {};
student.name = 'Mesut'
function sayHi3(student){
    console.log(`Hello! ${student.name} from entry point`);
    student = {name : "Leon"};
    console.log(`Hello! ${student.name} inside function`);
}
sayHi3(student)
console.log(`Hello! ${student.name} from outside`);