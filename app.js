// let son = 20;
// son = son + 5;
// son -= 3;
// son *= 4;
// console.log(son);

// console.log(Number("33"));
// console.log(Number("ff8"));

// let son = 33;
// son++;
// console.log(--son);
// console.log(son);

// let son = 111;
// son *= 67;
// console.log(son);
// console.log(isNaN(son));
// let a= "ff"/4
// if (typeof a === "number"){
//     console.log(ha)
// }else{
//     console.log("
// }

// let parol = prompt("parolni kiriting");
// if (isNaN(parol) === true) {
//   console.log("parol ornatildi");
// } else {
//   console.log("parol notogri");
// }
// =======================================================================================
// 1-masala. Sonlarni chiqarish
// Qiyinlik: 1/10
// for loop yordamida 1 dan 10 gacha bo‘lgan sonlarni konsolga chiqaring.
// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }
// ==============================================================================================
// 2-masala. Juft sonlar
// Qiyinlik: 2/10
// 1 dan 30 gacha bo‘lgan sonlar orasidan faqat juft sonlarni konsolga chiqaring

// for (let i = 2; i <= 30; i += 2) {
//   console.log(i);
// }
// ==============================================================================================
// 3-masala. Sonlar yig‘indisi
// Qiyinlik: 3/10
// 1 dan 50 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang.

// let count = 0;
// for (let i = 1; i <= 50; i++) {
//   count += i;
// }
// console.log(count);
// console.log("for yakunlaydi");
// ===============================================================================================
// 4-masala. Toq sonlar yig‘indisi
// Qiyinlik: 4/10
// 1 dan 100 gacha bo‘lgan toq sonlarning yig‘indisini hisoblang va natijani konsolga chiqaring.
// let sum = 0;
// for (let i = 1; i <= 99; i += 2) {
//   sum = sum + i;
// }
//   console.log(sum);
//================================================================================================
// 5-masala. 3 ga bo‘linadigan sonlar
// Qiyinlik: 5/10
// 1 dan 100 gacha bo‘lgan sonlar ichidan 3 ga qoldiqsiz bo‘linadigan sonlarni chiqaring. Shu
// sonlarning nechta ekanini ham aniqlang.
// let count = 0;
// for (i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//     count++;
//   }
// }
// console.log("Soni:", count);
// =============================================================================================
// 6-masala. Sonning ko‘paytirish jadvali
// Qiyinlik: 5/10
// let number = 7 deb o‘zgaruvchi yarating. Loop yordamida shu sonning 1 dan 10 gacha ko‘paytirish
// jadvalini chiqaring.

// let number = 7;
// for (i = 1; i <= 10; i++) {
//   console.log(number * i);
// }
// ==============================================================================================
// 7-masala. Musbat va manfiy sonlar
// Qiyinlik: 6/10
// let number = -15 deb o‘zgaruvchi yarating. Agar son musbat bo‘lsa, 1 dan shu songacha bo‘lgan
// sonlarni chiqaring. Agar son manfiy bo‘lsa, uning modulini aniqlab, 1 dan shu songacha bo‘lgan
// sonlarni chiqaring. Agar son 0 bo‘lsa, “Son nolga teng” xabarini chiqaring.

// let number = -15;
// if (number > 0) {
//   for (i = 1; i <= number; i++) {
//     console.log(i);
//   }
// } else if (number < 0) {
//   number = -number;
//   for (i = 1; i <= number; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("son nolga teng");
// }
// ============================================================================================
// 8-masala. Raqamni topish
// Qiyinlik: 6/10
// let secretNumber = 8 deb belgilang. 1 dan 10 gacha bo‘lgan sonlarni loop yordamida tekshiring. Son
// secretNumber ga teng bo‘lsa, “Son topildi” deb chiqaring. Qolgan sonlar uchun “Bu son emas” deb
// chiqaring.
// let secretNumber = 8;
// for (i = 1; i <= 10; i++) {
//   if (i === secretNumber) {
//     console.log("son topildi");
//   } else {
//     console.log("bu son emas");
//   }
// }
// ===================================================================================================
// 9-masala. Sonning raqamlarini sanash
// Qiyinlik: 7/10
// let number = 58324 soni berilgan. Uning nechta raqamdan iborat ekanini loop yordamida aniqlang.
// let number = 58324;
// let count = 0;
// for (; number > 0; number = Math.floor(number / 10)) {
//   count++;
// }
// console.log(count);
// =====================================================================================================
// 10-masala. Mukammal sonni aniqlash
// Qiyinlik: 8/10
// Mukammal son — o‘zidan tashqari barcha musbat bo‘luvchilarining yig‘indisi o‘ziga teng bo‘lgan son.
// Masalan, 6 mukammal son, chunki 1 + 2 + 3 = 6. let number = 28 deb o‘zgaruvchi yarating va loop
// yordamida bu son mukammal yoki mukammal emasligini aniqlang.
// Kutilgan natija: “Bu mukammal son”. Shart: for, if va % operatorlaridan foydalaning

let number = 28;
let sum = 0;
for (let i = 1; i < number; i++) {
  if (number % i === 0) {
    sum = sum + i;
  }
}
if (sum === number) {
  console.log("mukammal son");
} else {
  console.log("mukammal emas");
}
