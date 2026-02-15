'use strict';

import es from './languages/es.js';
import en from './languages/en.js';

import Void from './components/void.js';
import toast from './components/toast.js';
import modal from './components/modal.js';
import header from './components/header.js';
import footer from './components/footer.js';

export class Cookie {
    /**
     * Creates a new Cookie helper instance. This class is used to manage the cookies of the website, helping the developer accessing to the cookies stored in the navigator.
     */
    constructor() {
        this.lifetimeCookie = 30;
        this.defaults = {
            logged: "false",
            locale: "es",
            theme: "dark"
        };
        this.initializeCookies();
    }

    /**
     * Retrieves the value of a specific cookie.
     * 
     * @param {string} cookieName The name of the cookie to retrieve.
     * @returns {string|null} The value of the cookie, or null if not found.
     */
    getCookie( cookieName ) {
        const cookies = document.cookie.split("; ");

        for ( let cookie of cookies ) {
            const [name, value] = cookie.split("=");

            if ( name === cookieName ) {
                return decodeURIComponent(value);
            }
        }
        return null;
    }

    /**
     * Sets a cookie with the specified name and value.
     * 
     * @param {string} name The name of the cookie.
     * @param {string} value The value to store in the cookie.
     * @param {number} days (optional) Days the cookie stays active (default 30).
     */
    setCookie( name, value, days = this.lifetimeCookie ) {
        const expirationDate = new Date();

        expirationDate.setDate( expirationDate.getDate() + days );
        document.cookie =
            encodeURIComponent(name) +
            "=" +
            encodeURIComponent(value) +
            "; expires=" +
            expirationDate.toUTCString() +
            "; path=/" +
            "; SameSite=Lax";
    }

    /**
     * Resets all cookies back to their default values.
     * Useful when the user presses a "reset cookies" button.
     */
    resetCookies() {
        for ( const [name, defaultValue] of Object.entries( this.defaults ) ) {
            this.setCookie( name, defaultValue );
        }
    }

    /**
     * Initializes cookies with default values if they don't exist yet.
     * Useful for first-time visits or missing cookies.
     */
    initializeCookies() {
        for ( const [name, defaultValue] of Object.entries( this.defaults ) ) {
            if (this.getCookie( name ) === null ) {
                this.setCookie( name, defaultValue );
            }
        }
    }
}

export class Strings {

    /**
         * Creates a new Strings helper instance. This class is used to manage the strings of the website, and configure witch locale should be used based on the 'language_code'.
     * 
     * @param {string} language_code - A string that represents the language code (e.g., "es", "en", "fr"...).
     */
    constructor( language_code ) {

        const languages = { es, en };
        this.supportedLanguages = Object.keys( languages );

        // STRINGS
        Object.assign( this, {
            // WEBSITE
            websiteVersion: "v2.0.4 (2026.02.15)",
            websiteDevelopers: "Alberto Gálvez (galvezsh)",

            // NAVBAR
            navbarHomeLink: "/home",
            navbarDocumentsLink: "/documents",
            navbarAboutLink: "/about",

            // FOOTER
            youtubeLink: "https://www.youtube.com/@agalvezsh",
            twitchLink: "https://www.twitch.tv/galvezsh",
            discordLink: "#",
            instagramLink: "https://www.instagram.com/agalvezsh/",
            githubLink: "https://github.com/galvezsh",
            linkedinLink: "https://www.linkedin.com/in/alberto-galvez-gandullo/",
            emailLink: "mailto:agalvezsh@gmail.com",
            cvMultiplatformLink: "../resources/documents/cv_multiplatform.pdf",
            cvBackendLink: "../resources/documents/cv_backend.pdf",

            // CERTIFICATIONS
            aiCertLink: "../resources/documents/ai_cert.pdf",
            wordpress1CertLink: "../resources/documents/wordpress_1_cert.pdf",
            wordpress2CertLink: "../resources/documents/wordpress_2_cert.pdf",
            arduinoCertLink: "../resources/documents/arduino_cert.pdf",

            // DOCS
            flipperZeroDoc: "/documents/flipper",
            diyServerDoc: "/documents/homelab",
            lusitanoDoc: "/documents/lusitano",

            // SHARED
            linkedin: "LinkedIn",
            github: "GitHub",
            email: "Email",
            cvMultiplatform: "Curriculum Vitae | Android - KMP",
            cvBackend: "Curriculum Vitae | SpringBoot",

            oop: "Oriented Object Programming",
            multilanguage: "Multi-language",

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
            navigationCompose: "Compose Navigation",
            room: "Room",
            paging3: "Paging 3",
            retrofit: "Retrofit",

            git: "Git",
            vscode: "VS Code",
            androidStudio: "Android Studio",
            intellij: "Intellij IDEA",
            pycharm: "PyCharm",
            phpstorm: "PhpStorm",
            docker: "Docker",
            figma: "Figma",

            claude: "Claude Code CLI",
            chatgpt: "ChatGPT",
            copilot: "GitHub Copilot",
            stitch: "Google Stitch",

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
        if ( language_code && languages[ language_code ] ) { 
            Object.assign( this, languages[ language_code ] );
        } else {
            Object.assign( this, es );
        }
    }
}

export default class Html {

    /**
     * Initializes the base HTML layout, define the cookie and strings objects, inject modal, toast, void, header and footer and 
     * set theme and locale.
     * 
     * @param {string} navItemSelected The selected navigation item based in a string. The string must be present 
     * in strings.js and be one of the navbarItems keys.
     */
    constructor( navItemSelected ) {
        this.cookie = new Cookie();
        this.strings = new Strings( this.cookie.getCookie("locale") );
        this.modal = new modal( this.strings );
        this.toast = new toast( this.strings );
        this.void = new Void( this.strings );

        this.header = document.querySelector("main header");
        this.footer = document.querySelector("main footer");

        const lightMode = this.cookie.getCookie("theme") == "light";
        const firstStart = this.cookie.getCookie("logged") != "true";
        const navbarItems = {
            [this.strings.navbarHome]: this.strings.navbarHomeLink,
            [this.strings.navbarDocuments]: this.strings.navbarDocumentsLink,
            [this.strings.navbarAbout]: this.strings.navbarAboutLink
        };
        const footerItems = {
            "youtube": this.strings.youtubeLink,
            "twitch": this.strings.twitchLink,
            "discord": this.strings.discordLink,
            "instagram": this.strings.instagramLink,
            "github": this.strings.githubLink,
            "linkedin": this.strings.linkedinLink
        };

        // Check if navbar and footer exist, else skip initialization
        if ( this.header ) {
            this.header.innerHTML = header( this.strings, navbarItems, navItemSelected, lightMode );
            document.getElementById("theme-toggle").addEventListener( "click", () => this.changeTheme( lightMode ) );
            document.getElementById("locale-toggle").addEventListener( "click", () => this.showLocaleModal() );
        } else console.warn( this.strings.headerNotFound );
        
        if ( this.footer ) this.footer.innerHTML = footer( this.strings, footerItems );
        else console.warn( this.strings.footerNotFound );

        document.title = this.strings.websiteName + ": " + this.strings[navItemSelected];

        // Set theme based on cookie
        if ( lightMode ) document.body.classList.add("light");

        // Trigger first-time setup if user has not been logged before
        if ( firstStart ) this.firstStart();
    }

    /**
     * Toggles the current theme (light/dark) and updates the cookie accordingly.
     * 
     * @param {boolean} lightMode Indicates whether the current theme is light mode.
     */
    changeTheme( lightMode ) {
        // If lightMode is true, set theme to "dark", otherwise set theme to "light"
        this.cookie.setCookie( "theme", lightMode ? "dark" : "light" );
        window.location.reload();
    }

    /**
     * Displays a modal with a list of supported languages and their corresponding translations.
     * When a language is selected, the changeLocale method is called to update the language settings.
     * 
     * Thanks to the DOM, we can assign lamdas to the onclick event of the links, avoiding the need to 
     * create event listeners for each link.
     * 
     * If we do the same with return`...`, we lose the lambda and the onclick event is not triggered.
     */
    showLocaleModal() {
        const div = document.createElement("div");
        div.classList.add("lang");

        this.strings.supportedLanguages.forEach( locale => {
            const a = document.createElement("a");
            const key = locale + "Locale"; // Building automatically the variable: "enLocale", "esLocale", ...

            a.innerHTML = this.strings[key];
            a.onclick = () => this.changeLocale( locale );

            div.appendChild(a);
        });

        this.modal.showInfoModal( this.strings.navbarLocale, div );
    }

    /**
     * Changes the current locale, stores it in cookies, and reloads the page.
     * 
     * @param {string} locale The locale code to apply (e.g., "en" or "es").
     */
    changeLocale( locale ) {
        this.cookie.setCookie( "locale", locale );
        window.location.reload();
    }

    /**
     * Performs first-time setup operations, such as displaying a toast and initializing cookies.
     */
    firstStart() {
        this.void.showVoid();
        this.cookie.setCookie("logged", "true");
    }
}