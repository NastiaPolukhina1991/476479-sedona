var link=document.querySelector(".search-btn"),popup=document.querySelector(".search-form"),arrival=popup.querySelector("[name=date-arrival]"),departure=popup.querySelector("[name=date-departure]"),adults=popup.querySelector("[name=adults]"),kids=popup.querySelector("[name=kids]"),form=popup.querySelector("form"),date=popup.querySelector("#search-arrival"),evt=document.createEvent("CustomEvent");evt.initCustomEvent("custom",!0,!0,{}),evt.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})},link.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("search-form-show"),popup.classList.remove("modal-error"),date.focus()}),popup.addEventListener("submit",function(e){arrival.value&&departure.value&&adults.value&&kids.value||(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("search-form-show")&&(popup.classList.remove("search-form-show"),popup.classList.remove("modal-error")))});
