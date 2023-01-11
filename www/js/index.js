const button = document.getElementById("menu-icon");
const popUpWindow = document.getElementById("window");
const closeIcons = document.getElementsByClassName("close-icon");
for (const closeIcon of closeIcons) {
    closeIcon.addEventListener("click", () => {
        console.log('X');
        const parent = closeIcon.parentElement;
        if (parent) {
            parent.style.display = "none";
        }
    });
}
button.addEventListener("click", () => {
    console.log(popUpWindow.style.display);
    const popUpHidden = popUpWindow.style.display === "none" || popUpWindow.style.display === "";
    popUpWindow.style.display = popUpHidden ? "block" : "none";
});
//Grid Stuff
const grid = document.getElementById("timer-grid");
const items = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6", "item 7"];
items.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item;
    grid.appendChild(div);
});
