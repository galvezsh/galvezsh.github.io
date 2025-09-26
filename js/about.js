'use strict';

import Strings from "../js/languages/strings.js";
import { Html, Cookie } from "./engine.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const COOKIE = new Cookie();
const STRINGS = new Strings( COOKIE.getCookie( "locale" ) );
const HTML = new Html( STRINGS, COOKIE, STRINGS.navbarAbout );

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

document.querySelector("#modalCancel").addEventListener("click", () => HTML.modal.hideModal());
document.querySelector("#aboutConfigRestoreButton").addEventListener("click", () => resetCookies());

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////

function resetCookies() {
    HTML.modal.showQuestionModal( STRINGS.resetCookiesHead, STRINGS.resetCookiesBody, STRINGS.apply, STRINGS.cancel );
    document.querySelector("#modalApply").addEventListener("click", () => {
        COOKIE.resetCookies();
        location.reload();
    });
}