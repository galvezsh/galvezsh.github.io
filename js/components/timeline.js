/**
 * Creates a timeline with the specified title, icon, and items.
 * 
 * @param {string} title - The title of the timeline.
 * @param {string} icon - The icon of the timeline.
 * @param {Array} items - The items array.
 * @returns {string} - The timeline HTML in string format.
 */
export default function createTimeline( title, icon, items ) {
    return `
    <h2><i class="fa-solid fa-${icon}"></i>${title}</h2>
    <div class="timeline">
      ${items.map( item => createTimelineItem( item ) ).join("")}
    </div>
  `;
}

/**
 * Creates a timeline item with the specified item.
 * 
 * @param {object} item - The item object.
 * @param {string} link - The link of the item (optional).
 * @param {string} linkText - The link text of the item (optional).
 * @returns {string} - The timeline item HTML in string format.
 */
function createTimelineItem( item ) {
  if ( item.link != null ) {
    return `
    <div class="timeline-item">
      <h4>${item.date}</h4>
      <h3>${item.title}</h3>
      <p class="m0">${item.content}</p>
      <div class="list-links">
        <a class="list-item" href="${item.link}" target="_blank"><i class="fa-solid fa-link"></i>${item.linkText}</a>
      </div>
    </div>
    `;
  } else {
    return `
    <div class="timeline-item">
      <h4>${item.date}</h4>
      <h3>${item.title}</h3>
      <p class="m0">${item.content}</p>
    </div>
    `;
  }
}
