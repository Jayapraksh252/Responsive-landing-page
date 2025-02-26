document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove("show");
        }
    });
});
