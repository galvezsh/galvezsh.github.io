/**
 * Creates a stack with the specified title, icon, and stacks.
 * 
 * @param {string} title - The title of the stack.
 * @param {string} icon - The icon of the stack.
 * @param {Array} stacks - The stacks array.
 * @returns {string} - The stack HTML in string format.
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
 * Creates a stack node with the specified node.
 * 
 * @param {object} node - The node object.
 * @returns {string} - The stack node HTML in string format.
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
 * Creates a stack item with the specified item.
 * 
 * @param {object} item - The item object.
 * @returns {string} - The stack item HTML in string format.
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
