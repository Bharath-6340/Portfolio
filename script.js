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

// Scroll Triggered Thanos "Appear" Effect
document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100 && !section.classList.contains("snapped")) {
            section.classList.add("snapped");
            startThanosAppearEffect(section);
        }
    });
});

// Telegram-Style Thanos "Assemble" Effect
function startThanosAppearEffect(element) {
    let textElements = element.querySelectorAll("*");
    
    textElements.forEach((textEl) => {
        let text = textEl.innerHTML;
        textEl.innerHTML = ""; // Clear original text

        // Create span for each letter
        for (let i = 0; i < text.length; i++) {
            let span = document.createElement("span");
            span.innerText = text[i];
            span.style.display = "inline-block";
            span.style.opacity = "0";
            span.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) rotate(${Math.random() * 360}deg)`;
            textEl.appendChild(span);

            setTimeout(() => {
                span.style.transition = "transform 0.8s ease-out, opacity 0.8s ease-out";
                span.style.transform = "translate(0, 0)";
                span.style.opacity = "1";
            }, i * 20); // Delay each letter for better effect
        }
    });
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
