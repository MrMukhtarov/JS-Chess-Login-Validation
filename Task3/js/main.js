function CheckAge() {
  let inp = document.getElementById("inp").value;

  if (inp > 0) {
    if (inp == 20) {
      alert(`Yasiniz ${inp} - dir. 20 ile eyndir`);
    } else if (inp > 20) {
      alert(`Yasiniz ${inp} - dir. 20 den boyukdur`);
    } else {
      alert(`Yasiniz ${inp} - dir. 20 den kicikdir`);
    }
  } else {
    alert("Zehmet olmasa 0 dan boyuk reqem daxil edin");
  }
}
