/**
 * @param {string} title
 * @param {string} icon
 * @param {Array} projects
 * @returns {string}
 */
export default function createProjects( title, icon, projects ) {
    return `
        <h2><i class="fa-solid fa-${icon}"></i>${title}</h2>
        ${projects.map( project => createProjectItem( project.name, project.content, project.techs, project.images, project.links ) ).join("")}
    `;
}

/**
 * @param {string} name
 * @param {string} content
 * @param {Array} techs - [{icon, label}]
 * @param {Array} images - [{src, class}]
 * @param {Array} links - [{href, text, icon}]
 * @returns {string}
 */
function createProjectItem( name, content, techs, images, links ) {
    return `
        <div class="container-medium project">
            <h3>${name}</h3>
            <p class="m0">${content}</p>

            <div class="list-links">
                ${techs.map( tech => `<span class="list-item"><i class="${tech.icon}"></i> ${tech.label}</span>` ).join("")}
            </div>

            <div class="images">
                ${images.map( img => `<img class="${img.class}" src="../../resources/images/${img.src}">` ).join("")}
            </div>

            <div class="list-links">
                ${links.map( link => `<a href="${link.href}" class="list-item" target="_blank"><i class="fa-brands fa-${link.icon}"></i>${link.text}</a>` ).join("")}
            </div>
        </div>
    `;
}