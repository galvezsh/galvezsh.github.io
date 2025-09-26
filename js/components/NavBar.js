'use strict';

export default class NavBar {

    /**
     * Initializes the navigation bar and builds its links.
     * 
     * @param {object} STRINGS An object containing localized strings and corresponding navigation URLs.
     * @param {string} navItemSelected The currently active navigation item to be visually highlighted.
     * @param {boolean} lightMode A boolean that checks if the website is in light mode or not.
     * @param {string} callback A callback feature that sends an action backwards when the button is pressed.
     */
    constructor( STRINGS, navItemSelected, lightMode, callback ) {
        this.nav = document.querySelector( "main nav" );

        this.buildBlock( STRINGS, navItemSelected, lightMode, () => { callback(); } );
    }

    /**
     * Dynamically creates the navigation menu with localized labels and highlights the active item.
     * 
     * @param {object} STRINGS An object containing the navigation item labels and URLs.
     * @param {string} navItemSelected The navigation label to be marked as active.
     * @param {boolean} lightMode A boolean that checks if the website is in light mode or not.
     * @param {string} callback A callback feature that sends an action backwards when the button is pressed.
     */
    buildBlock( STRINGS, navItemSelected, lightMode, callback ) {
        const theme = document.createElement("a");
        const ul = document.createElement( "ul" );
        const locale = document.createElement("a");
        const navItems = {
            [ STRINGS.navbarStart ]: [ STRINGS.navbarStartLink ],
            [ STRINGS.navbarProjects ]: [ STRINGS.navbarProjectsLink ],
            [ STRINGS.navbarAbout ]: [ STRINGS.navbarAboutLink ]
        };

        if ( lightMode ) 
            theme.innerHTML = '<i class="fa-solid fa-moon"></i>';
        else
            theme.innerHTML = '<i class="fa-solid fa-sun"></i>';
        
        theme.onclick = () => { callback(); };
        this.nav.appendChild( theme );

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

        locale.innerHTML += '<i class="fa-solid fa-regular fa-globe"></i>';

        this.nav.appendChild( ul );
        this.nav.appendChild( locale );
    }
}
