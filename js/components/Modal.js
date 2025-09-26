'use strict';

export default class Modal {

    /**
     * Initializes the modal component and binds necessary DOM elements and events.
     */
    constructor() {
        this.modal = document.querySelector( "div.modal" );

        this.buildBlock();

        this.header = document.querySelector( "div.modal div.header .title" );
        this.body = document.querySelector( "div.modal div.body" );
        this.footer = document.querySelector( "div.modal div.footer" );
        this.primaryButton = document.querySelector( "div.modal button.primary" );
        this.secondaryButton = document.querySelector( "div.modal button.secondary" );

        document.querySelector( "div.modal div.header i" ).addEventListener( "click", () => this.hideModal() );

        /**
         * Arrow function to handle the "animationend" event.
         * This ensures that the same function reference is used for both adding and removing the event listener,
         * preserving the correct context (`this`) within the Modal class.
         */
        this.endAnimationHandler = () => this.removeAnimation();
    }

    /**
     * Dynamically builds the internal HTML structure for the modal component
     * and appends it to the modal container element.
     */
    buildBlock() {
        const content = document.createElement( 'div' );
        content.classList.add( 'content' );

        const header = document.createElement( 'div' );
        const title = document.createElement( 'h3' );
        const closeIcon = document.createElement( 'i' );

        header.classList.add( 'header' );
        title.classList.add( 'title' );
        closeIcon.classList.add( 'fa-solid', 'fa-xmark' );

        header.appendChild( title );
        header.appendChild( closeIcon );

        const body = document.createElement( 'div' );
        body.classList.add( 'body' );

        const footer = document.createElement( 'div' );
        const buttons = document.createElement( 'div' );
        const btnApply = document.createElement( 'button' );
        const btnCancel = document.createElement( 'button' );

        footer.classList.add( 'footer' );
        buttons.classList.add( 'buttons' );
        btnApply.type = 'button';
        btnApply.classList.add( 'primary' );
        btnApply.id = 'modalApply';
        btnCancel.type = 'button';
        btnCancel.classList.add( 'secondary' );
        btnCancel.id = 'modalCancel';

        buttons.appendChild( btnApply );
        buttons.appendChild( btnCancel );
        footer.appendChild( buttons );
        content.appendChild( header );
        content.appendChild( body );
        content.appendChild( footer );

        this.modal.appendChild( content );
    }

    /**
     * Displays a modal with a title, body text, and two action buttons.
     * Commonly used for confirmation dialogs or binary choices.
     * 
     * @param {string} newTitle The title to display in the modal header.
     * @param {string} newContext The message or content to display in the modal body.
     * @param {string} primButton The text for the primary action button.
     * @param {string} secnButton The text for the secondary action button.
     */
    showQuestionModal( newTitle, newContext, primButton, secnButton ) {
        this.header.innerHTML = newTitle;
        this.body.innerHTML = newContext;
        this.primaryButton.textContent = primButton;
        this.secondaryButton.textContent = secnButton;
        this.footer.style.display = "inline-block";
        this.modal.style.display = "block";
    }

    /**
     * Displays an informational modal with a title and body text only.
     * Footer (buttons) is hidden in this type of modal.
     * 
     * @param {string} newTitle The title to display in the modal header.
     * @param {string} newContext The message or content to display in the modal body.
     */
    showInfoModal( newTitle, newContext ) {
        this.header.innerHTML = newTitle;
        this.body.innerHTML = newContext;
        this.footer.style.display = "none";
        this.modal.style.display = "block";
    }

    /**
     * Initiates the hiding of the modal using a fade-out animation.
     * The final removal is handled by `removeAnimationModal()` on animation end.
     */
    hideModal() {
        this.modal.classList.add( "animation-fadeOut" );
        this.modal.addEventListener( "animationend", this.endAnimationHandler );
    }

    /**
     * Finalizes the hiding of the modal by removing the fade-out animation class,
     * detaching the event listener, and setting `display` to "none".
     * This prevents animation event overlaps or memory leaks.
     */
    removeAnimation() {
        this.modal.classList.remove( "animation-fadeOut" );
        this.modal.removeEventListener( "animationend", this.endAnimationHandler );
        this.modal.style.display = "none";
    }
}