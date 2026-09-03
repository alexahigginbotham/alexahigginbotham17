// Smoothly scroll to a section when a navigation button is clicked
function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// Change the navigation appearance when the page is scrolled
window.addEventListener("scroll", function () {

    const navigation = document.querySelector(".navigation");

    if (window.scrollY > 50) {
        navigation.classList.add("scrolled");
    } else {
        navigation.classList.remove("scrolled");
    }

});
