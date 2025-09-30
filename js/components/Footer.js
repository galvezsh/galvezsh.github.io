'use strict';

export default class Footer {

    /**
     * Initializes the footer component and builds its structure.
     * 
     * @param {object} STRINGS An object containing localized static strings and external social links.
     */
    constructor( STRINGS ) {
        this.strings = STRINGS;
        this.footer = document.querySelector( "main footer" );

        this.buildBlock();
    }

    /**
     * Dynamically constructs the footer content, including copyright 
     * and a list of social media links with their corresponding icons.
     */
    buildBlock() {
        const label = document.createElement( "span" );
        const ul = document.createElement( "ul" );

        const footerItems = {
            [ "fa-brands fa-youtube" ]: [ this.strings.youtubeLink ],
            [ "fa-brands fa-twitch" ]: [ this.strings.twitchLink ],
            [ "fa-brands fa-discord" ]: [ this.strings.discordLink ],
            [ "fa-brands fa-instagram" ]: [ this.strings.instagramLink ],
            [ "fa-brands fa-github" ]: [ this.strings.githubLink ],
            [ "fa-brands fa-linkedin" ]: [ this.strings.linkedinLink ]
        };

        label.innerHTML = "&copy; " + this.strings.websiteName + " - " + new Date().getFullYear();

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