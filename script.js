const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("active");
});

ScrollReveal({
    distance: "900px", // Remove the semicolon and use a comma instead
    duration: 2000,
    delay: 200,
    reset: true,
});

ScrollReveal().reveal('.hero_info', { origin: "bottom" }); // Correct the spelling of 'origin'
ScrollReveal().reveal('.img_hero', { origin: "right" }); // Correct the spelling of 'origin'
