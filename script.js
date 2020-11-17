window.addEventListener("load", main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const openSidebarButton = document.getElementById("open-sidebar-button");
    openSidebarButton.onclick = openSidebar;

    const closeSidebarIcon = document.getElementById("close-sidebar-icon")
    closeSidebarIcon.onclick = closeSidebar;

    /*const menuSearch = document.getElementById("search")
    menuSearch.onmouseover = highlightMenuItem;*/
}

function openSidebar() {
    const sidebar = document.getElementById("sidebar-div")
    sidebar.style.width = "20rem";
}

function closeSidebar() {
    const sidebar = document.getElementById("sidebar-div")
    sidebar.style.width = "0"; 
} 