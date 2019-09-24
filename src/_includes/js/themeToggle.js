const settingsButton = document.getElementById('settings');
const closeSettings = document.getElementById('closeSettings');
const settingsPanel = document.getElementById('settingsPanel');
const mainContent = document.getElementById('rd-main');

settingsButton.addEventListener("click", toggleSettingsPanel, false);
closeSettings.addEventListener("click", toggleSettingsPanel, false);

function toggleSettingsPanel() {
    if (settingsPanel.classList.contains('rd-visible')) {
        settingsPanel.classList.remove('rd-visible');
        settingsPanel.setAttribute("aria-hidden", "true");
        mainContent.inert = false;
    }
    else {
        settingsPanel.classList.add('rd-visible');
        settingsPanel.setAttribute("aria-hidden", "false");
        mainContent.inert = true;
    }
}

let darkPreferred, contrastPreferred, reducedMotionPreffered;
const themeCookie = document.cookie.split(';');
const cookieSetting = themeCookie.slice(-1)[0];

if (cookieSetting.indexOf('darkMode=') >= 0) {
    const darkMode = cookieSetting.split('darkMode=')[1];
    darkPreferred = darkMode.substring(0, 4) === 'true';
}
else {
    darkPreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
}

if (cookieSetting.indexOf('highContrast=') >= 0) {
    const contrastMode = cookieSetting.split('highContrast=')[1];
    contrastPreferred = contrastMode.substring(0, 4) === 'true';
}
else if (window.matchMedia("(prefers-contrast: high)").matches) {
    contrastPreferred = true;
}
else {
    contrastPreferred = window.matchMedia("(-ms-high-contrast: active)").matches;
}

if (window.matchMedia("(-ms-high-contrast: white-on-black)").matches) {
    contrastPreferred = true;
    darkPreferred = false;
}

if (window.matchMedia("(-ms-high-contrast: black-on-white)").matches) {
    contrastPreferred = true;
    darkPreferred = true;
}

if (cookieSetting.indexOf('reducedMotion=') >= 0) {
    const reducedMotion = cookieSetting.split('reducedMotion=')[1];
    reducedMotionPreffered = reducedMotion.substring(0, 4) === 'true';
}
else {
    reducedMotionPreffered = window.matchMedia("(prefes-reduced-motion: reduced)").matches;
}

function defaultMotionVariables() {
    return {
        "--animation": "0.666s ease-in-out",
        "--transition": "0.5s ease-in-out"
    };
}

function reduceMotionVariables() {
    return {
        "--animation": "0s ease-in-out",
        "--transition": "0.2s ease-in-out"
    };
}

const darkModeInput = document.getElementById('darkMode');
const darkModeLabel = document.getElementById('darkLabel');
const lightModeLabel = document.getElementById('lightLabel');

const highContrastInput = document.getElementById('highContrast');
const highContrastLabel = document.getElementById('contrastOn');
const defaultContrastLabel = document.getElementById('defaultContrast');

const rootElement = document.querySelector(':root');

function setCookie() {
    return 'darkMode=' + darkPreferred + '&highContrast=' + contrastPreferred + '&reducedMotion=' + reducedMotionPreffered;
}

function setDarkContrastTheme() {
    const darkContrastTheme = {
        "--light-text": "#fafafa",
        "--link-color": "#e8858d",
        "--body-bg": "#000000",
        "--body-text": "#ffffff",
        "--about-bg": "#000000",
        "--about-text": "#ffffff",
        "--header-text": "#ffffff",
        "--header-image": "url('/img/icons-light/chemex.svg')",
        "--email-image": "url('/img/icons-light/email.svg')",
        "--phone-image": "url('/img/icons-light/phone.svg')",
        "--web-image": "url('/img/icons-light/web.svg')",
        "--github-image": "url('/img/icons-light/github.svg')",
        "--linkedin-image": "url('/img/icons-light/linkedin.svg')",
        "--twitter-image": "url('/img/icons-light/twitter.svg')"
    }

    for (key in darkContrastTheme) {
        rootElement.style.setProperty(key, darkContrastTheme[key])
    }

    document.cookie = setCookie();
}

function setDarkTheme() {
    const darkTheme = {
        '--light-text': '#dadada',
        '--link-color': '#fec0c5',
        '--body-bg': '#001a1b',
        '--body-text': '#fcfcfc',
        '--about-bg': '#002e2f',
        '--about-text': '#fcfcfc',
        '--header-text': '#fec0c5',
        '--header-image': "url('/img/icons-light/chemex.svg')",
        '--email-image': "url('/img/icons-light/email.svg')",
        '--phone-image': "url('/img/icons-light/phone.svg')",
        '--web-image': "url('/img/icons-light/web.svg')",
        '--github-image': "url('/img/icons-light/github.svg')",
        '--linkedin-image': "url('/img/icons-light/linkedin.svg')",
        '--twitter-image': "url('/img/icons-light/twitter.svg')"
    };

    for (key in darkTheme) {
        rootElement.style.setProperty(key, darkTheme[key])
    }

    document.cookie = setCookie();
}

function setHighContrast() {
    const highContrastTheme = {
        "--light-text": "#1a1a1a",
        "--link-color": "#006264",
        "--body-bg": "#ffffff",
        "--body-text": "#000000",
        "--about-bg": "#ffffff",
        "--about-text": "#000000",
        "--header-text": "#1a1a1a",
        "--header-image": "url('/img/icons/chemex.svg')",
        "--email-image": "url('/img/icons/email.svg')",
        "--phone-image": "url('/img/icons/phone.svg')",
        "--web-image": "url('/img/icons/web.svg')",
        "--github-image": "url('/img/icons/github.svg')",
        "--linkedin-image": "url('/img/icons/linkedin.svg')",
        "--twitter-image": "url('/img/icons/twitter.svg')"
    };

    for (key in highContrastTheme) {
        rootElement.style.setProperty(key, highContrastTheme[key])
    }

    document.cookie = setCookie();
}

function setLightTheme() {
    const lightTheme = {
        '--light-text': '#4d4d4d',
        '--link-color': '#006264',
        '--body-bg': '#fdfdfd',
        '--body-text': '#3c3c3c',
        '--about-bg': '#fdfdfd',
        '--about-text': '#3c3c3c',
        '--header-text': '#006264',
        '--header-image': "url('/img/icons/chemex.svg')",
        '--email-image': "url('/img/icons/email.svg')",
        '--phone-image': "url('/img/icons/phone.svg')",
        '--web-image': "url('/img/icons/web.svg')",
        '--github-image': "url('/img/icons/github.svg')",
        '--linkedin-image': "url('/img/icons/linkedin.svg')",
        '--twitter-image': "url('/img/icons/twitter.svg')"
    }

    for (key in lightTheme) {
        rootElement.style.setProperty(key, lightTheme[key])
    }

    document.cookie = setCookie();
}

darkModeInput.addEventListener("click", toggleDarkMode, false);

highContrastInput.addEventListener("click", toggleContrastMode, false);

function setLightPreference() {
    darkModeInput.setAttribute("aria-checked", "false");
    lightModeLabel.setAttribute("aria-hidden", "false");
    darkModeLabel.setAttribute("aria-hidden", "true");
}

function setDarkPreference() {
    darkModeInput.setAttribute("aria-checked", "true");
    lightModeLabel.setAttribute("aria-hidden", "true");
    darkModeLabel.setAttribute("aria-hidden", "false");
}

function toggleDarkMode() {
    if (darkModeInput.getAttribute("aria-checked") === "true") {
        setLightPreference();
        toggleTheme();
    }
    else {
        setDarkPreference();
        toggleTheme();
    }
}

function setDefaultContrastPreference() {
    highContrastInput.setAttribute("aria-checked", "false");
    defaultContrastLabel.setAttribute("aria-hidden", "false");
    highContrastLabel.setAttribute("aria-hidden", "true");
}

function setHighContrastPreference() {
    highContrastInput.setAttribute("aria-checked", "true");
    defaultContrastLabel.setAttribute("aria-hidden", "true");
    highContrastLabel.setAttribute("aria-hidden", "false");
}

function toggleContrastMode() {
    if (highContrastInput.getAttribute("aria-checked") === "true") {
        setDefaultContrastPreference();
        toggleTheme();
    }
    else {
        setHighContrastPreference();
        toggleTheme();
    }
}

const reducedMotionInput = document.getElementById('reducedMotion');
const reducedMotionOnLabel = document.getElementById('reducedMotionOn');
const reducedMotionOffLabel = document.getElementById('reducedMotionOff');

reducedMotionInput.addEventListener("click", setReducedMotionPreference, false);

function setReducedMotionPreference() {
    if (reducedMotionInput.getAttribute("aria-checked") === "true") {
        reducedMotionInput.setAttribute("aria-checked", "false");
        reducedMotionOffLabel.setAttribute("aria-hidden", "false");
        reducedMotionOnLabel.setAttribute("aria-hidden", "true");
        reducedMotionPreffered = false;
        reducedMotionKeys = defaultMotionVariables();
    }
    else {
        reducedMotionInput.setAttribute("aria-checked", "true");
        reducedMotionOffLabel.setAttribute("aria-hidden", "true");
        reducedMotionOnLabel.setAttribute("aria-hidden", "false");
        reducedMotionPreffered = true;
        reducedMotionKeys = reduceMotionVariables();
    }

    for (key in reducedMotionKeys) {
        rootElement.style.setProperty(key, reducedMotionKeys[key])
    }

    document.cookie = setCookie();
};

function toggleTheme() {
    if (darkModeInput.getAttribute("aria-checked") === "true" && highContrastInput.getAttribute("aria-checked") === "true") {
        setDarkContrastTheme();
    }
    else if (darkModeInput.getAttribute("aria-checked") === "true" && highContrastInput.getAttribute("aria-checked") === "false") {
        setDarkTheme();
    }
    else if (highContrastInput.getAttribute("aria-checked") === "true") {
        setHighContrast();
    }
    else {
        setLightTheme();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.cookie = setCookie()

    if (reducedMotionPreffered) {
        setReducedMotionPreference();
    }

    if (darkPreferred === true && contrastPreferred) {
        setDarkPreference();
        setHighContrastPreference();
        setDarkContrastTheme();
    }
    else if (darkPreferred === true) {
        setDarkPreference();
        setDarkTheme();
    }
    else if (contrastPreferred === true) {
        setHighContrastPreference();
        setHighContrast();
    }
    else {
        setLightTheme();
    }
});
