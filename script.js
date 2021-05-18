// I prefer this first method for now

const digit = document.querySelector(".digit");
const lower = document.querySelector(".lower");
const add = document.querySelector(".add");
let count = 0;

lower.addEventListener("click", function () {
  count--;
  digit.textContent = count;
  changeStyle();
});

add.addEventListener("click", function () {
  count++;
  digit.textContent = count;
  changeStyle();
});

function changeStyle() {
  if (count > 0) {
    digit.style.color = "green";
  } else if (count < 0) {
    digit.style.color = "red";
  } else {
    digit.style.color = "black";
  }
}

// If you wanna use classList
// function changeStyle() {
//   if (count > 0) {
//     digit.classList.add("positive");
//   } else if (count < 0) {
//     digit.classList.remove("negative");
//   } else {
//     digit.classList.remove("negative");
//     digit.classList.remove("positive");
//   }
// }

//Second method

// let count = 0;

// const digit = document.querySelector(".digit");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("lower")) {
//       count--;
//     } else if (styles.contains("add")) {
//       count++;
//     }

//     if (count < 0) {
//       digit.style.color = "red";
//     }
//     if (count < 0) {
//       digit.style.color = "green";
//     }
//     digit.textContent = count;
//   });
// });
