'use strict';

import timeline from "./components/timeline.js";
import Html from "./engine.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const HTML = new Html( "navbarProjects" );
const personalProjects = [
    {
        title: HTML.strings.projects_3_title,
        date: HTML.strings.projects_3_date,
        content: HTML.strings.projects_3_content,
        link: HTML.strings.flipperZeroDoc,
        linkText: HTML.strings.projectsSeeFullDocument
    },
    {
        title: HTML.strings.projects_2_title,
        date: HTML.strings.projects_2_date,
        content: HTML.strings.projects_2_content,
        link: HTML.strings.minecraftServersDoc,
        linkText: HTML.strings.projectsSeeFullDocument
    },
    {
        title: HTML.strings.projects_1_title,
        date: HTML.strings.projects_1_date,
        content: HTML.strings.projects_1_content,
        link: HTML.strings.diyServerDoc,
        linkText: HTML.strings.projectsSeeFullDocument
    }
];

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

document.getElementById("title").innerHTML = createTitle( HTML.strings.projectsPersonalProjectsContent );
document.getElementById("projects").innerHTML = timeline( HTML.strings.projectsPersonalProjectsTitle, "list-check", personalProjects );

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////

function createTitle( content ) {
    return `
        <p>${content}</p>
    `;
}