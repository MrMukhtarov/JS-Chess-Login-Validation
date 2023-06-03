function CheckNumber() {
  let inp = document.getElementById("inp").value;

  if (inp > 0) {
    if (inp % 2 == 0) {
      alert(`Daxil etdiyiniz eded ${inp} - dir ve eded cut ededdir`);
    } else {
      alert(`Daxil etdiyiniz eded ${inp} - dir ve eded tek ededdir`);
    }
  } else {
    alert("Eded 0 dan boyuk olmalidir!!");
  }
}
