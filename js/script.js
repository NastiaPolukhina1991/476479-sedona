    var link = document.querySelector(".search-btn");
    var popup = document.querySelector(".search-form");
    var close = popup.querySelector(".search-btn");
    var date = popup.querySelector("#search-arrival");
    var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent('custom', true, true, {});
      evt.preventDefault = function () {
      Object.defineProperty(this, "defaultPrevented", {
    get: function () {
      return true;
    }
  });
};
    link.addEventListener("click", function (evt){
      evt.preventDefault();
      evt.defaultPrevented;
      popup.classList.toggle("search-form-show");
      date.focus();
    })

