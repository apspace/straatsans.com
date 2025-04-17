const colorThemes = [
    { bg: "#191919", text: "#ffffff" }, // dark
    { bg: "#ffffff", text: "#000000" }, // light
    { bg: "#0f0f0f", text: "#FFD900" }, // dark yellow
    { bg: "#D7DEF0", text: "#17192D" }  // light blue
];

let currentThemeIndex = 0;
const text = document.getElementById('main-text');

function applyNextTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % colorThemes.length;
    const theme = colorThemes[currentThemeIndex];
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;
    text.style.color = theme.text;
}

document.addEventListener('click', applyNextTheme);