import { tripData, todos } from './data.js';
import { initTimeline, setActiveTimelineItem } from './components/timeline.js';
import { renderDayView } from './components/day-view.js';
import { initTodoList } from './components/todo-list.js';
import { initDrivingChart } from './components/driving-chart.js';

/**
 * Updates the current active day view and timeline item styling.
 * @param {number} dayId - The ID of the day to render.
 */
function showDay(dayId) {
    const data = tripData.find(d => d.day === dayId);
    if (data) {
        renderDayView(data);
        setActiveTimelineItem(dayId);
    }
}

/**
 * Handles URL hash changes and renders the corresponding day.
 */
function handleHashChange() {
    const hash = window.location.hash;
    const match = hash.match(/^#day-(\d+)$/);
    if (match) {
        const dayId = parseInt(match[1], 10);
        if (tripData.some(d => d.day === dayId)) {
            showDay(dayId);
            return;
        }
    }
    // Default to Day 1 if no valid hash is present
    showDay(1);
}

// Initialise the application modules once the DOM content is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    initTimeline(tripData, (dayId) => {
        window.location.hash = `day-${dayId}`;
    });
    initTodoList(todos);
    initDrivingChart(tripData);
    
    // Listen to hash changes for routing and back/forward navigation
    window.addEventListener('hashchange', handleHashChange);
    
    // Initialize day view based on initial page URL hash
    handleHashChange();
});
