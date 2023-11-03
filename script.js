const TITLE = "Philips 272V8LA";
const SCREENS = "16:9";
let screenPrice = 16390;
let rollback = 4000;
let fullPrice = screenPrice + rollback;
let adaptive = "Подойдет для тех, кто заботиться о своем зрении";

alert(
  "Представляем вашему вниманию " +
    TITLE +
    ". " +
    "C форматом экрана " +
    SCREENS +
    ". " +
    "По скромной цене: " +
    fullPrice +
    " руб."
);

console.log("Купите, не пожалеете! PS: " + adaptive + ".");
