document.addEventListener("DOMContentLoaded", (event) => {
    const burger = document.querySelector("#burger");
    const dropdownMenu = document.querySelector("#dropdown_menu");

    burger.addEventListener("click", toggleMenu);

    function toggleMenu() {
        let style = getComputedStyle(dropdownMenu)
        let display = style.display;
        if (display === "none") {
            dropdownMenu.style.display = "flex";
            burger.style.opacity = "0.5";
        }
        else {
            dropdownMenu.style.display = "none";
            burger.style.opacity = "1";
        }
    }
})