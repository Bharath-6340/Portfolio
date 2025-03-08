// Function to create Thanos particles
function createParticles(element) {
    const numParticles = 30;
    const rect = element.getBoundingClientRect();

    for (let i = 0; i < numParticles; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        document.body.appendChild(particle);

        particle.style.width = `${Math.random() * 5 + 3}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${rect.left + Math.random() * rect.width}px`;
        particle.style.top = `${rect.top + Math.random() * rect.height}px`;

        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
}

// Scroll effect to reveal sections with Thanos effect
window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll(".thanos");
    sections.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100 && !section.classList.contains("visible")) {
            section.classList.add("visible");
            createParticles(section);
        }
    });
});
