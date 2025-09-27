'use strict';

export default class Void {

    /**
     * Initializes the footer component and builds its structure.
     * 
     * @param {object} STRINGS An object containing localized static strings and external social links.
     */
    constructor( STRINGS ) {
        this.void = document.querySelector( "div.void" );

        this.buildBlock( STRINGS );
    }

    /**
     * Dynamically builds the internal HTML structure for the modal component
     * and appends it to the modal container element.
     */
    buildBlock( STRINGS ) {
        const h1 = document.createElement( 'h1' );
        h1.innerHTML = STRINGS.staticWelcomeVoid;

        this.void.appendChild( h1 );
    }

    /**
     * Displays the void component with a fade-out animation after a set duration.
     * The void is automatically hidden after 3 seconds.
     */
    showVoid() {
        this.void.style.display = "flex";
        setTimeout( () => this.hideVoid(), 3000 );
    }

    /**
     * Hides the void component with a fade-out animation.
     * The display is set to 'none' after the animation completes.
     */
    hideVoid() {
        this.void.classList.add( "animation-fadeOut" );
        this.void.addEventListener( "animationend", () => this.void.style.display = "none" );
    }
}