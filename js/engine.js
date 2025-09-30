'use strict';

import Void from './components/Void.js';
import Toast from './components/Toast.js';
import Modal from './components/Modal.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

export class Cookie {

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

export class Html {

    /**
     * Initializes the HTML layout and sets localized content, theme, and startup behavior.
     * 
     * @param {object} STRINGS An object containing static strings for localization.
     * @param {object} COOKIE An object containing statics methods for managing cookies.
     * @param {string} navItemSelected The selected navigation item used as the page title suffix.
     */
    constructor( STRINGS, COOKIE, navItemSelected ) {
        if ( COOKIE.getCookie( "theme" ) == "light" )
            this.lightMode = true
        else
            this.lightMode = false

        this.void = new Void( STRINGS );
        this.toast = new Toast( STRINGS );
        this.modal = new Modal();
        this.navbar = new NavBar( STRINGS, navItemSelected, this.lightMode, () => { 
            this.changeTheme( this.lightMode, COOKIE ); 
        }, () => {
            this.showLocaleModal( this.modal, STRINGS, ( locale ) => { this.changeLocale( locale, COOKIE ); } ); 
        } );
        this.footer = new Footer( STRINGS );

        document.title = STRINGS.websiteName + ": " + navItemSelected;

        this.setTheme( COOKIE );
        this.setLocale( STRINGS );

        // Trigger first-time setup if user has not been logged before
        if ( COOKIE.getCookie( "logged" ) != "true" ) {
            this.firstStart( STRINGS, COOKIE );
        }
    }

    /**
     * Toggles the current theme (light/dark) and updates the cookie accordingly.
     * 
     * @param {boolean} lightMode Indicates whether the current theme is light mode.
     * @param {object} COOKIE An object for managing cookies.
     */
    changeTheme( lightMode, COOKIE ) {
        if ( lightMode == true ) 
            COOKIE.setCookie( "theme", "dark" );
        else 
            COOKIE.setCookie( "theme", "light" );

        window.location.reload();
    }
    
    /**
     * Displays a modal dialog that allows the user to change the website language.
     * 
     * @param {object} modal An instance of the modal component.
     * @param {object} STRINGS An object containing localized strings.
     * @param {function} callback A function to execute when a locale option is selected.
     */
    showLocaleModal( modal, STRINGS, callback ) {
        const div = document.createElement("div");
        div.classList.add("lang");

        STRINGS.supportedLanguages().forEach( locale => {
            const a = document.createElement("a");
            const key = locale + "Locale"; // Building automatically the variable: "enLocale", "esLocale", ...

            a.innerHTML = STRINGS[key];
            a.href = "";
            a.onclick = () => { callback( locale ); };

            div.appendChild(a);
        });

        modal.showInfoModal(STRINGS.navbarLocale, div);
    }

    /**
     * Changes the current locale, stores it in cookies, and reloads the page.
     * 
     * @param {string} locale The locale code to apply (e.g., "en" or "es").
     * @param {object} COOKIE An object for managing cookies.
     */
    changeLocale( locale, COOKIE ) {
        COOKIE.setCookie( "locale", locale );
        window.location.reload();
    }

    /**
     * Applies the selected theme to the document based on the stored cookie.
     * 
     * @param {object} COOKIE An object containing statics methods for managing cookies.
     */
    setTheme( COOKIE ) {
        if ( COOKIE.getCookie("theme") == "light" )
            document.body.classList.add("light");
    }

    /**
     * Populates HTML elements with localized strings based on their IDs.
     * 
     * @param {object} STRINGS An object containing localized string values, where each key matches an element ID.
     */
    setLocale( STRINGS ) {
        Object.entries( STRINGS ).forEach( ([key, value]) => {
            const element = document.getElementById(key);

            if ( element ) {
                element.innerHTML += value;
            }
        });
    }

    /**
     * Performs first-time setup operations, such as displaying a toast and initializing cookies.
     * 
     * @param {object} STRINGS An object containing static strings for localization.
     * @param {object} COOKIE An object containing statics methods for managing cookies.
     */
    firstStart( STRINGS, COOKIE ) {
        this.void.showVoid();

        COOKIE.setCookie( "logged", "true" );
        COOKIE.setCookie( "locale", "en" );
        COOKIE.setCookie( "theme", "dark" );
    }
}