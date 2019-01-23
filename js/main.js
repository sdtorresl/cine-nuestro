document.getElementById("open-menu").onclick = function() { toggleMenu() };
document.getElementById("close-menu").onclick = function() { toggleMenu() };

function toggleMenu() {
    var menu = document.getElementById("main-menu");
    
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}
