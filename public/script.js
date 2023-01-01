/** Dropdown Toggle Function */
function dropDownToggle() {
    let content = document.querySelector('.dropdown-content');

    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

/** Toggling Between API Sections */
let sections = ["Bakery", "Butchery", "Dairy", "Fresh", "Frozen", "Seafood", "Vegan", "Wine"];
let visibleSection = null;

/** Function to toggle between sections */
function toggleSection(sectionId) {
    if (visibleSection === sectionId) {
        visibleSection = null;
    } else {
        visibleSection = sectionId;
    }

    hideOtherSections();
}

/** Function to hide non active sections */
function hideOtherSections() {
    let i, sectionId, section;

    for (i = 0; i < sections.length; i++) {
        sectionId = sections[i];
        section = document.getElementById(sectionId);

        if (visibleSection === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

//getting current year
document.getElementById("year").innerHTML = new Date().getFullYear();
