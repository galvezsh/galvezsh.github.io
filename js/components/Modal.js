'use strict';

export default class Modal {

    /**
     * Initializes the modal component and builds its structure. This one is special because it is not added to the DOM
     * in the HTML file, but it is added here. This is for ensuring that the void is always present in the page, so the 
     * developer can use it without worrying about the DOM structure.
     * 
     * @param {object} strings An object containing localized strings and corresponding navigation URLs.
     */
    constructor( strings ) {
        this.strings = strings;

        this.mainBody = document.querySelector( "body" );
        this.modal = document.createElement( "div" );
        this.modal.classList.add( "modal", "animation-fadeIn" );
        this.modal.innerHTML = `
            <div class="content">
                <h3 class="header"></h3>
                <div class="body"></div>
                <div class="footer">
                    <button class="primary"></button>
                    <button class="secondary"></button>
                </div>
            </div>
        `;

        this.mainBody.prepend( this.modal );

        this.header = document.querySelector( "div.modal h3.header" );
        this.body = document.querySelector( "div.modal div.body" );
        this.footer = document.querySelector( "div.modal div.footer" );
        this.primaryButton = document.querySelector( "div.modal button.primary" );
        this.secondaryButton = document.querySelector( "div.modal button.secondary" );
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

    if (typeof newContext === "string") 
        this.body.innerHTML = newContext; 
    else {
        this.body.innerHTML = "";
        this.body.appendChild(newContext);
    }

    this.primaryButton.textContent = this.strings.accept;
    this.secondaryButton.textContent = this.strings.cancel;
    this.primaryButton.style.display = "inline-block";

    this.primaryButton.onclick = () => onPrimaryClick();
    this.secondaryButton.onclick = () => this.hideModal();

    this.modal.style.display = "block";
}

/** 
 * Displays an informational modal with a title and body text only. 
 * Primary button is hidden in this type of modal. 
 * 
 * @param {string} newTitle The title to display in the modal header. 
 * @param {string} newContext The message or content to display in the modal body. 
 */
showInfoModal( newTitle, newContext ) {
    this.header.innerHTML = newTitle;

    if (typeof newContext === "string") 
        this.body.innerHTML = newContext; 
    else {
        this.body.innerHTML = "";
        this.body.appendChild(newContext);
    }

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