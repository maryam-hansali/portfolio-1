// =============scrollreavel=========//
var slide_top = {
  delay: 4000,
  origin: "top",
  duration: 600,
  distance: "50px",
};
var slide_rigth = {
  delay: 1000,
  origin: "rigth",
  duration: 600,
  distance: "50px",
};
var slide_left = {
  delay: 2000,
  origin: "left",
  duration: 1000,
  distance: "50px",
};
var box = {
  delay: 2000,
  origin: "top",
  duration: 2000,
  distance: "100px",
};
ScrollReveal().reveal(".navigation", slide_top);
ScrollReveal().reveal(".scroll-top", slide_top);
ScrollReveal().reveal(".shape-outer", slide_rigth);
ScrollReveal().reveal(".slide_left", slide_left);
ScrollReveal().reveal(".box", box);
ScrollReveal().reveal("form", slide_left);
/*=============== SHOW MENU ===============*/
const bar_icon = document.querySelector(".bar");
const nav_links = document.querySelector(".links");
bar_icon.addEventListener("click", () => {
  nav_links.classList.toggle("active");
});

/*=============== REMOVE MENU MOBILE ===============*/
const remove_icon = document.querySelector(".remove_icon");
remove_icon.addEventListener("click", () => {
  nav_links.classList.remove("active");
});
const links_nav = document.querySelectorAll(".links a");
console.log(links_nav);
links_nav.forEach((link) => {
  link.addEventListener("click", () => {
    nav_links.classList.remove("active");
  });
});
/*=============== ADD BLUR TO HEADER ===============*/
const links = document.querySelectorAll(".links li  a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    //   remove active
    links.forEach((e) => {
      e.classList.remove("active");
    });
    //  add active
    link.classList.add("active");
  });
});

/*=============== EMAIL JS ===============*/

/*=============== SHOW SCROLL UP ===============*/
// ======scroll to top=====
const scroll_top = document.querySelector(".scroll-top");
function showIcon() {
  if (window.scrollY >= 2000) {
    scroll_top.classList.add("show-scroll");
  } else {
    scroll_top.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", showIcon);

scroll_top.addEventListener("click", UpScroll);
function UpScroll() {
  console.log("click");
  return window.scrollTo(0, 0);
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
// ===========login====
const submit_btn = document.getElementById("submit");
const form = document.querySelector("form");
submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
});

function sendMessage() {
  var params = {
    from_name: document.getElementById("fullname").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_tj9af19", "template_vdm9bjl", params)
    .then(function (request) {
      document.querySelector(".message_send").style.display = "block";
      // remove send message after 5second
      setTimeout(() => {
        document.querySelector(".message_send").style.display = "none";
      }, 5000);
      // clearing inputs after submit
      form.reset();
    });
}
