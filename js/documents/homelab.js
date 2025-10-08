'use strict';

import Html from "../engine.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const HTML = new Html( "docsHomelab" );
const list = [
    {
        link: "#introduction",
        text: HTML.strings.docsHomelabIndex_1
    },
    {
        link: "#requirements",
        text: HTML.strings.docsHomelabIndex_2
    },
    {
        link: "#recommendations",
        text: HTML.strings.docsHomelabIndex_3
    },
    {
        link: "#whyintel",
        text: HTML.strings.docsHomelabIndex_4
    },
    {
        link: "#whatyouneedtoknow",
        text: HTML.strings.docsHomelabIndex_5,
        list: [
            {
                link: "#mechanicaldrives",
                text: HTML.strings.docsHomelabIndex_5_1
            },
            {
                link: "#soliddrives",
                text: HTML.strings.docsHomelabIndex_5_2
            },
            {
                link: "#adapters",
                text: HTML.strings.docsHomelabIndex_5_3
            },
            {
                link: "#motherboards",
                text: HTML.strings.docsHomelabIndex_5_4
            }
        ]
    },
    {
        link: "#hardware",
        text: HTML.strings.docsHomelabIndex_6,
        list: [
            {
                link: "#motherboard",
                text: HTML.strings.docsHomelabIndex_6_1
            },
            {
                link: "#cpu",
                text: HTML.strings.docsHomelabIndex_6_2
            },
            {
                link: "#ram",
                text: HTML.strings.docsHomelabIndex_6_3
            },
            {
                link: "#powersupply",
                text: HTML.strings.docsHomelabIndex_6_4
            },
            {
                link: "#storage",
                text: HTML.strings.docsHomelabIndex_6_5
            },
            {
                link: "#case",
                text: HTML.strings.docsHomelabIndex_6_6
            }
        ]
    },
    {
        link: "#software",
        text: HTML.strings.docsHomelabIndex_7,
        list: [
            {
                link: "#whyomv",
                text: HTML.strings.docsHomelabIndex_7_1
            },
            {
                link: "#omvsetup",
                text: HTML.strings.docsHomelabIndex_7_2
            },
            {
                link: "#plugins",
                text: HTML.strings.docsHomelabIndex_7_3
            },
            {
                link: "#zfs",
                text: HTML.strings.docsHomelabIndex_7_4
            },
            {
                link: "#acl&users",
                text: HTML.strings.docsHomelabIndex_7_5
            },
            {
                link: "#docker",
                text: HTML.strings.docsHomelabIndex_7_6
            },
            {
                link: "#kvm",
                text: HTML.strings.docsHomelabIndex_7_7
            }
        ]
    },
    {
        link: "#conclusion",
        text: HTML.strings.docsHomelabIndex_8
    }
];

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

document.querySelector( "main h2" ).innerHTML = HTML.strings.docsHomelabTitle;
document.querySelector( "aside" ).innerHTML = createIndex( HTML.strings.docsIndex, list );

document.getElementById( "introduction" ).innerHTML = createIntroduction( HTML.strings );
document.getElementById( "requirements" ).innerHTML = createRequirements( HTML.strings );
document.getElementById( "recommendations" ).innerHTML = createRecommendations( HTML.strings );
document.getElementById( "whyintel" ).innerHTML = createWhyIntel( HTML.strings );
document.getElementById( "whatyouneedtoknow" ).innerHTML = createWhatYouNeedToKnow( HTML.strings );
document.getElementById( "hardware" ).innerHTML = createHardware( HTML.strings );
document.getElementById( "software" ).innerHTML = createSoftware( HTML.strings );
document.getElementById( "conclusion" ).innerHTML = createConclusion( HTML.strings );

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////

function createIndex( index, list ) {
    return `
        <h3>${ index }</h3>
        ${createList( list )}
    `;
}

function createList( items ) {
    return `
        <ol>
            ${items.map( ( item ) => `
                <li>
                    <a href="${item.link}">${item.text}</a>
                    ${item.list ? createList( item.list ) : ""}
                </li>
            `).join("")}
        </ol>
    `;
}

function createIntroduction( strings ) {
    return `
        <h3>${strings.docsHomelabIndex_1}</h3>
        <div>${strings.docsHomelabContent_1}</div>
    `;
}

function createRequirements( strings ) {
    return `
        <h3>${strings.docsHomelabSubtitle_2}</h3>

        <div>${strings.docsHomelabContent_2}</div>
        <img class="full" src="https://9to5toys.com/wp-content/uploads/sites/5/2019/04/Qnap-2-Bay-NAS-TS-251.jpg?quality=82&strip=all" alt="Imagen de un servidor QNAP">
        <div>${strings.docsHomelabContent_3}</div>
    `;
}

function createRecommendations( strings ) {
    return `
        <h3>${strings.docsHomelabSubtitle_3}</h3>

        <div>${strings.docsHomelabContent_4}</div>
    `;
}

function createWhyIntel( strings ) {
    return `
        <h3>${strings.docsHomelabSubtitle_4}</h3>

        <div>${strings.docsHomelabContent_5}</div>
    `;
}

function createWhatYouNeedToKnow( strings ) {
    return `
        <h3>${strings.docsHomelabSubtitle_5}</h3>

        <div>${strings.docsHomelabContent_6}</div>
        <div class="container-medium"></div>

        <section class="container-medium" id="mechanicaldrives">
            <h4>${strings.docsHomelabSubtitle_5_1}</h4>
    
            <div>${strings.docsHomelabContent_7}</div>
            <img class="full" src="https://www.buffalotech.com/images/uploads/Traditional-HD-vs-SMR-HD.jpg" alt="Imagen comparativa entre CMR y SMR">
            <div>${strings.docsHomelabContent_8}</div>
        </section>

        <section class="container-medium" id="soliddrives">
            <h4>${strings.docsHomelabSubtitle_5_2}</h4>
    
            <div>${strings.docsHomelabContent_9}</div>
            <div class="yt-video">
                <iframe
                    src="https://www.youtube.com/embed/4NAxa6s4LdA" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="picture-in-picture;" 
                    allowfullscreen>
                </iframe>     
            </div>
            <div class="yt-video">
                <iframe
                    src="https://www.youtube.com/embed/47y121lly9k" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="picture-in-picture;" 
                    allowfullscreen>
                </iframe>     
            </div>
        </section>

        <section class="container-medium" id="adapters">
            <h4>${strings.docsHomelabSubtitle_5_3}</h4>
    
            <div>${strings.docsHomelabContent_10}</div>
            <img class="full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsc01.alicdn.com%2Fkf%2FHc62641b2fbc94737b3c6355f35305aadJ%2F230060621%2FHc62641b2fbc94737b3c6355f35305aadJ.jpg&f=1&nofb=1&ipt=5e8c5332da0868f5e6cbed2f5aa0b6a567967799246b825aea4e96990de85f1d">
            <div>${strings.docsHomelabContent_11}</div>
        </section>

        <section class="container-medium" id="motherboards">
            <h4>${strings.docsHomelabSubtitle_5_4}</h4>
    
            <div>${strings.docsHomelabContent_12}</div>
            <img class="full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gamersnexus.net%2Fimages%2Fmedia%2F2020%2Famd-chipsets-b550%2Famd-b550-chipset-block-diagram.png&f=1&nofb=1&ipt=cccba050ab3ef6473dad6f1a35922edf36643d82d05dfc4455ec0a70041c7832">
            <img class="full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.build-gaming-computers.com%2Fimages%2Fx570-chipset-vs-b550.jpg&f=1&nofb=1&ipt=7aa023998e17483e0bca0f42428bb41b43b034b4524a253df36623b03d917614">
            <div>${strings.docsHomelabContent_13}</div>
        </section>
    `;
}

function createHardware( strings ) {
    return `
        <h3>${strings.docsHomelabSubtitle_6}</h3>

        <div>${strings.docsHomelabContent_14}</div>
        <div class="container-medium"></div>

        <section class="container-medium" id="motherboard">
            <h4>${strings.docsHomelabSubtitle_6_1}</h4>
    
            <div>${strings.docsHomelabContent_15}</div>
            <img class="full" src="../../resources/images/homelab/motherboard_80.png" alt="Imagen de la placa base">
        </section>

        <section class="container-medium" id="cpu">
            <h4>${strings.docsHomelabSubtitle_6_2}</h4>
    
            <div>${strings.docsHomelabContent_16}</div>
            <img class="full" src="../../resources/images/homelab/cpu_90.png" alt="Imagen del procesador">
            <div>${strings.docsHomelabContent_17}</div>
            <img class="full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pcmag.com%2Fimagery%2Farticles%2F00pFcBd5Oh7XFo7rV30jPxY-7.jpg&f=1&nofb=1&ipt=ed1670f70c1ba2d2da3244eda49945485ae6ca908a07dbd79d6f36b673d148b9">
            <div>${strings.docsHomelabContent_18}</div>
            <img class="full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kitguru.net%2Fwp-content%2Fuploads%2F2018%2F01%2FDark-Rock-Pro-4-Side-2.jpg&f=1&nofb=1&ipt=6e0bb1d1045622d29863d870b613cda58e9491be000752715d2d8436da0affbf">
        </section>

        <section class="container-medium" id="ram">
            <h4>${strings.docsHomelabSubtitle_6_3}</h4>

            <div>${strings.docsHomelabContent_19}</div>
        </section>

        <section class="container-medium" id="powersupply">
            <h4>${strings.docsHomelabSubtitle_6_4}</h4>

            <div>${strings.docsHomelabContent_20}</div>
        </section>

        <section class="container-medium" id="storage">
            <h4>${strings.docsHomelabSubtitle_6_5}</h4>

            <div>${strings.docsHomelabContent_21}</div>
        </section>

        <section class="container-medium" id="case">
            <h4>${strings.docsHomelabSubtitle_6_6}</h4>

            <div>${strings.docsHomelabContent_22}</div>
        </section>
    `;
}

function createSoftware( strings ) {
    return `
        <h3>${strings.docsHomelabSubtitle_7}</h3>

        <div>${strings.docsHomelabContent_23}</div>
        <div class="container-medium"></div>

        <section class="container-medium" id="whyomv">
            <h4>${strings.docsHomelabSubtitle_7_1}</h4>
    
            <div>${strings.docsHomelabContent_24}</div>
        </section>

        <section class="container-medium" id="omvsetup">
            <h4>${strings.docsHomelabSubtitle_7_2}</h4>
    
            <div>${strings.docsHomelabContent_25}</div>
        </section>

        <section class="container-medium" id="plugins">
            <h4>${strings.docsHomelabSubtitle_7_3}</h4>
    
            <div>${strings.docsHomelabContent_26}</div>
            <img class="full" src="../../resources/images/homelab/omv_1.png" alt="Imagen de los plugins de OMV">
            <div>${strings.docsHomelabContent_27}</div>
            <img class="full" src="../../resources/images/homelab/omv_2.png" alt="Imagen de los plugins de OMV">
            <div>${strings.docsHomelabContent_28}</div>
        </section>

        <section class="container-medium" id="zfs">
            <h4>${strings.docsHomelabSubtitle_7_4}</h4>
    
            <div>${strings.docsHomelabContent_29}</div>
            <img class="full" src="../../resources/images/homelab/omv_3.png" alt="Imagen explicativa de ZFS">
            <div>${strings.docsHomelabContent_30}</div>
            <img class="full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthf.bing.com%2Fth%2Fid%2FOIP.XY_tYxomjcMXdcAGvyQRZwHaDd%3Fcb%3Dthfc1%26pid%3DApi&f=1&ipt=12fc2fb3c04a29f0dd0bc9ab6f727fea870be94dcaf91316a778d434683a1087&ipo=images" alt="Imagen explicativa de ZFS">
            <img class="full" src="../../resources/images/homelab/omv_4.png" alt="Imagen explicativa de ZFS">
            <div>${strings.docsHomelabContent_31}</div>
        </section>

        <section class="container-medium" id="acl&users">
            <h4>${strings.docsHomelabSubtitle_7_5}</h4>

            <div>${strings.docsHomelabContent_32}</div>
            <img class="full" src="../../resources/images/homelab/omv_5.png" alt="Imagen explicativa de ACL y usuarios">
            <div>${strings.docsHomelabContent_33}</div>
        </section>

        <section class="container-medium" id="docker">
            <h4>${strings.docsHomelabSubtitle_7_6}</h4>
    
            <div>${strings.docsHomelabContent_34}</div>
            <img class="full" src="../../resources/images/homelab/omv_6.png" alt="Imagen explicativa de Docker">
            <div>${strings.docsHomelabContent_35}</div>
            <img class="full" src="../../resources/images/homelab/omv_7.png" alt="Imagen explicativa de KVM">
            <div>${strings.docsHomelabContent_36}</div>
        </section>
        <section class="container-medium" id="kvm">
            <h4>${strings.docsHomelabSubtitle_7_7}</h4>
    
            <div>${strings.docsHomelabContent_37}</div>
            <img class="full" src="../../resources/images/homelab/omv_8.png" alt="Imagen explicativa de KVM">
            <div>${strings.docsHomelabContent_38}</div>
            <img class="full" src="../../resources/images/homelab/omv_9.png" alt="Imagen explicativa de KVM">
            <div>${strings.docsHomelabContent_39}</div>
            <img class="full" src="../../resources/images/homelab/omv_10.png" alt="Imagen explicativa de KVM">
            <img class="full" src="../../resources/images/homelab/omv_11.png" alt="Imagen explicativa de KVM">
            <div>${strings.docsHomelabContent_40}</div>
            <img class="full" src="../../resources/images/homelab/omv_12.png" alt="Imagen explicativa de KVM">
            <img class="full" src="../../resources/images/homelab/omv_13.png" alt="Imagen explicativa de KVM">
            <img class="full" src="../../resources/images/homelab/omv_14.png" alt="Imagen explicativa de KVM">
            <div>${strings.docsHomelabContent_41}</div>
            <img class="full" src="../../resources/images/homelab/omv_15.png" alt="Imagen explicativa de KVM">
            <img class="full" src="../../resources/images/homelab/omv_16.png" alt="Imagen explicativa de KVM">
            <div>${strings.docsHomelabContent_42}</div>
        </section>
    `;
}

function createConclusion( strings ) {
    return `
        <h3>${strings.docsHomelabSubtitle_8}</h3>

        <div>${strings.docsHomelabContent_43}</div>
    `;
}