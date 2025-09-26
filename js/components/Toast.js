'use strict';

export default class Toast {

    /**
     * Initializes the Toast component, binds necessary DOM elements, and sets up default state.
     * 
     * @param {object} STRINGS An object containing localized string labels for toast headers and messages.
     */
    constructor( STRINGS ) {
        this.strings = STRINGS;
        this.toast = document.querySelector( "div.toast" );

        this.buildBlock();

        this.header = document.querySelector( "div.toast div.header" );
        this.body = document.querySelector( "div.toast div.body" );

        this.headerStyle = "";
        this.finishedToast = true;

        /**
         * Arrow function to handle the "animationend" event.
         * Ensures that the same function reference is used when adding/removing the event listener,
         * preserving the correct context (`this`) within the Toast class.
         */
        this.endAnimationHandler = () => this.removeEndAnimation();
    }

    /**
     * Dynamically builds the internal HTML structure for the toast component
     * and appends it to the toast container element.
     */
    buildBlock() {
        const header = document.createElement( 'div' );
        const body = document.createElement( 'div' );

        header.classList.add( 'header' );
        body.classList.add( 'body' );
        
        this.toast.appendChild( header );
        this.toast.appendChild( body );
    }

    /**
     * Displays a toast with a contextual message, style level, and automatic timeout.
     * 
     * @param {number} level The severity level of the toast (0 = info, 1 = warning, 2 = error).
     * @param {string} newContext The message to display in the toast body.
     * @param {number} timeout The duration the toast remains visible (in seconds).
     */
    showToast( level, newContext, timeout ) {

        if ( this.finishedToast === true ) {
            this.finishedToast = false;

            // Set header style and label based on level
            if ( level === 0 ) {
                this.headerStyle = "bg-info";
                this.header.textContent = this.strings.info;

            } else if ( level === 1 ) {
                this.headerStyle = "bg-warning";
                this.header.textContent = this.strings.warning;

            } else {
                this.headerStyle = "bg-error";
                this.header.textContent = this.strings.error;
            }

            this.header.classList.add( this.headerStyle );
            this.body.textContent = newContext;
            this.toast.style.display = "block";

            // Auto-hide after timeout
            setTimeout( () => this.hideToast(), timeout * 1000 );

        } else {
            console.log( this.strings.info + ": " + this.strings.blockedToast );
        }
    }

    /**
     * Initiates the hiding of the toast using a fade-out animation.
     * Final removal is handled by `removeAnimationToast()` once the animation completes.
     */
    hideToast() {
        this.toast.classList.add( "animation-fadeOutDown" );
        this.toast.addEventListener( "animationend", this.endAnimationHandler );
    }

    /**
     * Finalizes the removal of the toast from view, resets its state,
     * and detaches the animation event listener to avoid memory leaks or duplicated events.
     */
    removeEndAnimation() {
        this.toast.classList.remove( "animation-fadeOutDown" );
        this.header.classList.remove( this.headerStyle );
        this.toast.removeEventListener( "animationend", this.endAnimationHandler );
        this.toast.style.display = "none";

        this.finishedToast = true;
    }
}