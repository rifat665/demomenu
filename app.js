const menuBtn = document.getElementById("menuBtn");
const menuBox = document.getElementById("menuBox");
let openMenu = false;
menuBtn.addEventListener("click", ()=>{
    if(openMenu){
        menuBox.style.marginTop = '-50px';
        menuBox.style.opacity = '0';
        menuBtn.classList = "bi bi-three-dots";
    }
    else{
        menuBox.style.marginTop = '0px';
        menuBox.style.opacity = '1';
        menuBtn.classList = "bi bi-x";
    }
    openMenu = !openMenu;
});
// THEME MODE
const theme = document.getElementById("themes");
const head = document.getElementById("header");
const menuIcon = document.getElementById("menuBtn");
const logarea = document.getElementById("logarea");
const language = document.getElementById("language");
const languageBox = document.getElementById("languageBox");
const container = document.getElementById("container");
const modeMenu = document.getElementById("menuBox");
const tittle = document.querySelector(".campany");
let themeMode = false;

theme.addEventListener("click", () => {
    if (themeMode) {
        head.style.backgroundColor = "rgba(0, 0, 0, 0.534)";
        head.style.borderColor = "rgba(255, 255, 255, 0.137)";
        menuIcon.style.color = "white";
        logarea.style.color = "rgba(255, 255, 255, 0.233)";
        logarea.style.borderColor = "rgba(255, 255, 255, 0.233)";
        theme.classList = "bi bi-brightness-high";
        theme.style.backgroundColor = "rgba(255, 255, 255, 0.137)";
        language.style.backgroundColor = "rgba(255, 255, 255, 0.137)";
        languageBox.style.backgroundColor = "rgba(255, 255, 255, 0.123)";
        container.style.backgroundColor = "rgba(0, 0, 0, 0.897)";
        modeMenu.style.backgroundColor = "rgba(0, 0, 0, 0.733)";
        modeMenu.style.borderColor = "rgba(255, 255, 255, 0.137)";
        tittle.style.color = "white";
    } else {
        head.style.backgroundColor = "white";
        head.style.borderColor = "gray";
        menuIcon.style.color = "black";
        logarea.style.color = "black";
        logarea.style.borderColor = "black";
        theme.classList = "bi bi-moon";
        theme.style.backgroundColor = "gray";
        language.style.backgroundColor = "gray";
        languageBox.style.backgroundColor = "gray";
        container.style.backgroundColor = "white";
        modeMenu.style.backgroundColor = "rgba(0, 0, 0, 0.179)";
        modeMenu.style.borderColor = "gray";
        tittle.style.color = "black";
    }
    themeMode = !themeMode;
});

// LANGUAGE SELECTED
const languageBtn = document.getElementById("language");
let openLanguage = false;

languageBtn.addEventListener("click", () => {
    languageBox.style.zIndex = openLanguage ? "-1" : "999";
    languageBox.style.opacity = openLanguage ? "0" : "1";
    openLanguage = !openLanguage;
});
