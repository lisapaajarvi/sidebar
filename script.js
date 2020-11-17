window.addEventListener("load", main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const openSidebarButton = document.getElementById("open-sidebar-button");
    openSidebarButton.onclick = openSidebar;

    const closeSidebarIcon = document.getElementById("close-sidebar-icon")
    closeSidebarIcon.onclick = closeSidebar;
}

function openSidebar() {
    const sidebar = document.getElementById("sidebar-div")
    sidebar.style.width = "20rem";

    const menuList = document.getElementById("menu-list")
    menuList.style.display= "flex";

    const settings = document.getElementById("settings-div")
    settings.style.display = "flex";
}

function closeSidebar() {
    const sidebar = document.getElementById("sidebar-div")
    sidebar.style.width = "0";

    const menuList = document.getElementById("menu-list")
    menuList.style.display= "none";

    const settings = document.getElementById("settings-div")
    settings.style.display = "none";
}
