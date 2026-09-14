const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
    if (navLinks.classList.contains("show-menu")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show-menu");
        menuBtn.textContent = "☰";
    });
});

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });
    navigationLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

const animatedElements = document.querySelectorAll(
    ".skill-card, .hobby-card, .project-card, .info-item, .goal, .about-text"
);
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);
animatedElements.forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});
// Contact Form
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert(
        "Thank you, " +
        name +
        "! Your message has been received. 🚀"
    );
    contactForm.reset();
});

const projectButtons = document.querySelectorAll(".view-btn");
projectButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent.includes("Coming Soon")) {
            alert("This project will be added soon! 🚀");
        } else if (button.textContent.includes("Achievements")) {
            alert("You can add your certificates and achievements here! 🏆");
        } else {
            alert("Your project link can be added here.");
        }
    });
});

document.getElementById("year").textContent =
    new Date().getFullYear();
// Typing Effect
const subtitle = document.querySelector(".hero h2");
const words = [
    "Creative Student & Future Professional",
    "Future Web Developer",
    "Creative Thinker",
    "Continuous Learner"
];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
function typingEffect() {
    const currentWord = words[wordIndex];
    if (!deleting) {
        subtitle.textContent =
            currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typingEffect, 1800);
            return;
        }
    } else {
        subtitle.textContent =
            currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(
        typingEffect,
        deleting ? 45 : 80
    );
}
typingEffect();