/**
 * @param {*} title 
 * @param {*} icon 
 * @param {*} items 
 * @returns 
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
 * @param {*} item 
 * @returns 
 */
function createTimelineItem( item ) {
    return `
    <div class="timeline-item">
      <h4>${item.date}</h4>
      <h3>${item.name}</h3>
      <p class="m0">${item.content}</p>
    </div>
  `;
}
