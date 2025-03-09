// Typing Effect for Name
document.addEventListener("DOMContentLoaded", function () {
    const text = "Hello, I'm Bharath!";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.querySelector(".profile-container h1").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});

// Scroll Reveal with Thanos Snap Effect
document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    
    sections.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});

// Sticky Navbar on Scroll
window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.style.background = "#005bb5";
    } else {
        navbar.style.background = "#0073ff";
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
anchor.addEventListener('click', function (event) {
event.preventDefault();
const section = document.querySelector(this.getAttribute('href'));
section.scrollIntoView({ behavior: 'smooth' });
});
});

// Highlight active section in navbar
window.addEventListener('scroll', () => {
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

sections.forEach((section, index) => {  
    let top = window.scrollY;  
    let offset = section.offsetTop - 100;  
    let height = section.offsetHeight;  

    if (top >= offset && top < offset + height) {  
        navLinks.forEach(link => link.classList.remove('active'));  
        navLinks[index].classList.add('active');  
    }  
});

});
