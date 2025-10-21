'use strict';

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

document.querySelector('header').innerHTML = createHeader();
document.querySelector('#introduction').innerHTML = createIntroduction();
document.querySelector('#origin').innerHTML = createOrigin();
document.querySelector('#purpose').innerHTML = createPurpose();
document.querySelector('#anatomy').innerHTML = createAnatomy();
document.querySelector('#questions').innerHTML = createQuestions();

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////

function createHeader() {
    return `
        <h3>Caballo Lusitano</h3>
        <nav>
            <ul>
                <li><a href="#origin">Origen</a></li>
                <li><a href="#purpose">Propósito</a></li>
                <li><a href="#anatomy">Anatomía</a></li>
                <li><a href="#questions">Dudas</a></li>
            </ul>
        </nav>
    `;
}

function createIntroduction() {
    return `
        <h1>El Caballo Lusitano: Nobleza y Arte Ecuestre</h1>
        <p>Descubre la esencia de una de las razas equinas más antiguas y prestigiosas del mundo.</p>
    `;
}

function createOrigin() {
    return `<h1>Origen</h1>`;
}

function createPurpose() {
    return `<h1>Propósito</h1>`;
}

function createAnatomy() {
    return `<h1>Anatomía</h1>`;
}

function createQuestions() {
    return `<h1>Dudas</h1>`;
}