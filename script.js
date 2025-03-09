// Typing Effect for Name
document.addEventListener("DOMContentLoaded", function () {
    const text = "Bharath E";
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
