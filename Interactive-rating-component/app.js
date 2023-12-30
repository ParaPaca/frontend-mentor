document.addEventListener("DOMContentLoaded", function () {
  const result = document.getElementById("result");
  const submitBtn = document.querySelector(".submit");
  const rateCard = document.querySelector(".rate-card");
  const thanksCard = document.querySelector(".thanks-card");
  const rateBtns = document.querySelectorAll(".rate");
  let selectedRate = 0;

  submitBtn.addEventListener("click", function () {
    if (selectedRate !== 0) {
      rateCard.style.display = "none";
      thanksCard.style.display = "flex";
      result.textContent = selectedRate;
    }
  });

  rateBtns.forEach(function (el) {
    el.addEventListener("click", function () {
      rateBtns.forEach(function (btn) {
        if (btn !== el) {
          btn.style.backgroundColor = "";
          btn.style.color = "";
        }
      });

      selectedRate = el.textContent;
      el.style.backgroundColor = "hsl(25, 97%, 53%)";
      el.style.color = "#fff";
    });
  });
});

// $(document).ready(() => {
//   const result = $("#result");
//   const submitBtn = $(".submit");
//   const rateCard = $(".rate-card");
//   const thanksCard = $(".thanks-card");
//   const rateBtns = $(".rate");
//   let selectedRate = 0;

//   submitBtn.click(() => {
//     rateCard.hide();
//     thanksCard.show();
//     result.text(selectedRate);
//   });

//   rateBtns.click(() => {
//     rateBtns.each((index, btn) => {
//       if (btn !== this) {
//         $(btn).css({ backgroundColor: "", color: "" });
//       }
//     });

//     selectedRate = $(this).text();
//     $(this).css({ backgroundColor: "hsl(25, 97%, 53%)", color: "#fff" });
//   });
// });
