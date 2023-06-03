function ExampleFor() {
  let num = parseInt(prompt("Reqem daxil edin"));

  if (num > 0) {
    for (let i = 0; i < num; i++) {
      if (i % 2 == 0) {
        console.log(`Cut Ededler : ${i}`);
      }
    }
  } else {
    console.log("Reqem 0 dan boyuk olmalidir");
  }
}
// ExampleFor();


function ExampleWhile() {
  let num = 5;

  let result = parseInt(prompt("15 / 3 nece edir?"));

  while (result != num) {
    console.log(`Xeyr cavab ${result} deyildir`);
    result = parseInt(prompt("15 / 3 nece edir?"));
  }
  console.log("Duz tapdiniz cavab 5-dir");
}
// ExampleWhile();


function ExampleDoWhile() {
  let name = "Leman";

  let result = prompt("Adi texmin edin");

  do {
    console.log("Leman");
  } while (result == name);
}
// ExampleDoWhile();
