document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".scroll-animation");
    
    function checkScroll() {
        let triggerBottom = window.innerHeight * 0.9;
        elements.forEach(element => {
            let elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
