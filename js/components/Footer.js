'use strict';

export default class Footer {

    /**
     * Initializes the footer component and builds its structure.
     * 
     * @param {object} STRINGS An object containing localized static strings and external social links.
     */
    constructor( STRINGS ) {
        this.footer = document.querySelector( "main footer" );

        this.buildBlock( STRINGS );
    }

    /**
     * Dynamically constructs the footer content, including copyright 
     * and a list of social media links with their corresponding icons.
     * 
     * @param {object} STRINGS An object containing the website name and social media URLs.
     */
    buildBlock( STRINGS ) {
        const label = document.createElement( "span" );
        const ul = document.createElement( "ul" );

        const footerItems = {
            [ "fa-brands fa-youtube" ]: [ STRINGS.youtubeLink ],
            [ "fa-brands fa-twitch" ]: [ STRINGS.twitchLink ],
            [ "fa-brands fa-discord" ]: [ STRINGS.discordLink ],
            [ "fa-brands fa-instagram" ]: [ STRINGS.instagramLink ],
            [ "fa-brands fa-github" ]: [ STRINGS.githubLink ],
            [ "fa-brands fa-linkedin" ]: [ STRINGS.linkedinLink ]
        };

        label.innerHTML = "&copy; " + STRINGS.websiteName + " - " + new Date().getFullYear();

        Object.entries( footerItems ).forEach( ( [ classlist, href ] ) => {
            const li = document.createElement( "li" );
            const a = document.createElement( "a" );
            const icon = document.createElement( "i" );
            
            a.href = href;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            icon.className = classlist;
            
            a.appendChild( icon );
            li.appendChild( a );
            ul.appendChild( li );
        });

        this.footer.appendChild( label );
        this.footer.appendChild( ul );
    }
}