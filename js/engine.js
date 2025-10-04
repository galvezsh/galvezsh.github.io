'use strict';

import Strings from "../js/languages/strings.js";
import Void from './components/Void.js';
import Toast from './components/Toast.js';
import Modal from './components/Modal.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

class Cookie {

    /**
     * Creates a new Cookie helper instance.
     */
    constructor() {
        this.lifetimeCookie = 30;
    }

    /**
     * Retrieves the value of a specific cookie.
     * 
     * @param {string} cookieName The name of the cookie to retrieve.
     */
    getCookie( cookieName ) {
        let cookies = document.cookie.split('; ');

        for ( let cookie of cookies ) {
            let [name, value] = cookie.split('=');

            if (name === cookieName) 
                return decodeURIComponent(value);
            
        }

        return "null";
    }

    /**
     * Sets a cookie with the specified name and value.
     * 
     * @param {string} name The name of the cookie.
     * @param {string} value The value to store in the cookie.
     * @param {number} days (opcional) The number of the days of the cookie for stay 'active'.
     */
    setCookie( name, value, days = this.lifetimeCookie ) {
        let expirationDate = new Date();
        expirationDate.setDate( expirationDate.getDate() + days );
      
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; path=/' + '; SameSite=Lax';
    }

    /**
     * Resets all relevant cookies to their default values.
     */
    resetCookies() {
        this.setCookie( "logged", "false" );
        this.setCookie( "locale", "en" );
        this.setCookie( "theme", "dark" );
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
        this.strings = new Strings( this.cookie.getCookie( "locale" ) );

        if ( this.cookie.getCookie( "theme" ) == "light" )
            this.lightMode = true
        else
            this.lightMode = false

        this.void = new Void( this.strings );
        this.toast = new Toast( this.strings );
        this.modal = new Modal();
        this.navbar = new NavBar( this.strings, navItemSelected, this.lightMode, () => { 
            this.changeTheme( this.lightMode, this.cookie ); 
        }, () => {
            this.showLocaleModal( this.modal, this.strings, ( locale ) => { this.changeLocale( locale, this.cookie ); } ); 
        } );
        this.footer = new Footer( this.strings );

        // document.title = this.strings.websiteName + ": " + navItemSelected;

        if ( this.cookie.getCookie("theme") == "light" )
            document.body.classList.add("light");

        // Trigger first-time setup if user has not been logged before
        if ( this.cookie.getCookie( "logged" ) != "true" ) {
            this.firstStart( this.strings, this.cookie );
        }
    }

    /**
     * Toggles the current theme (light/dark) and updates the cookie accordingly.
     * 
     * @param {boolean} lightMode Indicates whether the current theme is light mode.
     * @param {object} cookie An object for managing cookies.
     */
    changeTheme( lightMode, cookie ) {
        if ( lightMode == true ) 
            cookie.setCookie( "theme", "dark" );
        else 
            cookie.setCookie( "theme", "light" );

        window.location.reload();
    }
    
    /**
     * Displays a modal dialog that allows the user to change the website language.
     * 
     * @param {object} modal An instance of the modal component.
     * @param {object} strings An object containing localized strings.
     * @param {function} callback A function to execute when a locale option is selected.
     */
    showLocaleModal( modal, strings, callback ) {
        const div = document.createElement("div");
        div.classList.add("lang");

        strings.supportedLanguages().forEach( locale => {
            const a = document.createElement("a");
            const key = locale + "Locale"; // Building automatically the variable: "enLocale", "esLocale", ...

            a.innerHTML = strings[key];
            a.href = "";
            a.onclick = () => { callback( locale ); };

            div.appendChild(a);
        });

        modal.showInfoModal( strings.navbarLocale, div );
    }

    /**
     * Changes the current locale, stores it in cookies, and reloads the page.
     * 
     * @param {string} locale The locale code to apply (e.g., "en" or "es").
     * @param {object} cookie An object for managing cookies.
     */
    changeLocale( locale, cookie ) {
        cookie.setCookie( "locale", locale );
        window.location.reload();
    }

    /**
     * Performs first-time setup operations, such as displaying a toast and initializing cookies.
     * 
     * @param {object} strings An object containing static strings for localization.
     * @param {object} cookie An object containing statics methods for managing cookies.
     */
    firstStart( strings, cookie ) {
        this.void.showVoid();

        cookie.setCookie( "logged", "true" );
        cookie.setCookie( "locale", "en" );
        cookie.setCookie( "theme", "dark" );
    }
}