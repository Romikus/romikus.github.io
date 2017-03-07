var navMain = document.querySelector('.navigation');
var navToggle = document.querySelector('.navigation__toggle');

var basket = document.querySelector(".catalog-item__basket");
var product1 = document.querySelector("#product-1");
var product2 = document.querySelector("#product-2");
var product3 = document.querySelector("#product-3");
var windowModal = document.querySelector(".modal");
var layer = document.querySelector(".modal-overlay");

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});

if(product1) {
  product1.addEventListener("click", function(event) {
    event.preventDefault();
    windowModal.classList.add("modal--show");
    layer.classList.add("modal-overlay--show");
  });
}

if(product2) {
  product2.addEventListener("click", function(event) {
    event.preventDefault();
    windowModal.classList.add("modal--show");
    layer.classList.add("modal-overlay--show");
  });
}

if(product3) {
  product3.addEventListener("click", function(event) {
    event.preventDefault();
    windowModal.classList.add("modal--show");
    layer.classList.add("modal-overlay--show");
  });
}

if(layer) {
  layer.addEventListener("click", function(event) {
    windowModal.classList.remove("modal--show");
    layer.classList.remove("modal-overlay--show");
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (windowModal.classList.contains("modal--show")) {
      windowModal.classList.remove("modal--show");
    }
    if (layer.classList.contains("modal-overlay--show")) {
      layer.classList.remove("modal-overlay--show");
    }
  }
});
