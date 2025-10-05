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
 * @param {*} link (optional)
 * @param {*} linkText (optional)
 * @returns 
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
