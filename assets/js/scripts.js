const nightSwitch = document.getElementById("darkMode");
let mode = localStorage.getItem("mode");

const applyMode = (mode) => {
    document.documentElement.setAttribute("user-color-mode", mode);
    // const text = mode === "night" ? "&#x2600;" : "&#x25CF;";
    // nightSwitch.innerHTML = text;
}

applyMode(mode);

nightSwitch.addEventListener("click", () => {
    mode = mode === "day" ? "night" : "day";
    localStorage.setItem("mode", mode);
    applyMode(mode);
});

function showMore() {
    var x = document.getElementById("hiddenBioText");
    var y = document.getElementById("hiddenBioButton");

    x.classList.add('active');
    y.style.display = "none";
}