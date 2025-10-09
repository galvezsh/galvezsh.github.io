/**
 * Creates a footer element with the specified strings and items.
 * 
 * @param {object} strings - The strings object that contains the language strings.
 * @param {object} items - The footer items object that contains the social links.
 * @returns {string} - The footer HTML in string format.
 */
export default function createFooter( strings, items ) {
    const currentYear = new Date().getFullYear();
    const socialLinks = Object.entries( items )
        .map(([ icon, href ]) => createFooterItem( icon, href )).join("");
        
    return `
        <span>&copy; ${strings.websiteName} - ${currentYear}</span>
        <ul>${socialLinks}</ul>
    `;
}

/**
 * Creates a footer item element with the specified icon and href.
 * 
 * @param {string} icon - The icon of the footer item. 
 * @param {string} href - The href of the footer item.
 * @returns {string} - The footer item HTML in string format.
 */
function createFooterItem( icon, href ) {
    return `
        <li>
            <a href="${href}" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-${icon}"></i>
            </a>
        </li>
    `;
}
