document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".scroll-section");

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight && sectionTop > 0) {
                section.style.transform = "translateX(0)";
            } else {
                section.style.transform = "translateX(-100vw)";
            }
        });
    });
});
