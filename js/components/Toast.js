'use strict';

export default class Toast {

    /**
     * Initializes the toast component and builds its structure. This one is special because it is not added to the DOM
     * in the HTML file, but it is added here. This is for ensuring that the void is always present in the page, so the 
     * developer can use it without worrying about the DOM structure.
     * 
     * @param {object} strings An object containing localized string labels for toast headers and messages.
     */
    constructor( strings ) {
        this.strings = strings;

        this.mainBody = document.querySelector( "body" );
        this.toast = document.createElement( "div" );
        this.toast.classList.add( "toast", "animation-fadeInUp" );
        this.toast.innerHTML = `<div class="header"></div><div class="body"></div>`;

        this.mainBody.prepend( this.toast );
        
        this.header = document.querySelector( "div.toast div.header" );
        this.body = document.querySelector( "div.toast div.body" );
        
        this.finishedToast = true;
    }

    /**
     * Displays a toast with a contextual message, style level, and automatic timeout.
     * 
     * @param {number} level The severity level of the toast (0 = info, 1 = warning, 2 = error).
     * @param {string} newContext The message to display in the toast body.
     * @param {number} timeout The duration the toast remains visible (in seconds).
     */
    showToast( level, newContext, timeout ) {
        let headerStyle = "";

        if ( this.finishedToast === true ) {
            this.finishedToast = false;

            // Set header style and label based on level
            if ( level === 0 ) {
                headerStyle = "bg-info";
                this.header.textContent = this.strings.info;

            } else if ( level === 1 ) {
                headerStyle = "bg-warning";
                this.header.textContent = this.strings.warning;

            } else {
                headerStyle = "bg-error";
                this.header.textContent = this.strings.error;
            }

            this.header.classList.add( headerStyle );
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
     * When the animation ends, the lambda listener removes the animation class and sets the display to "none".
     * The { once: true } option ensures the listener is removed after the first animation end event.
     */
    hideToast() {
        this.toast.classList.add( "animation-fadeOutDown" );
        this.toast.addEventListener("animationend", () => {
            this.toast.classList.remove("animation-fadeOutDown");
            this.toast.style.display = "none";
            this.finishedToast = true;
        }, { once: true });
    }
}