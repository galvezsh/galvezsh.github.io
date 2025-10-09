/**
 * Creates a navbar element with the specified strings, items, item selected, and light mode.
 * 
 * @param {object} strings - The strings object that contains the language strings.
 * @param {object} items - The navbar items object that contains the navigation links.
 * @param {string} itemSelected - The selected navbar item.
 * @param {boolean} lightMode - The light mode.
 * @returns {string} - The navbar HTML in string format.
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
 * @param {string} text - The text of the nav item.
 * @param {string} href - The href of the nav item.
 * @param {boolean} isActive - Whether the nav item is active.
 * @returns {string} - The nav item HTML in string format.
 */
function createNavItem( text, href, isActive = false ) {
    return `
        <li><a href="${href}" class="${isActive ? "active" : ""}">${text}</a></li>
    `;
}
