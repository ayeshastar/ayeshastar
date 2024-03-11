function toggleImages(containerId, btnId) {
    var container = document.getElementById(containerId);
    var button = document.getElementById(btnId);

    container.classList.toggle("expanded");
    button.innerText = container.classList.contains("expanded") ? "Ver menos" : "Ver más";
}





