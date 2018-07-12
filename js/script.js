var link = document.querySelector(".search-btn");
var popup = document.querySelector(".search-form");
var arrival = popup.querySelector("[name=date-arrival]");
var departure = popup.querySelector("[name=date-departure]");
var adults = popup.querySelector("[name=adults]");
var kids = popup.querySelector("[name=kids]");
var date = popup.querySelector("#search-arrival");
var evt = document.createEvent('CustomEvent');
evt.initCustomEvent('custom', true, true, {});
//        need as huck for ie
evt.preventDefault = function () {
  Object.defineProperty(this, "defaultPrevented", {
    get: function () {
      return true;
    }
  });
};
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-form-show");
  popup.classList.remove("modal-error");
  date.focus();
});
popup.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !kids.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("search-form-show")) {
      popup.classList.remove("search-form-show");
      popup.classList.remove("modal-error");
    }
  }
});
