'use strict';

import en from './en.js';
import es from './es.js';

const LANGUAGES = { en, es };
const supportedLanguages = Object.keys( LANGUAGES );

export default class Strings {

    constructor( language_code ) {

        // STRINGS
        Object.assign( this, {
            // WEBSITE
            websiteVersion: "v1.0.5 (2025.09)",
            websiteDevelopers: "Alberto Gálvez (galvezsh)",

            // STATICS (Only in english because is the default language of the website. Basically for the first login and stuff like this...
            staticWelcomeVoid: "Welcome to the void",

            // NAVBAR
            navbarHomeLink: "/home",
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

            // DOCS
            diyServerDoc: "/projects/homelab",
            minecraftServersDoc: "/projects/minecraft",
            flipperZeroDoc: "/projects/flipper",

            // SHARED
            java: "Java",
            kotlin: "Kotlin",
            python: "Python",
            html: "HTML",
            css: "CSS",
            javascript: "JavaScript",
            php: "PHP",
            sql: "SQL - PL/SQL",
            powershell: "Powershell - Shell Script",

            kotlinMultiplatform: "Kotlin multiplatform",
            composeMultiplatform: "Compose Multiplatform",
            jetpackCompose: "Jetpack Compose",
            daggerHilt: "Dagger Hilt",
            koin: "Koin",
            mvvm: "MVVM + Clean Arquitecture",
            principles: "SOLID - DRY",
            navigationCompose: "Navigation Compose",
            room: "Room",

            git: "Git",
            vscode: "VS Code",
            androidStudio: "Android Studio",
            intellij: "Intellij IDEA",
            pycharm: "PyCharm",
            phpstorm: "PhpStorm",
            docker: "Docker",
            figma: "Figma",

            chatgpt: "ChatGPT",
            gemini: "Gemini",
            copilot: "GitHub Copilot",
            notebookLM: "NotebookLM",
            firebaseStudio: "Firebase Studio",

            firebase: "Firebase",
            springBoot: "Spring Boot",
            hibernate: "Hibernate",
            react: "React",
            cakephp: "CakePHP",
            django: "Django",

            mysql: "MySQL",
            mariadb: "MariaDB",
            mongodb: "MongoDB",
            postgresql: "PostgreSQL",

        });

        // LOCALE
        if ( language_code != "null" ) {
            Object.assign( this, LANGUAGES[ language_code ] )
        } else {
            Object.assign( this, en )
        }
    }

    supportedLanguages() {
        return supportedLanguages;
    }
}