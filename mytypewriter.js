//Display typewriter effect on the home page
$(document).ready(function () {

    let typed = new Typed('.typewriter', {
        strings: ["Digital Transformation Engineer", "Salesforce Administrator", "Strategic Technical Consultant", "Senior Software Engineer", "Application Developer", "System Support Engineer"],
        // strings:  typewriterText.split(','),
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });

});