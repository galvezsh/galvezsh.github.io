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
    return `
        <div>
            <img src="../../resources/images/lusitano/lusitano_2.png" alt="Caballo Lusitano">
        </div>
        <div>
            <h1>Un Linaje Milenario</h1>
            <h2>Origen y formación de la raza</h2>
            <p>
                El caballo Lusitano es originario de Portugal, y su historia se entrelaza con la de la península ibérica. 
                Desciende del caballo ibérico primitivo, una línea equina que ya existía en la región hace más de 3.000 años. 
                Los hallazgos arqueológicos en el valle del Tajo y el sur de Portugal muestran figuras de caballos en 
                petroglifos y cerámicas de culturas pre-romanas, lo que evidencia su antigua presencia y valor simbólico.
            </p>
            <p>
                Durante la época romana, la región era conocida como Lusitania, de ahí el nombre actual del caballo. Los 
                romanos ya admiraban estos caballos por su agilidad y capacidad de combate, y los consideraban superiores a 
                los de otras regiones. Escritores antiguos como Estrabón y Virgilio describieron a los caballos lusitanos como 
                animales valientes y veloces, usados en guerras y carros de competición.
            </p>
            <p>
                En la Edad Media, los caballos lusitanos se cruzaron con razas beréberes y árabes traídas por los invasores 
                musulmanes, lo que refinó su resistencia y elegancia sin perder su carácter fuerte y decidido. A partir del siglo 
                XVI, la nobleza portuguesa comenzó a seleccionar cuidadosamente los ejemplares más equilibrados, dando origen al 
                tipo de caballo que hoy reconocemos como Puro Sangue Lusitano (PSL).
            </p>
        </div>
    `;
}

function createPurpose() {
    return `
        <div>
            <h1>Versátil y talento</h1>
            <h2>Usos históricos y Actual</h2>
            <p>
                Durante los siglos XVII y XVIII, el Lusitano fue considerado uno de los mejores caballos de guerra de Europa. Los 
                caballeros portugueses lo usaban en batallas por su movilidad y valentía en espacios reducidos. Con la llegada de 
                las armas de fuego, su uso militar decayó, pero se consolidó como caballo de Alta Escuela (doma clásica).
            </p>
            <p>
                En la corte portuguesa, especialmente durante el reinado de João V, el Lusitano era el protagonista de espectáculos 
                ecuestres inspirados en la escuela española de Viena, pero con un estilo más rudo y guerrero. Incluso hay registros 
                de que algunos ejemplares portugueses fueron llevados a Francia e Inglaterra, influyendo en razas como el Andaluz y 
                el Lipizzano.
            </p>
            <p>
                Actualmente, el Lusitano es un caballo polivalente que destaca en la doma clásica y alta escuela, donde compite con 
                éxito frente a caballos centroeuropeos. También suelen destacar en rejoneo y tauromaquia portuguesa, por su valor y 
                reflejos, enganche y exhibiciones por su porte majestuoso y equitación de trabajo o también conocido como manejo del 
                ganado, donde su agilidad y obediencia son esenciales.
            </p>
            <p>
                Además, es muy apreciado en el extranjero, sobre todo en Francia, Brasil y México, donde se han creado líneas de cría 
                específicas para la competición moderna.
            </p>
        </div>
        <div>
            <img src="../../resources/images/lusitano/lusitano_3.png" alt="Caballo Lusitano">
        </div>
    `;
}

function createAnatomy() {
    return `<h1>Anatomía de la perfección</h1>`;
}

function createQuestions() {
    return `<h1>Preguntas frecuentes</h1>`;
}