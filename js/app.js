import { tripData, todos } from './data.js';
import { t, dictionary } from './i18n.js';
import { initTimeline, setActiveTimelineItem } from './components/timeline.js';
import { renderDayView } from './components/day-view.js';
import { initTodoList } from './components/todo-list.js';
import { initDrivingChart } from './components/driving-chart.js';

let currentLang = 'en';
let todoListHandle = null;

/**
 * Returns the currently active day ID parsed from the URL hash.
 * Defaults to Day 1.
 * @returns {number}
 */
function getActiveDayId() {
    const hash = window.location.hash;
    const match = hash.match(/^#day-(\d+)$/);
    if (match) {
        const dayId = parseInt(match[1], 10);
        if (tripData.some(d => d.day === dayId)) {
            return dayId;
        }
    }
    return 1;
}

/**
 * Updates switcher buttons active state class.
 */
function updateSwitcherButtons() {
    const btnEn = document.getElementById('lang-en');
    const btnRu = document.getElementById('lang-ru');
    if (!btnEn || !btnRu) return;

    if (currentLang === 'en') {
        btnEn.className = "px-2.5 py-1 rounded-lg border bg-white text-stone-800 shadow-sm border-stone-200/50 focus:outline-none";
        btnRu.className = "px-2.5 py-1 rounded-lg border text-stone-400 hover:text-stone-600 border-transparent focus:outline-none";
    } else {
        btnRu.className = "px-2.5 py-1 rounded-lg border bg-white text-stone-800 shadow-sm border-stone-200/50 focus:outline-none";
        btnEn.className = "px-2.5 py-1 rounded-lg border text-stone-400 hover:text-stone-600 border-transparent focus:outline-none";
    }
}

/**
 * Propagates the active language to the entire UI.
 * @param {string} lang 
 */
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // 1. Update static translatable text elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[lang] && dictionary[lang][key]) {
            el.innerHTML = dictionary[lang][key];
        }
    });

    // 2. Toggle switcher state
    updateSwitcherButtons();

    // 3. Redraw sidebar timeline
    initTimeline(tripData, currentLang, (dayId) => {
        window.location.hash = `day-${dayId}`;
    });

    // 4. Update the active day details sequence
    const activeDayId = getActiveDayId();
    const dayData = tripData.find(d => d.day === activeDayId);
    if (dayData) {
        renderDayView(dayData, currentLang);
        setActiveTimelineItem(activeDayId);
    }

    // 5. Update checklist language state
    if (todoListHandle) {
        todoListHandle.updateLanguage(currentLang);
    }

    // 6. Destroy and recreate the driving intensity chart
    initDrivingChart(tripData, currentLang);
}

/**
 * Handles URL hash changes and renders the corresponding day.
 */
function handleHashChange() {
    const activeDayId = getActiveDayId();
    const dayData = tripData.find(d => d.day === activeDayId);
    if (dayData) {
        renderDayView(dayData, currentLang);
        setActiveTimelineItem(activeDayId);
    }
}

// Initialise the application modules once the DOM content is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    currentLang = localStorage.getItem('lang') || 'en';
    if (currentLang !== 'en' && currentLang !== 'ru') {
        currentLang = 'en';
    }

    // Initialize todo checklist
    todoListHandle = initTodoList(todos, currentLang);

    // Bind event handlers to language switcher
    const btnEn = document.getElementById('lang-en');
    const btnRu = document.getElementById('lang-ru');
    if (btnEn) btnEn.addEventListener('click', () => { if (currentLang !== 'en') updateLanguage('en'); });
    if (btnRu) btnRu.addEventListener('click', () => { if (currentLang !== 'ru') updateLanguage('ru'); });

    // Propagate the initial language setup
    updateLanguage(currentLang);
    
    // Listen to hash changes for routing and back/forward navigation
    window.addEventListener('hashchange', handleHashChange);
});
