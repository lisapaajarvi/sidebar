window.addEventListener("load", main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const sidebarButton = document.getElementById("open-sidebar-button");
    sidebarButton.onclick = openSidebar;
}

function openSidebar() {
    const sidebar = document.getElementById("sidebar-div")
    console.log(sidebar);
    sidebar.style.width = "20rem";
}