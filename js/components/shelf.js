/**
 * Creates a shelf with the specified title, icon, and knowledge.
 * 
 * @param {string} title - The title of the shelf.
 * @param {string} icon - The icon of the shelf.
 * @param {Array} knowledge - The knowledge array.
 * @returns {HTMLElement} - The shelf HTML element.
 */
export default function createShelf( title, icon, knowledge ) {
    const container = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.innerHTML = `<i class="fa-solid fa-${icon}"></i>${title}`;
    container.appendChild(h2);

    knowledge.forEach(item => {
        container.appendChild( createKnowledgeItem( item ) );
    });

    return container;
}

/**
 * Creates a knowledge item with the specified item.
 * 
 * @param {object} item - The item object.
 * @returns {HTMLElement} - The knowledge item HTML element.
 */
function createKnowledgeItem( item ) {
    const div = document.createElement("div");
    div.classList.add("container-small");

    const h3 = document.createElement("h3");
    h3.textContent = item.title;

    const p = document.createElement("p");
    p.classList.add("m0");
    p.textContent = item.content;

    const btn = document.createElement("button");
    btn.classList.add("primary", "small");
    btn.textContent = item.textButton;
    btn.onclick = item.onPress; // lambda mounted

    div.append(h3, p, btn);
    return div;
}

