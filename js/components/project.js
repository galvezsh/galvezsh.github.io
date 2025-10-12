/**
 * Creates a projects section with the specified title, icon, and projects.
 * 
 * @param {string} title - The title of the projects section.
 * @param {string} icon - The icon of the projects section.
 * @param {Array} projects - The projects array.
 * @returns {string} - The projects HTML in string format.
 */
export default function createProjects( title, icon, projects ) {
    return `
        <h2><i class="fa-solid fa-${icon}"></i>${title}</h2>
        ${projects.map( project => createProjectItem( project ) ).join("")}
    `;
}

/**
 * Creates a project item with the specified project.
 * 
 * @param {object} project - The project object.
 * @returns {string} - The project item HTML in string format.
 */
function createProjectItem( project ) {
    return `
        <div class="container-medium project">
            <div class="header">
                <h3>${project.name}</h3>
                <h4>${project.date}</h4>
            </div>
            <p class="m0">${project.content}</p>

            <div class="list-links stack">
                ${project.techs.map( tech => `<span class="list-item"><i class="${tech.icon}"></i> ${tech.label}</span>` ).join("")}
            </div>

            <div class="images">
                ${project.images.map( img => `<img class="${img.class}" src="../../resources/images/${img.src}">` ).join("")}
            </div>

            <div class="list-links">
                ${project.links.map( link => `<a href="${link.href}" class="list-item" target="_blank"><i class="fa-brands fa-${link.icon}"></i>${link.text}</a>` ).join("")}
            </div>
        </div>
    `;
}