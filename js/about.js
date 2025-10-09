'use strict';

import timeline from "./components/timeline.js";
import Html from "./engine.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const HTML = new Html( "navbarAbout" );
const legacyItems = [
    {
        title: HTML.strings.aboutHistoryTitle_3,
        date: HTML.strings.aboutHistoryDate_3,
        content: HTML.strings.aboutHistoryContent_3,
        link: "../resources/images/digitalvoid/eedg_0.3.1.png",
        linkText: HTML.strings.aboutHistorySeeImage
    },
    {
        title: HTML.strings.aboutHistoryTitle_2,
        date: HTML.strings.aboutHistoryDate_2,
        content: HTML.strings.aboutHistoryContent_2,
        link: "../resources/images/digitalvoid/gssr_0.2.11.png",
        linkText: HTML.strings.aboutHistorySeeImage
    },
    {
        title: HTML.strings.aboutHistoryTitle_1,
        date: HTML.strings.aboutHistoryDate_1,
        content: HTML.strings.aboutHistoryContent_1,
        link: "../resources/images/digitalvoid/gssr_0.1.1.png",
        linkText: HTML.strings.aboutHistorySeeImage
    }
];

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

document.getElementById("about").innerHTML = createAbout( HTML.strings.aboutAboutTitle, HTML.strings.websiteVersion, HTML.strings.aboutAboutVersion, HTML.strings.websiteDevelopers, HTML.strings.aboutAboutDevelopers );
document.getElementById("config").innerHTML = createConfig( HTML.strings.aboutConfigTitle, HTML.strings.aboutConfigRestoreLabel, HTML.strings.aboutConfigRestoreButton );
document.getElementById("legacy").innerHTML = timeline( HTML.strings.aboutHistoryTitle, "hourglass-half", legacyItems );

document.querySelector("#aboutConfigRestoreButton").addEventListener("click", () => resetCookies());

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////

function createAbout( title, version, versionLabel, developers, developersLabel ) {
    return `
        <h2><i class="fa-solid fa-globe"></i>${title}</h2>
        <p><span>${versionLabel}</span><strong>${version}</strong></p>
        <p><span>${developersLabel}</span><strong>${developers}</strong></p>
    `;
}

function createConfig( title, restoreLabel, restoreButton ) {
    return `
        <h2><i class="fa-solid fa-wrench"></i>${title}</h2>

        <div class="container-small">    
            <p class="m0">${restoreLabel}</p>
            <button class="primary" id="aboutConfigRestoreButton">${restoreButton}</button>
        </div>
    `;
}

function resetCookies() {
    HTML.modal.showQuestionModal( HTML.strings.aboutConfigRestoreCookiesTitle, HTML.strings.aboutConfigRestoreCookiesContent, () => {
        HTML.cookie.resetCookies();
        location.reload();
    });
}