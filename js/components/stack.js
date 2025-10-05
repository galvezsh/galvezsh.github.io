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
        ${stacks.map( node => createStackNode( node ) ).join("")}
      </div>
    `;
}

/**
 * @param {object} node 
 * @returns {string}
 */
function createStackNode( node ) {
    return `
      <div class="stack-node">
        <h3><i class="fa-solid fa-${node.icon}"></i>${node.title}</h3>
        <ul>
          ${node.items.map( item => createStackItem( item ) ).join("")}
        </ul>
      </div>
    `;
}

/**
 * @param {object} item 
 * @returns {string}
 */
function createStackItem( item ) {
    return `
      <li>
        <img class="stack-item-img" src="../resources/images/techstack/${item.img}">
        <div>
          <h4>${item.title}</h4>
          <span>${item.desc}</span>
        </div>
      </li>
    `;
}
