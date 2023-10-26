// let dollar = +prompt("Slom hurmatli mijoz!\nHozirgi dollar kursini kiriting");
// let yevro = +prompt("Hozirgi yevro kursini kiriting");
// let mijoz_mablagi = +prompt("Sayohat uchun qancha mablag'ingiz borligini kiriting");

let dollar = Math.floor(Math.random() * (13000 - 10000 + 1) + 10000);
let yevro = Math.floor(Math.random() * (15000 - 12000 + 1) + 12000);
let mijoz_mablagi = Math.floor(Math.random() * (45000000 - 1000000 + 1) + 1000000);

let ticket = 350; // dollarda
let living = 500; // dollarda
let picnic = 300; // yevroda
let umumiy_sayohat_summasi = (ticket + living + (picnic * yevro / dollar)) * dollar;  // so'mga o'girildi

alert("1 dollar = " + dollar + " so'm" + "\n1 yevro = " + yevro + " so'm" + "\n\nUmumiy sayohat summasi = " + umumiy_sayohat_summasi + "\nSizning mablag'ingiz = " + mijoz_mablagi);


if (mijoz_mablagi >= umumiy_sayohat_summasi) {
	alert("Sizning mablag'ingiz sayohat uchun yetarli\n\nOq yo'l tilaymiz!")
} else {
	alert("Afsus sayohat uchun sizning mablag'ingiz yetmas ekan");
}