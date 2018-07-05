    var link = document.querySelector(".search-btn");
    var popup = document.querySelector(".search-form");
    var close = popup.querySelector(".search-btn");
    var date = popup.querySelector("#search-arrival");
    link.addEventListener("click", function (evt){
      evt.preventDefault();
      popup.classList.toggle("search-form-show");
      date.focus();
    })
    close.addEventListener("click", function (evt){
      evt.preventDefault();
      popup.classList.toggle("search-form-show");
    });
