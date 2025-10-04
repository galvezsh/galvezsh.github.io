'use strict';

export default class NavBar {

    /**
     * Initializes the navigation bar and builds its links.
     * 
     * @param {object} strings An object containing localized strings and corresponding navigation URLs.
     * @param {string} navItemSelected The currently active navigation item to be visually highlighted.
     * @param {boolean} lightMode A boolean that checks if the website is in light mode or not.
     * @param {string} callbackTheme A callback feature that sends an action backwards when the theme button is pressed.
     * @param {string} callbackLocale A callback feature that sends an action backwards when the locale button is pressed.
     */
    constructor( strings, navItemSelected, lightMode, callbackTheme, callbackLocale ) {
        this.strings = strings;
        this.nav = document.querySelector( "main nav" );

        this.buildBlock( navItemSelected, lightMode, () => { callbackTheme(); }, () => { callbackLocale(); } );
    }

    /**
     * Dynamically creates the navigation menu with localized labels and highlights the active item.
     * 
     * @param {string} navItemSelected The navigation label to be marked as active.
     * @param {boolean} lightMode A boolean that checks if the website is in light mode or not.
     * @param {string} callbackTheme A callback feature that sends an action backwards when the theme button is pressed.
     * @param {string} callbackLocale A callback feature that sends an action backwards when the locale button is pressed.
     */
    buildBlock( navItemSelected, lightMode, callbackTheme, callbackLocale ) {
        const theme = document.createElement("a");
        const ul = document.createElement( "ul" );
        const locale = document.createElement("a");
        const navItemsActive = [
            this.strings.navbarHome,
            this.strings.navbarProjects,
            this.strings.navbarAbout
        ];
        const navItems = {
            [ this.strings.navbarHome ]: [ this.strings.navbarHomeLink ],
            [ this.strings.navbarProjects ]: [ this.strings.navbarProjectsLink ],
            [ this.strings.navbarAbout ]: [ this.strings.navbarAboutLink ]
        };

        if ( lightMode ) 
            theme.innerHTML = '<i class="fa-solid fa-moon"></i>';
        else
            theme.innerHTML = '<i class="fa-solid fa-sun"></i>';
        
        theme.onclick = () => { callbackTheme(); };
        this.nav.appendChild( theme );

        Object.entries( navItems ).forEach( ( [ text, href ] ) => {
            const li = document.createElement( "li" );
            const a = document.createElement( "a" );

            a.textContent = text;
            a.href = href;

            if ( text === navItemsActive[ navItemSelected ] ) {
                a.classList.add( "active" );
            }

            li.appendChild( a );
            ul.appendChild( li );
        });

        locale.innerHTML += '<i class="fa-solid fa-language"></i>';
        locale.onclick = () => { callbackLocale(); };

        this.nav.appendChild( ul );
        this.nav.appendChild( locale );
    }
}
