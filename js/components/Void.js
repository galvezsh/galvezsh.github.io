
export default class Void {

    /**
     * Initializes the footer component and builds its structure.
     */
    constructor() {
        this.void = document.querySelector( "div.void" );
        this.void.innerHTML = `<h1>Welcome to the void</h1>`;
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
        this.void.addEventListener( "animationend", () => {
            this.void.classList.remove( "animation-fadeOut" );
            this.void.style.display = "none"; 
        }, { once: true } );
    }
}