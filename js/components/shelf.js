/**
 * @param {string} title
 * @param {string} icon
 * @param {Array} knowledge
 * @returns {HTMLElement}
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
 * @param {object} item
 * @returns {HTMLElement}
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

