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

// Scroll Reveal with Thanos Snap Effect (With Particles)
document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100 && !section.classList.contains("visible")) {
            section.classList.add("visible");
            createParticles(section);
        }
    });
});

// Create Particles for Thanos Snap Effect
function createParticles(section) {
    let canvas = document.createElement("canvas");
    canvas.classList.add("particle-canvas");
    section.appendChild(canvas);

    let ctx = canvas.getContext("2d");
    canvas.width = section.clientWidth;
    canvas.height = section.clientHeight;

    let particles = [];

    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 2,
            speedX: (Math.random() - 0.5) * 4,
            speedY: (Math.random() - 1) * -4,
            opacity: 1,
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle, index) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.opacity -= 0.02;
            ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            if (particle.opacity <= 0) {
                particles.splice(index, 1);
            }
        });

        if (particles.length > 0) {
            requestAnimationFrame(animateParticles);
        } else {
            section.removeChild(canvas);
        }
    }

    animateParticles();
}

// Sticky Navbar on Scroll
window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.style.background = "#005bb5";
    } else {
        navbar.style.background = "#0073ff";
    }
});
