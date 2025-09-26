'use strict';

import Strings from "../languages/strings.js";
import { Html, Cookie } from "./engine.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const COOKIE = new Cookie();
const STRINGS = new Strings( COOKIE.getCookie( "locale" ) );
const HTML = new Html( STRINGS, COOKIE, STRINGS.navbarStart );

const workState = false;
const workLabel = document.querySelector("#workLabel");
const SKILL_DETAILS = [ STRINGS.startMicroinformaticSkillsDetail, STRINGS.startProgrammingSkillsDetail, STRINGS.startCibersecuritySkillsDetail ];
const PROJECTS_LINKS = [ STRINGS.githubLink + "/Digital_studio", STRINGS.githubLink + "/RickAndMortyDB" ];

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

if ( workState ) workLabel.textContent = STRINGS.startAlreadyWorking;
else workLabel.textContent = STRINGS.startReadyToWork;

document.getElementById("link-in").href = STRINGS.linkedinLink;
document.getElementById("link-gh").href = STRINGS.githubLink;
document.getElementById("link-em").href = "mailto:" + STRINGS.emailLink;

document.querySelectorAll("#knowMore").forEach( (button, index) => {
    button.textContent = STRINGS.startKnowMore;
    button.addEventListener("click", () => HTML.modal.showInfoModal( STRINGS.startDeepKnowledge, SKILL_DETAILS[ index ] ) );
});

document.querySelectorAll("#projectsGithub").forEach( (link, index) => {
    link.innerHTML += STRINGS.startProjectsGithub;
    link.href = PROJECTS_LINKS[ index ];
});

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////
