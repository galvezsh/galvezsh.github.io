'use strict';

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

// Carrusel de Anatomía
let currentAnatomySlide = 0;
const totalAnatomySlides = 6;
let anatomyDirection = 'right';

// Carrusel de Capas
let currentCoatSlide = 0;
const totalCoatSlides = 5;
let coatDirection = 'right';

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

document.querySelector('header').innerHTML = createHeader();
document.querySelector('#introduction').innerHTML = createIntroduction();
document.querySelector('#origin').innerHTML = createOrigin();
document.querySelector('#purpose').innerHTML = createPurpose();
document.querySelector('#anatomy').innerHTML = createAnatomy();
document.querySelector('#coats').innerHTML = createCoats();
document.querySelector('#questions').innerHTML = createQuestions();
document.querySelector('footer').innerHTML = createFooter();

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////

// Funciones para el carrusel de Anatomía
function nextSlide() {
    anatomyDirection = 'right';
    currentAnatomySlide = (currentAnatomySlide + 1) % totalAnatomySlides;
    updateCarousel();
}

function previousSlide() {
    anatomyDirection = 'left';
    currentAnatomySlide = (currentAnatomySlide - 1 + totalAnatomySlides) % totalAnatomySlides;
    updateCarousel();
}

function goToSlide(index) {
    anatomyDirection = index > currentAnatomySlide ? 'right' : 'left';
    currentAnatomySlide = index;
    updateCarousel();
}

function updateCarousel() {
    const slidesContainer = document.querySelector('#anatomy .carousel-slides');
    const slides = document.querySelectorAll('#anatomy .carousel-slide');
    const indicators = document.querySelectorAll('#anatomy .indicator');
    
    // Remover clases de animación previas
    slidesContainer.classList.remove('slide-left', 'slide-right');
    
    // Añadir clase de dirección
    slidesContainer.classList.add(anatomyDirection === 'right' ? 'slide-right' : 'slide-left');
    
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentAnatomySlide);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentAnatomySlide);
    });
    
    // Las imágenes de fondo ya están definidas en CSS, no es necesario inyectarlas
}

// Funciones para el carrusel de Capas
function nextCoat() {
    coatDirection = 'right';
    currentCoatSlide = (currentCoatSlide + 1) % totalCoatSlides;
    updateCoatCarousel();
}

function previousCoat() {
    coatDirection = 'left';
    currentCoatSlide = (currentCoatSlide - 1 + totalCoatSlides) % totalCoatSlides;
    updateCoatCarousel();
}

function goToCoat(index) {
    coatDirection = index > currentCoatSlide ? 'right' : 'left';
    currentCoatSlide = index;
    updateCoatCarousel();
}

function updateCoatCarousel() {
    const slidesContainer = document.querySelector('#coats .carousel-slides');
    const slides = document.querySelectorAll('#coats .carousel-slide');
    const indicators = document.querySelectorAll('#coats .indicator');
    
    // Remover clases de animación previas
    slidesContainer.classList.remove('slide-left', 'slide-right');
    
    // Añadir clase de dirección
    slidesContainer.classList.add(coatDirection === 'right' ? 'slide-right' : 'slide-left');
    
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentCoatSlide);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentCoatSlide);
    });
    
    // Las imágenes de fondo ya están definidas en CSS, no es necesario inyectarlas
}

function createHeader() {
    return `
        <h3>Caballo Lusitano</h3>
        <nav>
            <ul>
                <li><a href="#origin">Origen</a></li>
                <li><a href="#purpose">Propósito</a></li>
                <li><a href="#anatomy">Anatomía</a></li>
                <li><a href="#coats">Capas</a></li>
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
    return `
        <h1>Anatomía de la perfección</h1>
        
        <div class="carousel-container">
            <button class="carousel-btn carousel-btn-left" onclick="previousSlide()">
                <i class="fas fa-chevron-left"></i>
            </button>
            
            <div class="carousel-slides">
                <div class="carousel-slide active" data-bg="../../resources/images/lusitano/anatomy_cabeza.jpg">
                    <div class="slide-content">
                        <h2>La Cabeza</h2>
                        <p>
                            La cabeza del caballo lusitano es una de sus características más distintivas, presentando un perfil ligeramente subconvexo, 
                            comúnmente conocido como "acarnerado". Esta estructura se define por una suave curvatura hacia abajo y una nariz arqueada. 
                            En conjunto, es una cabeza bien proporcionada, de longitud media, delgada y de aspecto seco, lo que le confiere nobleza. La 
                            mandíbula no es demasiado pronunciada y la mejilla es relativamente larga, creando una apariencia refinada. La frente se 
                            muestra ligeramente abombada, sobresaliendo de forma sutil entre los ojos. Estos son grandes, expresivos y vivos, con una 
                            forma elíptica o almendrada que denota seguridad y confianza. Finalmente, sus orejas son de longitud media, finas y expresivas, 
                            aportando un toque de gracia y alerta al conjunto.
                        </p>
                    </div>
                </div>
                
                <div class="carousel-slide" data-bg="../../resources/images/lusitano/anatomy_cuello.jpg">
                    <div class="slide-content">
                        <h2>El Cuello</h2>
                        <p>
                            El cuello del caballo lusitano es una pieza clave en su estampa de nobleza y funcionalidad. Presenta una longitud mediana y 
                            un perfil distintivamente arqueado o redondeado, lo que le confiere una apariencia de fuerza y elegancia. Su unión con la cabeza 
                            es fina y limpia, mientras que su base es ancha y musculosa, asegurando una inserción fuerte y bien definida en los hombros. 
                            Una característica fundamental de su correcta conformación es que el cuello nace directamente desde la cruz, creando una transición 
                            fluida y armoniosa con el lomo, sin presentar ninguna depresión o "hachazo" en esta unión. Adornado con una crin que, aunque fina 
                            y sedosa, suele ser larga, este cuello potente y bien colocado desemboca de manera natural en un lomo fuerte y una grupa ligeramente 
                            descendente, completando la línea superior característica de la raza.
                        </p>
                    </div>
                </div>
                
                <div class="carousel-slide" data-bg="../../resources/images/lusitano/anatomy_tronco.jpg">
                    <div class="slide-content">
                        <h2>El Tronco</h2>
                        <p>
                            El tronco del caballo se describe con proporciones compactas, de longitud media y bien proporcionadas al conjunto del cuerpo, 
                            evitando ser excesivamente largo o corto. La línea superior debe ser suave y armoniosa, sin hundimientos entre la cruz, el dorso y 
                            la grupa, lo que expresa fuerza sin rigidez. En su conformación general, el tronco forma un rectángulo más bien corto, lo que 
                            contribuye a la agilidad, rapidez y buena reunión. La musculatura está bien desarrollada, firme y elástica, destacando especialmente 
                            en el dorso y la grupa. La piel y el pelo son finos, con buena adherencia a la musculatura y un brillo saludable.    
                        </p>
                    </div>
                </div>
                
                <div class="carousel-slide" data-bg="../../resources/images/lusitano/anatomy_partes.jpg">
                    <div class="slide-content">
                        <h2>Partes del Tronco</h2>
                        <p>
                            En cuanto a las partes del tronco, la Cruz está bien definida y prolongada, ligeramente más alta que la grupa, integrándose suavemente 
                            en el dorso. Proporciona buena sujeción para la silla y contribuye al equilibrio (se deben evitar cruces hundidas o mal diferenciadas). 
                            El Dorso es corto, recto y fuerte, transmitiendo eficazmente la energía del tren posterior al anterior, y su longitud media facilita 
                            la reunión en la doma (defectos comunes son un dorso largo, débil o ensillado). El Lomo (riñones) es ancho, corto y muy musculoso, 
                            unido firmemente al dorso y a la grupa, y es clave para transmitir la potencia de los posteriores (un lomo largo o débil resta fuerza 
                            al movimiento). La Grupa es redondeada, ligeramente inclinada y musculosa, de longitud media y buena amplitud. No debe ser ni muy 
                            horizontal ni muy caída, y su forma es característica del lusitano para la "sentada" y la facilidad en los ejercicios (una grupa 
                            corta o muy oblicua disminuye el empuje y el equilibrio). El Pecho es profundo y ancho, sin exageraciones, denotando capacidad 
                            pulmonar y fuerza; visto de frente, los músculos pectorales deben estar marcados y bien separados. Los Costillares son bien arqueados 
                            y largos, ofreciendo buena capacidad torácica para una correcta expresión pulmonar (costillas planas o cortas dan un aspecto angosto 
                            y poca resistencia). Finalmente, el Abdomen se presenta ligeramente recogido, no abultado, reflejando una buena condición física y 
                            tono muscular (defectos son un vientre colgante o demasiado metido).
                        </p>
                    </div>
                </div>

                <div class="carousel-slide" data-bg="../../resources/images/lusitano/anatomy_grupa.jpg">
                    <div class="slide-content">
                        <h2>La Grupa</h2>
                        <p>
                            La grupa del caballo Lusitano, que comprende la parte trasera del tronco desde los riñones hasta la cola, se caracteriza por ser 
                            redondeada y convexa, uno de los rasgos más distintivos de la raza. Presenta una musculatura fuerte y bien desarrollada, esencial 
                            para la potencia y agilidad que demuestra en la Doma Clásica y la equitación de trabajo. Suele mostrar cierta inclinación o caída, 
                            con una cola de inserción baja, lo que facilita la reunión y movimientos como las piruetas o los cambios de pie en el aire. Además, 
                            su forma ancha y sólida proporciona una base firme al tren posterior, principal fuente de propulsión y equilibrio. Esta morfología 
                            no es solo estética, sino también funcional, ya que permite una mayor flexión de las articulaciones traseras y una mejor capacidad 
                            de impulso. Históricamente, esta conformación también resultó ventajosa en el toreo a caballo y en la guerra, gracias a su gran 
                            agilidad, giros rápidos y facilidad de maniobra.
                        </p>
                    </div>
                </div>

                <div class="carousel-slide" data-bg="../../resources/images/lusitano/anatomy_extremidades.jpg">
                    <div class="slide-content">
                        <h2>Extremidades</h2>
                        <p>
                            Las extremidades del caballo se caracterizan por ser largas, fuertes y musculosas. Las anteriores presentan brazos definidos, 
                            antebrazos rectos y musculosos, cañas largas y secas con tendones marcados, cascos bien formados, rodillas anchas y cuartillas 
                            inclinadas. Las posteriores destacan por nalgas y muslos cortos y musculosos, piernas largas alineadas con el corvejón, corvejones 
                            fuertes y secos, y ángulos traseros relativamente cerrados.
                        </p>
                    </div>
                </div>
            </div>
            
            <button class="carousel-btn carousel-btn-right" onclick="nextSlide()">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
        
        <div class="carousel-indicators">
            <span class="indicator active" onclick="goToSlide(0)"></span>
            <span class="indicator" onclick="goToSlide(1)"></span>
            <span class="indicator" onclick="goToSlide(2)"></span>
            <span class="indicator" onclick="goToSlide(3)"></span>
            <span class="indicator" onclick="goToSlide(4)"></span>
            <span class="indicator" onclick="goToSlide(5)"></span>
        </div>
    `;
}

function createCoats() {
    return `
        <h1>Capas Frecuentes</h1>
        <p style="text-align: center; color: gray; margin-bottom: 30px;">
            Conoce las coloraciones más características del pelaje del caballo Lusitano
        </p>
        
        <div class="carousel-container">
            <button class="carousel-btn carousel-btn-left" onclick="previousCoat()">
                <i class="fas fa-chevron-left"></i>
            </button>
            
            <div class="carousel-slides">
                <div class="carousel-slide active" data-bg="../../resources/images/lusitano/coat_torda.jpeg">
                    <div class="slide-content coat-content">
                        <h2>Torda</h2>
                        <p>
                            Capa de tono grisáceo que se caracteriza por aclararse progresivamente con la edad del caballo. 
                            Los potros nacen con colores más oscuros y gradualmente se tornan más blancos con el paso de los años.
                        </p>
                    </div>
                </div>
                
                <div class="carousel-slide" data-bg="../../resources/images/lusitano/coat_castana.jpeg">
                    <div class="slide-content coat-content">
                        <h2>Castaño</h2>
                        <p>
                            Una de las capas más habituales en el Lusitano. Presenta tonalidades marrones en el cuerpo, 
                            con variaciones que van desde castaño claro hasta castaño oscuro, casi negro.
                        </p>
                    </div>
                </div>
                
                <div class="carousel-slide" data-bg="../../resources/images/lusitano/coat_negra.jpeg">
                    <div class="slide-content coat-content">
                        <h2>Negra</h2>
                        <p>
                            Capa de color negro uniforme en todo el cuerpo. Es una coloración elegante y distintiva 
                            que resalta la nobleza y presencia del caballo Lusitano.
                        </p>
                    </div>
                </div>
                
                <div class="carousel-slide" data-bg="../../resources/images/lusitano/coat_alzan.jpeg">
                    <div class="slide-content coat-content">
                        <h2>Alazán</h2>
                        <p>
                            Pelaje de tonos rojizos o cobrizos característico. Puede presentar variaciones desde 
                            alazán claro hasta alazán tostado, siempre manteniendo sus tonalidades cálidas.
                        </p>
                    </div>
                </div>
                
                <div class="carousel-slide" data-bg="../../resources/images/lusitano/coat_bayo.jpeg">
                    <div class="slide-content coat-content">
                        <h2>Bayo</h2>
                        <p>
                            Capa con tonos dorados y amarillentos en el cuerpo, generalmente acompañada de crines, 
                            cola y extremidades más oscuras, creando un contraste visual distintivo.
                        </p>
                    </div>
                </div>
            </div>
            
            <button class="carousel-btn carousel-btn-right" onclick="nextCoat()">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
        
        <div class="carousel-indicators">
            <span class="indicator active" onclick="goToCoat(0)"></span>
            <span class="indicator" onclick="goToCoat(1)"></span>
            <span class="indicator" onclick="goToCoat(2)"></span>
            <span class="indicator" onclick="goToCoat(3)"></span>
            <span class="indicator" onclick="goToCoat(4)"></span>
        </div>
    `;
}

function createQuestions() {
    return `
        <h1>Preguntas Frecuentes</h1>
        
        <div class="faq-container">
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFaq(0)">
                    <span>¿Cuál es su temperamento?</span>
                    <i class="fas fa-chevron-down faq-icon"></i>
                </div>
                <div class="faq-answer">
                    <p>
                        El caballo Lusitano es conocido por su temperamento equilibrado, noble y dócil. Son caballos inteligentes, 
                        valientes y con una gran disposición para el trabajo. Muestran una notable sensibilidad y conexión con su 
                        jinete, lo que los hace excelentes para la doma clásica. A pesar de su valentía histórica en batalla y 
                        tauromaquia, son caballos tranquilos y manejables, con un carácter generoso que los hace aptos tanto para 
                        profesionales como para jinetes experimentados que buscan un compañero leal.
                    </p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" onclick="toggleFaq(1)">
                    <span>¿Qué cuidados necesita?</span>
                    <i class="fas fa-chevron-down faq-icon"></i>
                </div>
                <div class="faq-answer">
                    <p>
                        El Lusitano requiere cuidados estándar de equinos de calidad: alimentación balanceada rica en forraje, 
                        ejercicio regular adaptado a su nivel de entrenamiento, y revisiones veterinarias periódicas. Su pelaje 
                        fino necesita cepillado regular pero no requiere cuidados excesivos. Es importante mantener sus cascos en 
                        buen estado con herrajes cada 6-8 semanas. Mentalmente, necesitan estimulación constante debido a su 
                        inteligencia, por lo que el trabajo variado y la interacción social son fundamentales. Un box amplio o 
                        acceso a paddock es recomendable para su bienestar.
                    </p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" onclick="toggleFaq(2)">
                    <span>¿Es adecuado para jinetes principiantes?</span>
                    <i class="fas fa-chevron-down faq-icon"></i>
                </div>
                <div class="faq-answer">
                    <p>
                        Aunque el Lusitano tiene un temperamento noble y generoso, generalmente no se recomienda para jinetes 
                        completamente principiantes. Son caballos sensibles y reactivos que requieren un jinete con conocimientos 
                        básicos de equitación y cierta experiencia. Sin embargo, para jinetes intermedios o aquellos con una base 
                        sólida bajo supervisión profesional, pueden ser excelentes maestros debido a su inteligencia y disposición 
                        para el aprendizaje. Su sensibilidad los hace responder bien a ayudas sutiles, pero también significa que 
                        pueden reaccionar a señales involuntarias de un jinete sin experiencia.
                    </p>
                </div>
            </div>
        </div>
    `;
}

function createFooter() {
    return `
        <p>&copy; 2025 | Caballo Lusitano | Digital Void - Todos los derechos reservados.</p>
    `;
}

/////////////////////////////////////////////
// CAROUSEL CONTROLS ////////////////////////
/////////////////////////////////////////////

/////////////////////////////////////////////
// FAQ CONTROLS /////////////////////////////
/////////////////////////////////////////////

function toggleFaq(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const item = faqItems[index];
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    
    // Toggle la clase 'active'
    const isActive = item.classList.contains('active');
    
    if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
    } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}
