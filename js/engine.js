'use strict';

import Strings from "./languages/strings.js";
import Void from './components/Void.js';
import Toast from './components/Toast.js';
import Modal from './components/Modal.js';
import navbar from './components/navbar.js';
import footer from './components/footer.js';

class Cookie {
    /**
     * Creates a new Cookie helper instance.
     */
    constructor() {
        this.lifetimeCookie = 30;
        this.defaults = {
            logged: "false",
            locale: "en",
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
            this.setCookie(name, defaultValue);
        }
    }

    /**
     * Initializes cookies with default values if they don't exist yet.
     * Useful for first-time visits or missing cookies.
     */
    initializeCookies() {
        for ( const [name, defaultValue] of Object.entries( this.defaults ) ) {
            if (this.getCookie(name) === null) {
                this.setCookie(name, defaultValue);
            }
        }
    }
}

export default class Html {

    /**
     * Initializes the HTML layout and sets localized content, theme, and startup behavior.
     * 
     * @param {string} navItemSelected The selected navigation item based on a number (0 -> home, 1 -> projects or 2 -> about).
     */
    constructor( navItemSelected ) {
        this.cookie = new Cookie();
        this.strings = new Strings( this.cookie.getCookie("locale") );
        this.void = new Void( this.strings );
        this.toast = new Toast( this.strings );
        this.modal = new Modal( this.strings );

        const lightMode = this.cookie.getCookie("theme") == "light";
        const firstStart = this.cookie.getCookie("logged") != "true";
        const navbarItems = {
            [this.strings.navbarHome]: this.strings.navbarHomeLink,
            [this.strings.navbarProjects]: this.strings.navbarProjectsLink,
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

        document.querySelector("main nav").innerHTML = navbar( this.strings, navbarItems, navItemSelected, lightMode );
        document.querySelector("main footer").innerHTML = footer( this.strings, footerItems );

        document.getElementById("theme-toggle").addEventListener( "click", () => this.changeTheme(lightMode) );
        document.getElementById("locale-toggle").addEventListener( "click", () => this.showLocaleModal() );

        document.title = this.strings.websiteName + ": " + this.strings[navItemSelected];

        // Set theme based on cookie
        if (lightMode) document.body.classList.add("light");

        // Trigger first-time setup if user has not been logged before
        if (firstStart) this.firstStart();
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
     * Displays a modal dialog that allows the user to change the website language.
     */
    showLocaleModal() {
        const div = document.createElement("div");
        div.classList.add("lang");

        this.strings.supportedLanguages().forEach( locale => {
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