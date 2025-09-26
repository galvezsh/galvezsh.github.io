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
        this.void = new Void( STRINGS );
        this.toast = new Toast( STRINGS );
        this.modal = new Modal();
        if ( COOKIE.getCookie( "theme" ) == "light" )
           this.navbar = new NavBar( STRINGS, navItemSelected, true, () => { this.changeTheme( true, COOKIE ); });
        else
           this.navbar = new NavBar( STRINGS, navItemSelected, false, () => { this.changeTheme( false, COOKIE ); });
        this.footer = new Footer( STRINGS );

        document.title = STRINGS.websiteName + ": " + navItemSelected;

        this.setTheme( COOKIE );
        this.setLocale( STRINGS );

        // Trigger first-time setup if user has not been logged before
        if ( COOKIE.getCookie( "logged" ) != "true" ) {
            this.firstStart( STRINGS, COOKIE );
        }
    }

    changeTheme( lightMode, COOKIE ) {
        if ( lightMode == true ) 
            COOKIE.setCookie( "theme", "dark" );
        else 
            COOKIE.setCookie( "theme", "light" );

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
        // this.toast.showToast(1, STRINGS.staticBetaWebsite, 8);
        this.void.showVoid();

        COOKIE.setCookie( "logged", "true" );
        COOKIE.setCookie( "locale", "en" );
        COOKIE.setCookie( "theme", "dark" );
    }
}