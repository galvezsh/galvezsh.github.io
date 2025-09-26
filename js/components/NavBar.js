'use strict';

export default class NavBar {

    /**
     * Initializes the navigation bar and builds its links.
     * 
     * @param {object} STRINGS An object containing localized strings and corresponding navigation URLs.
     * @param {string} navItemSelected The currently active navigation item to be visually highlighted.
     */
    constructor( STRINGS, navItemSelected ) {
        this.nav = document.querySelector( "main nav" );

        this.buildBlock( STRINGS, navItemSelected );
    }

    /**
     * Dynamically creates the navigation menu with localized labels and highlights the active item.
     * 
     * @param {object} STRINGS An object containing the navigation item labels and URLs.
     * @param {string} navItemSelected The navigation label to be marked as active.
     */
    buildBlock( STRINGS, navItemSelected ) {
        const ul = document.createElement( "ul" );

        const navItems = {
            [ STRINGS.navbarStart ]: [ STRINGS.navbarStartLink ],
            [ STRINGS.navbarProjects ]: [ STRINGS.navbarProjectsLink ],
            [ STRINGS.navbarAbout ]: [ STRINGS.navbarAboutLink ]
        };

        Object.entries( navItems ).forEach( ( [ text, href ] ) => {
            const li = document.createElement( "li" );
            const a = document.createElement( "a" );

            a.textContent = text;
            a.href = href;

            if ( text === navItemSelected ) {
                a.classList.add( "active" );
            }

            li.appendChild( a );
            ul.appendChild( li );
        });

        this.nav.appendChild( ul );
    }
}
