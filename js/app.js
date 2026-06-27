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

// Initialise the application modules once the DOM content is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    initTimeline(tripData, showDay);
    initTodoList(todos);
    initDrivingChart(tripData);
    
    // Display the first day by default
    showDay(1);
});
