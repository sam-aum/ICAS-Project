document.addEventListener('DOMContentLoaded', function () {
    // Get the offcanvas menu element
    var offcanvasMenu = document.getElementById('navbarNav');

    // Get the toggle button element
    var toggleButton = document.querySelector('.navbar-toggler');

    // Add event listener to the document to handle clicks
    document.addEventListener('click', function (event) {
        // Check if the click occurred outside the offcanvas menu and the toggle button
        if (!offcanvasMenu.contains(event.target) && event.target !== toggleButton) {
            // Check if the offcanvas menu is currently open
            if (offcanvasMenu.classList.contains('show')) {
                // Click occurred outside the menu, so close the menu
                toggleButton.click();
            }
        }
    });
});
