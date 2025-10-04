/**
 * @param {object} strings 
 * @param {string} icon 
 * @param {Array} stacks 
 * @returns {string}
 */
export default function createStack( title, icon, stacks ) {
    return `
      <h2><i class="fa-solid fa-${icon}"></i>${title}</h2>
      <div class="tech-stack">
        ${stacks.map( node => createStackNode( node.title, node.icon, node.items ) ).join("")}
      </div>
    `;
}

/**
 * @param {string} title 
 * @param {string} icon 
 * @param {Array} items 
 * @returns {string}
 */
function createStackNode( title, icon, items ) {
    return `
      <div class="stack-node">
        <h3><i class="fa-solid fa-${icon}"></i>${title}</h3>
        <ul>
          ${items.map( item => createStackItem( item.img, item.title, item.desc ) ).join("")}
        </ul>
      </div>
    `;
}

/**
 * @param {string} img 
 * @param {string} title 
 * @param {string} desc 
 * @returns {string}
 */
function createStackItem( img, title, desc ) {
    return `
      <li>
        <img class="stack-item-img" src="../resources/images/techstack/${img}">
        <div>
          <h4>${title}</h4>
          <span>${desc}</span>
        </div>
      </li>
    `;
}
