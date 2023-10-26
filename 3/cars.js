let cars = [
  "BMW",
  "TOYOTA",
  "HONDA",
  "HYUNDAI",
  "FORD",
  "BUGATTI",
  "FERRARI",
  "PORSCHE",
];
let new_cars = prompt(
  "Salom janob! 👋\nHo'sh bu gal kolleksiyangizga qaysi avtomashinani qo'shmoqchisiz?"
);

if (cars.includes(new_cars.toUpperCase())) {
  alert("Bu avtomashina allaqachon kolleksiyangizda bor");
} else if (new_cars != "") {
  cars.push(new_cars.toUpperCase());
  alert("Tabriklayman kolleksiyangiz bittaga boyidi!");
  alert("Sizning kolleksiyangizdagi avtomshinalar:\n" + cars);
}