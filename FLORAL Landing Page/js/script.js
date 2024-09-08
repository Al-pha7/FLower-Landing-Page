document.addEventListener("DOMContentLoaded", function() {
    // Get all navbar links
    const navLinks = document.querySelectorAll(".navbar a");

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default anchor click behavior
            
            // Get the target section ID from the href attribute
            const targetId = this.getAttribute("href");
            
            // Get the target section element
            const targetSection = document.querySelector(targetId);
            
            // Smoothly scroll to the target section
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Handle click on "Get Started with Us" button
    const getStartedButton = document.querySelector("#get-started-button");
    if (getStartedButton) {
        getStartedButton.addEventListener("click", function() {
            // Scroll to the "About Flowers" section
            const aboutFlowersSection = document.querySelector("#page2");
            if (aboutFlowersSection) {
                aboutFlowersSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
});
