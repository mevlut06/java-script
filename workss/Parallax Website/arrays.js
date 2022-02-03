


// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

// // console.log(s.replace('dummy', 'Hello'));
// //  var str = s.replace('dummy', 'Hello')

// //  console.log(str);
// //  console.log(s);

// console.log(s.replace(/Dummy/i, 'Hello'));//regax ile case sensitive

// console.log(s.replace(/e/g, '--'));//regax ile tumunu degistir.

//search


// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry. text";


// console.log(s.indexOf('text', 30));
// console.log(s.search('text'));
// console.log(s.search(/Text/i));

//slice

// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

// console.log(s.slice(0,5));
// console.log(s.slice(6));
// console.log(s.slice(12, -10));


//split

// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

// console.log(s.split(""));
// console.log(s.split(" "));
// console.log(s.split("e"));
// console.log(s.split());

//substr

// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";


// console.log(s.substr(22, 10));
// console.log(s.substr(22));

//substring

// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

// console.log(s.substring(22));
// console.log(s.substring(22, 33));
// console.log(s.substring(33, 22));
// console.log(s.substring(6, 0));

//toLowercase touppercase

// var pangram = "Pijamalı hasta yağız şoföre çabucak güvendi.";

// // console.log(pangram.toUpperCase());
// // console.log(pangram.toLocaleUpperCase('tr-TR'));

// var Pangram = pangram.toLocaleUpperCase('tr-TR');

// console.log(Pangram.toLocaleLowerCase());
// console.log(Pangram.toLowerCase());

// //trim

// var s ="                   <-Welcome \t  to Claru\tsway->             "
// console.log(s);

// console.log(s.trim());
// console.log(s.trimLeft());
// console.log(s.trimRight());

// var cars = ["Opel", "Audi", "BMW"];
// console.log(cars);

// var cars2 = Array.of("Opel", "Audi", "BMW")
// console.log(cars2);

// var cars3 = new Array("Opel", "Audi", "BMW")
// console.log(cars3);

// const cars = ["Opel", "Audi",[1,2,true], "BMW"];

// console.log(cars[0]);

// console.log(cars[2][2]);
// cars[2] = 'Mercedes'
// console.log(cars);

// cars[cars.length]= 'Ferrari'
// console.log(cars);

// console.log(cars[4]);


// const cars = ["Opel",, "Audi",,,, "BMW"];

// console.log(cars);

// const cars = ["Opel", "Audi", "BMW"];

// console.log(typeof cars);
// console.log(cars instanceof Array);
// console.log(Array.isArray(cars));

//length

// const fruits = ["Banane", "Orange", "Apple"];

// fruits[6] ="Lemon"

// console.log(fruits);
// console.log(fruits.length);

//concats


// const fruits = ["Banana", "Orange","Lemon"];
// const vegetables = ['Broccoli','Celery','Parsley','Artichoke']

// // console.log(fruits.concat(vegetables));
// // console.log(fruits.concat('Fig', 3, 'Pear'));

// console.log('' + fruits);
// console.log(fruits.toString());
// console.log(fruits + vegetables);

//sort

const daltones = ['Joe','Jack','William','Avarel']

// console.log(daltones.sort());

// const num = [40, 100, 1, 5, 25, 10];

// console.log(num.sort());//string olarak siralar

// console.log(num.sort((a,b) => a - b));

// console.log(daltones.reverse());//orjinali degistirir
// console.log(daltones);

//push

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Pears");
// console.log(fruits);
// fruits.push("Pears", "Pineapple",2);
// console.log(fruits);

// console.log(fruits.pop());// son elemani siler 
// console.log(fruits.pop());
// console.log(fruits.pop());

// console.log(fruits);

//shift unshift

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // const deleted = fruits.shift()
// // console.log(deleted);
// // console.log(fruits);

// const uns = fruits.unshift('Pears','Fig', 2, [1,2,'a'])
// console.log(uns);
// console.log(fruits);

//splice

// var names = ["John","Edward","Victor"]
// var deleted = names.splice(2,1,"Mark","James")
// console.log({deleted});
// console.log(names);

//slice

// const months = ['Jan', 'March', 'April', 'June',"july"];
// const springs = months.slice(1,3)
// const springs1 = months.slice(-4,-2)
// const springs2 = months.slice(2,-6)

// console.log(springs);
// console.log(springs1);
// console.log(springs2);
// console.log(months);

//indexof lastindexof

const colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
const x = colors.indexOf("Green", 6)
console.log(x)


const colors2 = ["Red", "Yellow", "Green", "Blue", "Green","Red","Yellow","Blue"];
const last = colors2.lastIndexOf("Blue")
console.log(last)
