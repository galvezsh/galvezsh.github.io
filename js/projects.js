'use strict';

import Strings from "../languages/strings.js";
import { Html, Cookie } from "./engine.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const COOKIE = new Cookie();
const STRINGS = new Strings( COOKIE.getCookie( "locale" ) );
new Html( STRINGS, COOKIE, STRINGS.navbarProjects );

const LINKS = [ STRINGS.flipperZeroDoc, STRINGS.minecraftServersDoc, STRINGS.diyServerDoc ];

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

document.querySelectorAll("#seeFullDocument").forEach( (link, index) => {
    link.innerHTML += STRINGS.projectsSeeFullDocument;
    link.href = LINKS[ index ];
});

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////
