'use strict';

import Html from "../engine.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const HTML = new Html( "docsMinecraft" );
const list = [
    {
        link: "#introduction",
        text: HTML.strings.docsMinecraftIndex_1
    },
    {
        link: "#flipperzero",
        text: HTML.strings.docsMinecraftIndex_2
    },
    {
        link: "#isitlegal",
        text: HTML.strings.docsMinecraftIndex_3
    },
    {
        link: "#whatcanitdo",
        text: HTML.strings.docsMinecraftIndex_4
    },
    {
        link: "#customfirmwares",
        text: HTML.strings.docsMinecraftIndex_5
    }
];

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

HTML.toast.showToast( 1, HTML.strings.docsNotStarted, 8 );

document.querySelector( "main h2" ).innerHTML = HTML.strings.docsMinecraftTitle;
document.querySelector( "aside" ).innerHTML = createIndex( HTML.strings.docsIndex, list );

document.getElementById( "introduction" ).innerHTML = createIntroduction( HTML.strings );

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////

function createIndex( index, list ) {
    return `
        <h3>${index}</h3>
        <ol>
            ${list.map( ( li ) => `<li><a href="#${li.link}">${li.text}</a></li>` ).join( "" )}
        </ol>
    `;
}

function createIntroduction( strings ) {
    return `
        <h3>${strings.docsMinecraftIndex_1}</h3>
        <div>
            <p>${strings.docsMinecraftContent_1}</p>
        </div>
    `;
}
