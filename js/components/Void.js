export default class Void {

    constructor( STRINGS ) {
        this.void = document.querySelector( "div.void" );

        this.buildBlock( STRINGS );
    }

    buildBlock( STRINGS ) {
        const h1 = document.createElement( 'h1' );
        h1.innerHTML = STRINGS.staticWelcomeVoid;

        this.void.appendChild( h1 );
    }

    showVoid() {
        this.void.style.display = "flex";
        setTimeout( () => this.hideVoid(), 3000 );
    }

    hideVoid() {
        this.void.classList.add( "animation-fadeOut" );
        this.void.addEventListener( "animationend", () => { this.void.style.display = "none"; } );
    }
}