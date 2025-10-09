'use strict';

import Html from "../engine.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const HTML = new Html( "docsFlipper" );
const list = [
    {
        link: "#introduction",
        text: HTML.strings.docsFlipperIndex_1
    },
    {
        link: "#flipperzero",
        text: HTML.strings.docsFlipperIndex_2
    },
    {
        link: "#isitlegal",
        text: HTML.strings.docsFlipperIndex_3
    },
    {
        link: "#whatcanitdo",
        text: HTML.strings.docsFlipperIndex_4
    },
    {
        link: "#customfirmwares",
        text: HTML.strings.docsFlipperIndex_5
    }
];

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

HTML.toast.showToast( 1, HTML.strings.docsNotStarted, 8 );

document.querySelector( "main h2" ).innerHTML = HTML.strings.docsFlipperTitle;
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
        <h3>${strings.docsFlipperIndex_1}</h3>
        <div>
            <p>${strings.docsFlipperContent_1}</p>
        </div>
    `;
}
