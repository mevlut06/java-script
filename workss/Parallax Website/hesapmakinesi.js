

let sayi1 = +prompt("1.sayiyi giriniz.")
let sayi2 = +prompt("2.sayiyi giriniz.")
let operator = prompt("operator giriniz")

switch (operator){
    case "+" :
        result = sayi1 + sayi2
        break; 
    case "-" :
        result = sayi1 - sayi2
        break;
    case "*" :
        result = sayi1 * sayi2
        break; 
    case "/" :
        result = sayi1 / sayi2
        break; 
        
    default:
        console.log('gecersiz operator');
        break;
}
console.log(result);