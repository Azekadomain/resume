document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-content h2", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
    gsap.from(".cta-button", { opacity: 0, scale: 0.8, duration: 0.5, delay: 0.6 });
    
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                let scrollPosition = window.scrollY;
                let targetPosition = targetElement.getBoundingClientRect().top + scrollPosition; // Позиция цели
    
                gsap.to(window, { 
                    scrollTo: targetPosition, 
                    duration: 2, 
                    ease: "power3.out"
                });
            }
        });
    });
    
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.1, duration: 0.3 });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3 });
        });
    });
});
