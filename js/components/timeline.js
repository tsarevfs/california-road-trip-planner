/**
 * Initializes and manages the timeline sidebar.
 * @param {Array} tripData - The trip details array.
 * @param {Function} onDaySelect - Callback when a day is clicked.
 */
export function initTimeline(tripData, onDaySelect) {
    const list = document.getElementById('timeline-list');
    if (!list) return;

    list.innerHTML = tripData.map(item => `
        <div class="timeline-item p-6 cursor-pointer border-l-4 border-transparent hover:bg-stone-50 transition border-b border-stone-100 group" data-day="${item.day}">
            <div class="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">${item.date}</div>
            <div class="font-bold text-stone-800 text-sm group-hover:text-stone-950">${item.title}</div>
        </div>
    `).join('');

    list.addEventListener('click', (e) => {
        const item = e.target.closest('.timeline-item');
        if (item) {
            const dayId = parseInt(item.dataset.day, 10);
            onDaySelect(dayId);
        }
    });
}

/**
 * Updates the active styling of the timeline items.
 * @param {number} dayId - The active day ID.
 */
export function setActiveTimelineItem(dayId) {
    document.querySelectorAll('.timeline-item').forEach((el) => {
        if (parseInt(el.dataset.day, 10) === dayId) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}
