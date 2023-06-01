"use strict";

function Chess() {
  let tr = "";
  let table = document.getElementById("tb");

  for (let i = 0; i < 8; i++) {
    tr += `<tr>`;

    for (let j = 0; j < 8; j++) {
      if (i % 2 == 0) {
        if (j % 2 == 0) {
          tr += `<td style="border:1px solid black;" class="bg-white"></td>`;
        } else {
          tr += `<td style="border:1px solid black;" class="bg-black"></td>`;
        }
      } else {
        if (j % 2 == 0) {
          tr += `<td style="border:1px solid black;" class="bg-black"></td>`;
        } else {
          tr += `<td style="border:1px solid black;" class="bg-white"></td>`;
        }
      }
    }
    tr += `</tr>`;
  }
  table.innerHTML = tr;
}
Chess();
