const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const price = document.getElementById("price");

const movieSelect = document.querySelector(".movie-container");
// console.log(movieSelect);
let ticketPrice = +movieSelect.value;
console.log(ticketPrice);
const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  // const selectedMoviePrice = localStorage.getItem("selectedMoviePrice");
  const selectedMoviePrice = document.querySelector(".movie-container").value;
  // console.log(selectedMoviePrice);
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }

  if (selectedMoviePrice !== null) {
    count.innerText = selectedSeats.length;
    price.innerText = selectedSeats.length * +ticketPrice;
  }
};

populateUI();

selectedMovie = (movieIndex, moviePrice) => {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
};

const updateSelectedSeatsCount = () => {
  const selectedSeats = document.querySelectorAll(".row .selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  price.innerText = selectedSeatsCount * ticketPrice;
};

// Seat select event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedSeatsCount();
  }
});

// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  selectedMovie(e.target.selectedIndex, e.target.value);

  updateSelectedSeatsCount();
});
