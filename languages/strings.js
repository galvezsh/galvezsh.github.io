'use strict';

import es from './es.js';
import en from './en.js';

const LANGUAGES = { es, en };

export default class Strings {

    constructor( language_code ) {

        // STRINGS
        Object.assign( this, {
            // WEBSITE
            websiteVersion: "v1.0.4_Release (2025.09)",
            websiteDevelopers: "Alberto Gálvez (galvezsh)",

            // STATICS (Only in english because is the default language of the website. Basically for the first login and stuff like this...
            staticWelcomeVoid: "Welcome to the void",

            // LOCALE-BUTTONS
            aboutConfigLocaleEn: "🇺🇸 Switch to English 🇬🇧",
            aboutConfigLocaleEs: "🇪🇸 Cambiar a español 🇲🇽",

            // NAVBAR
            navbarStartLink: "/home",
            navbarProjectsLink: "/projects",
            navbarAboutLink: "/about",

            // FOOTER
            youtubeLink: "https://www.youtube.com/@galvezsh",
            twitchLink: "#",
            discordLink: "#",
            instagramLink: "https://www.instagram.com/galvez.sh/",
            githubLink: "https://github.com/galvezsh",
            linkedinLink: "https://www.linkedin.com/in/alberto-galvez-gandullo-01838a244/",
            emailLink: "alberto.galvez.n7@gmail.com",

            // DOCS (must have the same name as the doc's name. ex: /projects/[homelab] -> /docs/[homelab].html)
            diyServerDoc: "/projects/homelab",
            minecraftServersDoc: "/projects/minecraft",
            flipperZeroDoc: "/projects/flipper"

        });

        // LOCALE
        if ( language_code != "null" ) {
            Object.assign( this, LANGUAGES[ language_code ] )
        } else {
            Object.assign( this, en )
        }
    }
}