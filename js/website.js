// testimonial js

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1920:{
            items:6
        }
    }
})



// header js 

function openNav() {
    document.getElementById("mySidenavs").style.width = "280px";
}

function closeNav() {
    document.getElementById("mySidenavs").style.width = "0";
}

// open source

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 1
        }
    }
})

// animation js

AOS.init();


// cookies


 (function () {
   "use strict";

   var cookieAlert = document.querySelector(".cookie-alert");
   var acceptCookies = document.querySelector(".accept-cookies");

   cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

   if (!getCookie("acceptCookies")) {
       cookieAlert.classList.add("show");
   }

   acceptCookies.addEventListener("click", function () {
       setCookie("acceptCookies", true, 60);
       cookieAlert.classList.remove("show");
   });
})();

// Cookie functions stolen from w3schools
function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
   var expires = "expires=" + d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
   var name = cname + "=";
   var decodedCookie = decodeURIComponent(document.cookie);
   var ca = decodedCookie.split(';');
   for (var i = 0; i < ca.length; i++) {
       var c = ca[i];
       while (c.charAt(0) === ' ') {
           c = c.substring(1);
       }
       if (c.indexOf(name) === 0) {
           return c.substring(name.length, c.length);
       }
   }
   return "";
}
  


// 

