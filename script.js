/*=== toggle icon navbar ===*/
let  menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}

/*=== scroll activation ===*/
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.foreach((sec) => {
    let top = window.scrolly;
    let offset = set.offsetTop - 150;
    let height = set.offsetHeight;
    let id = sec.getattribute("id");

    if ((top) => offset && top < offset + height) {
      navlinks.foreach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href* =" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*=== sticky navbar ===*/
  let header = document.querySelector("header");

  header.classlist.toggle("sticky", window.scrollY > 100);

  /*=== remove toggle and navbar when click navbar link (scroll) ===*/

  menuIcon.classlist.remove("bx-x");
  navbar.classList.remove("active");
};
/*=== scroll reveal ===*/
ScrollReveal({
   //reset: true
   distance:'80px',
   duration:200,
   delay:200 
  });

  ScrollReveal().reveal('.home-content , .heading', { origin='top' });
  ScrollReveal().reveal('.home-img , .services-container, .portfolio-box, .contact form', { origin='bottom' });
  ScrollReveal().reveal('.home-content h1 , .about-img', { origin='left' });
  ScrollReveal().reveal('.home-content p , .about-content', { origin='right' });
  
  /*=== typed js ===*/
  
