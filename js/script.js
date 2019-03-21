var link = document.querySelector(".orderring-form-link");
var popup = document.querySelector(".orderring-form");
var checkIn = popup.querySelector(".form-check-in");
var checkOut = popup.querySelector(".form-check-out");
var adaltNumber = popup.querySelector(".form-adalt-input");
var kidsNumber = popup.querySelector(".form-kids-input");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  if (popup.classList.contains("modal-show")){
    checkIn.focus();
  }
});

popup.addEventListener("submit", function(evt) {
  if (!checkIn.value || !checkOut.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.classList.remove("modal-show");
    }
  }
});
