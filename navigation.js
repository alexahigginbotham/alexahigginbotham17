/* navigation.js
   Shared navigation for every page on your GitHub website.
*/

document.addEventListener("DOMContentLoaded", function () {

    // Create the navigation container
    const navigation = document.createElement("nav");

    navigation.className = "navigation-area";
    navigation.setAttribute("aria-label", "Main navigation");

    // Navigation HTML
    navigation.innerHTML = `
        <div class="primary-navigation">

            <a href="index.html">Home</a>

            <a href="about.html">About Me</a>

            <a href="work-experience.html">Work Experience</a>

            <a href="education.html">Education</a>

            <a href="involvement.html">Involvement</a>

        </div>

        <div class="secondary-navigation">

   

            <a href="contact.html">Contact</a>

        </div>
    `;

    // Find the navigation placeholder in your HTML
    const navigationContainer =
        document.getElementById("site-navigation");

    // Put the navigation into the placeholder
    if (navigationContainer) {

        navigationContainer.appendChild(navigation);

    } else {

        // If there is no placeholder, put navigation after the header
        const header =
            document.querySelector(".site-header");

        if (header) {

            header.appendChild(navigation);

        } else {

            // Last-resort option
            document.body.prepend(navigation);
        }
    }

    // Determine which page the visitor is currently on
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    // Highlight the current page
    document
        .querySelectorAll(".navigation-area a")
        .forEach(function (link) {

            const linkPage =
                link.getAttribute("href").split("/").pop();

            if (linkPage === currentPage) {

                link.classList.add("active");

                link.setAttribute(
                    "aria-current",
                    "page"
                );
            }
        });

});
