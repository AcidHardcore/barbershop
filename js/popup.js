"use strict";
var link = document.querySelector('.login');
var popup = document.querySelector('.modal-content');
var close = popup.querySelector('.modal-content-close');
var login = popup.querySelector('[name=login]');
var form = popup.querySelector('form');
var password = popup.querySelector('[name=password]');
var storage = localStorage.getItem('login');
var overlay = document.querySelector(".modal-overlay");
var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
//show popup window
link.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('modal-content-show');
    overlay.classList.add('modal-content-show');
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});
//hide popup window
close.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('modal-content-show');
    overlay.classList.remove('modal-content-show');
});
//check inter login password
form.addEventListener('submit', function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add('modal-error');
        /*setTimeout(function () {
            popup.classList.remove('modal-error');
        }, 1000);*/
    } else {
        localStorage.setItem('login', login.value);
    }
});
//close popup press escape
window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains('modal-content-show')) {
            popup.classList.remove('modal-content-show');
            overlay.classList.remove('modal-content-show');
        }
    }
});
//map
mapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
    overlay.classList.add('modal-content-show');
});

mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
    overlay.classList.remove('modal-content-show');
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
            overlay.classList.remove('modal-content-show');
        }
    }
});
