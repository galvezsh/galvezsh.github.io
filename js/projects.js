'use strict';

import timeline from "./components/timeline.js";
import Html from "./engine.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const HTML = new Html( "navbarDocuments" );
const personalDocuments = [
    {
        title: HTML.strings.documents_3_title,
        date: HTML.strings.documents_3_date,
        content: HTML.strings.documents_3_content,
        link: HTML.strings.minecraftServersDoc,
        linkText: HTML.strings.documentsSeeFullDocument
    },
    {
        title: HTML.strings.documents_2_title,
        date: HTML.strings.documents_2_date,
        content: HTML.strings.documents_2_content,
        link: HTML.strings.flipperZeroDoc,
        linkText: HTML.strings.documentsSeeFullDocument
    },
    {
        title: HTML.strings.documents_1_title,
        date: HTML.strings.documents_1_date,
        content: HTML.strings.documents_1_content,
        link: HTML.strings.diyServerDoc,
        linkText: HTML.strings.documentsSeeFullDocument
    }
];

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

document.getElementById("title").innerHTML = createTitle( HTML.strings.documentsContent );
document.getElementById("projects").innerHTML = timeline( HTML.strings.documentsTitle, "list-check", personalDocuments );

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////

function createTitle( content ) {
    return `
        <p>${content}</p>
    `;
}