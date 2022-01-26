

// let score = +prompt('Notunuzu girin :')

// let score = 70

// let grade = score >= 50

// if (grade)console.log("Tebrikler, notunuz  ${score} gectiniz");

// if (grade){
//     console.log('Tebrikler, notunuz ${score} gectiniz');
// } else {
//     console.log('Uzgunum kaldiniz');
// }
//  if (score > 80){
//      console.log('Tebrikler cok basarili bir ogrencisiniz');
//  }else if(score >= 50){
//      console.log(`Tebrikler notunuz : ${score} gectiniz`);
//  }
 
 
 
//  else {
//      console.log('Uzgunum kaldiniz');

// let score = 15

// if (score >= 50){

//     if(score > 80){
//         console.log('Tebrikler cok basarili bir ogrencisiniz');
//     }else {
//         console.log(`Tebrikler Gectiniz`);
//     }

// }else{
//     console.log('Uzgunum Kaldiniz');
// }

// let score = 49;
// score >= 50 ? console.log('Tebrikler gectiniz') : console.log('Uzgunum kaldiniz');



// var text;
// // var fruits = 'Lemon';
// var fruits = prompt("Enter your favorite fruit :")

// //toLowercase
// switch (fruits.toLowerCase()) {
//     case "banana":
//         text = "Banana is good"
//     break;
//     case "lime":
//     case "lemon":
//     case "orange":
//         text = `I am not a fan of ${fruits.toLowerCase()}.`;
//     break;
//     case "apple":
//         text = "How you like them apples?";
//     break;
//     default:
//         text = "I have never heard of that fruit...";
//         break;
// }
// console.log(text);

// var text;
// var gun = prompt("Enter your day :")
// switch (gun.toLowerCase()) {
//     case "pazartesi":
//     case "carsamba":
//     case "persembe":
//     case "cumartesi":
//         text = ` ${gun.toLowerCase()} gunu ders var.`;
//         break;
//     case "sali":
//     case "cuma":
//         text = ` ${gun.toLowerCase()} gunu teamwork var.`;
//         break;
//      case "pazar":
//         text = ` ${gun.toLowerCase()} gunu tatil.`;
//         break;
//     default:
//         text = " Yanlsi gun girildi";
//         break;
// }
// console.log(text);


var year = 2152;
var month = 2;
var dayCount;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0))
            || (year % 400 == 0))
            dayCount = 29;
        else
            dayCount = 28;
        break;
    default:
        dayCount = -1; // invalid month
}
console.log(dayCount); // 29