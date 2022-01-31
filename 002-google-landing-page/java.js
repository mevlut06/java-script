
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

const bill = function(tax, ...list){
    let total = 0;
    for(let i =0; i < list.length; i++){
        total += list[i]+list[i]*tax;
    }
    return total;
}

console.log(bill(0.18,10,15,20,10))