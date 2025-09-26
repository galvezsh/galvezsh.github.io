'use strict';

import Strings from "../languages/strings.js";
import { Html, Cookie } from "./engine.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const COOKIE = new Cookie();
const STRINGS = new Strings( COOKIE.getCookie( "locale" ) );
const HTML = new Html( STRINGS, COOKIE, STRINGS.navbarAbout );

const localeEnButton = document.querySelector("#aboutConfigLocaleEn");
const localeEsButton = document.querySelector("#aboutConfigLocaleEs");
const themeLightButton = document.querySelector("#aboutConfigThemeLight");
const themeDarkButton = document.querySelector("#aboutConfigThemeDark");

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

if ( COOKIE.getCookie( "locale" ) == "es" ) localeEsButton.disabled = true;
else localeEnButton.disabled = true;

if ( COOKIE.getCookie( "theme" ) == "light" ) themeLightButton.disabled = true;
else themeDarkButton.disabled = true;

localeEnButton.addEventListener("click", () => switchLanguage( "en" ));
localeEsButton.addEventListener("click", () => switchLanguage( "es" ));

themeLightButton.addEventListener("click", () => switchTheme( "light" ));
themeDarkButton.addEventListener("click", () => switchTheme( "dark" ));

document.querySelector("#modalCancel").addEventListener("click", () => HTML.modal.hideModal());
document.querySelector("#aboutConfigRestoreButton").addEventListener("click", () => resetCookies());

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////

function switchTheme( theme_code ) {
    COOKIE.setCookie( "theme", theme_code );
    location.reload();
}

function switchLanguage( language_code ) {
    COOKIE.setCookie( "locale", language_code );
    location.reload();
}

function resetCookies() {
    HTML.modal.showQuestionModal( STRINGS.resetCookiesHead, STRINGS.resetCookiesBody, STRINGS.apply, STRINGS.cancel );
    document.querySelector("#modalApply").addEventListener("click", () => {
        COOKIE.resetCookies();
        location.reload();
    });
}