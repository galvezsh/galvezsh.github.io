
export default class Void {

    /**
     * Initializes the void component and builds its structure. This one is special because it is not added to the DOM
     * in the HTML file, but it is added here. This is for ensuring that the void is always present in the page, so the 
     * developer can use it without worrying about the DOM structure.
     */
    constructor() {
        this.body = document.querySelector( "body" );
        this.void = document.createElement( "div" );
        this.void.classList.add( "void", "animation-fadeIn" );
        this.void.innerHTML = `<h1>Welcome to the void</h1>`;

        this.body.prepend( this.void );
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