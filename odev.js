// // ASAL SAYI BULMA

// function myFunc(...numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//       if(numbers[i] % 2 == 0) {
//           console.log("Asal sayı değildir")
//       }else {
//           console.log("asal sayıdır")
//       }

//   }
// }

// ARKADAŞ SAYI BULMA

// let total1 = 0;
// let total2 = 0;
// //  let num1 = prompt("İLK SAYIYI GİRİNİZ")
// //  let num2 = prompt("İKİNCİ SAYIYI GİRİNİZ")

// function friendNumber(num1, num2) {
//   for (let i = 0; i < num1; i++) {
//     if (num1 % i == 0) {
//       total1 = total1 + i;
//     }
//   }
//   for (let i = 0; i < num2; i++) {
//     if (num2 % i == 0) {
//       total2 = total2 + i;
//     }
//   }


//   if(total1 == num2 && total2 == num1) {
//       console.log("bu sayılar arkadaştır")
//   } else {
// console.log("bu sayılar arkdaş değildir")
//   }
// }

// friendNumber(220,284);




// //MÜKEMMEL SAYILARI BULMA
// let total = 0; 

// function superCount(num) {
//     for (let i = 0; i <= num; i++) {
//         if(num % i == 0) {
//             total += i 
//         }
//     }
// console.log(total)
// }
// superCount()



//1000e kadar OLAN BÜTÜN ASAL SAYILAR LİSTESİ
// for (let i = 0; i <= 1000; i++) {
//     if(i % 2 !== 0) {
//         console.log(i)
//     }
    
// }