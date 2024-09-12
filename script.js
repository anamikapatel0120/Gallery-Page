var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var navbar = document.getElementsByClassName("navbar11");

window.addEventListener("scroll", function () {
    // Show/hide the scroll to top button based on scroll position
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function setUnderline(element) {
    // Remove underline from all menu items
    const menuItems = document.querySelectorAll('.list li');
    menuItems.forEach(item => {
        item.style.textDecoration = 'none';
    });

    // Add underline to the clicked menu item
    element.style.textDecoration = 'underline';
}



window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "#c434b8";
    } else {
        navbar.style.backgroundColor = "#000";
    }
});


// 

function showDescription(element) {
    element.querySelector('.image-description').style.opacity = '1';
}

function hideDescription(element) {
    element.querySelector('.image-description').style.opacity = '0';
}


function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Function to handle workshop button click
function scrollToWorkshops() {
    scrollToElement('galleryContainer');
}

// Function to handle activities button click
function scrollToActivities() {
    scrollToElement('galleryContainer1');
}

// Function to scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
