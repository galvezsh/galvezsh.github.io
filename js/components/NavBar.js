/**
 * @param {object} strings
 * @param {object} items
 * @param {string} itemSelected
 * @param {boolean} lightMode
 * @returns {string}
 */
export default function NavBar( strings, items, itemSelected, lightMode ) {
    const navLinks = Object.entries( items )
        .map(([ text, href ]) => createNavItem( text, href, text === strings[itemSelected] )).join("");

    return `
        <a id="theme-toggle">
            ${lightMode ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>'}
        </a>
        <ul>
            ${navLinks}
        </ul>
        <a id="locale-toggle">
            <i class="fa-solid fa-language"></i>
        </a>
    `;
}

/**
 * @param {string} text
 * @param {string} href
 * @param {boolean} isActive
 * @returns {string}
 */
function createNavItem( text, href, isActive = false ) {
    return `
        <li><a href="${href}" class="${isActive ? "active" : ""}">${text}</a></li>
    `;
}
