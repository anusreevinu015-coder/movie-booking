let selectedSeats = [];
let bookedSeats = [2, 5, 9, 14]; // example

window.onload = function () {
  const container = document.getElementById("seats");

  if (container) {
    for (let i = 1; i <= 40; i++) {

      let seat = document.createElement("div");
      seat.classList.add("seat");

      if (bookedSeats.includes(i)) {
        seat.classList.add("booked");
      }

      seat.onclick = function () {
        if (!seat.classList.contains("booked")) {

          seat.classList.toggle("selected");

          if (selectedSeats.includes(i)) {
            selectedSeats = selectedSeats.filter(s => s !== i);
          } else {
            selectedSeats.push(i);
          }
        }
      };

      container.appendChild(seat);
    }
  }
};