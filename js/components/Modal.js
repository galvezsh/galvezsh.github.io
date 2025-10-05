'use strict';

export default class Modal {

    /**
     * Initializes the modal component and binds necessary DOM elements and events.
     * 
     * @param {object} strings An object containing localized strings and corresponding navigation URLs.
     */
    constructor( strings ) {
        this.strings = strings;
        this.modal = document.querySelector( "div.modal" );

        this.buildBlock();

        this.header = document.querySelector( "div.modal h3.header" );
        this.body = document.querySelector( "div.modal div.body" );
        this.footer = document.querySelector( "div.modal div.footer" );
        this.primaryButton = document.querySelector( "div.modal button.primary" );
        this.secondaryButton = document.querySelector( "div.modal button.secondary" );
    }

    /**
     * Dynamically builds the internal HTML structure for the modal component
     * and appends it to the modal container element.
     */
    buildBlock() {
        const content = document.createElement('div');
        content.classList.add('content');
    
        const header = document.createElement('h3');
        header.classList.add('header');
    
        const body = document.createElement('div');
        body.classList.add('body');
    
        const footer = document.createElement('div');
        footer.classList.add('footer');
    
        const btnApply = document.createElement('button');
        const btnCancel = document.createElement('button');
    
        btnApply.type = 'button';
        btnApply.classList.add('primary');
        btnApply.id = 'modalApply';
    
        btnCancel.type = 'button';
        btnCancel.classList.add('secondary');
        btnCancel.id = 'modalCancel';
    
        footer.appendChild(btnApply);
        footer.appendChild(btnCancel);
    
        content.appendChild(header);
        content.appendChild(body);
        content.appendChild(footer);
    
        this.modal.appendChild(content);
    }

/** 
 * Displays a modal with a title, body text, and two action buttons. 
 * Commonly used for confirmation dialogs or binary choices. 
 * 
 * @param {string} newTitle The title to display in the modal header. 
 * @param {string} newContext The message or content to display in the modal body. 
 * @param {function} onPrimaryClick The function to execute when the primary button is clicked. 
 */ 
showQuestionModal( newTitle, newContext, onPrimaryClick ) {
    this.header.innerHTML = newTitle;
    this.body.innerHTML = "";

    if (typeof newContext === "string") 
        this.body.innerHTML = newContext; 
    else 
        this.body.appendChild(newContext);

    this.primaryButton.textContent = this.strings.accept;
    this.secondaryButton.textContent = this.strings.cancel;
    this.primaryButton.style.display = "inline-block";

    this.primaryButton.onclick = () => onPrimaryClick();
    this.secondaryButton.onclick = () => this.hideModal();

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
    this.body.innerHTML = "";

    if (typeof newContext === "string") 
        this.body.innerHTML = newContext; 
    else 
        this.body.appendChild(newContext);

    this.secondaryButton.textContent = this.strings.close;
    this.primaryButton.style.display = "none";

    this.secondaryButton.onclick = () => this.hideModal();

    this.modal.style.display = "block";
}

    /**
     * Initiates the hiding of the modal using a fade-out animation.
     * When the animation ends, the lambda listener removes the animation class and sets the display to "none".
     * The { once: true } option ensures the listener is removed after the first animation end event.
     */
    hideModal() {
        this.modal.classList.add( "animation-fadeOut" );
        this.modal.addEventListener("animationend", () => {
            this.modal.classList.remove("animation-fadeOut");
            this.modal.style.display = "none";
        }, { once: true });
    }
}