/**
 * @param {object} strings
 * @param {object} items
 * @returns {string}
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
 * @param {string} icon
 * @param {string} href
 * @returns {string}
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
