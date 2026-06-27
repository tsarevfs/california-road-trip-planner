import { tripData, todos } from './data.js';
import { initTimeline, setActiveTimelineItem } from './components/timeline.js';
import { renderDayView } from './components/day-view.js';
import { initTodoList } from './components/todo-list.js';
import { initDrivingChart } from './components/driving-chart.js';

let currentLang = 'en';
let todoListHandle = null;

const dictionary = {
    en: {
        nav_itinerary: "Interactive Itinerary",
        nav_wedding: "Wedding Schedule",
        nav_logistics: "Hike & Drive Data",
        header_badge: "Expedition Hub • Mission Control",
        header_title: "California Road Trip Planner",
        header_desc: "Your interactive command center for the 2026 California journey. This dashboard synthesizes the wedding celebration in Tahoe with a high-alpine trekking tour through Yosemite and Sequoia, finishing with the iconic Pacific Coast Highway drive.",
        itinerary_title: "Interactive Journey Flow",
        itinerary_desc: "Select a day from the journey track on the left to explore the vertical sequence of events. Each day contains specific transit times, map previews, and multiple hiking options with verified Komoot navigation links.",
        timeline_title: "The Timeline",
        timeline_date_range: "Aug 19 – Aug 31, 2026",
        wedding_title: "Olga & Pavel's Wedding",
        wedding_desc: "Three days of celebration on the shores of Lake Tahoe. This official schedule ensures you're in the right place for every toast and sunset cruise.",
        wedding_day1_date: "Thu Aug 20",
        wedding_day1_title: "Paradise Cruise",
        wedding_day1_desc: "5:30 PM. Lake Tahoe Paradise Boat. Drinks & appetizers on the water to kick off the festivities.",
        wedding_day2_date: "Fri Aug 21",
        wedding_day2_title: "The Main Event",
        wedding_day2_desc: "3:30 PM. The Landing Tahoe. Ceremony followed by cocktails and a celebratory dinner by the lake.",
        wedding_day3_date: "Sat Aug 22",
        wedding_day3_title: "Farewell Brunch",
        wedding_day3_desc: "11:00 AM. Toulouse Restaurant. A final gathering for the group before we head south toward Yosemite.",
        logistics_title: "Logistics & Analytics",
        logistics_desc: "Track your pre-trip mission tasks and visualize the driving load. Note that the Big Sur coastal leg (Day 11) is the longest driving segment of the trip.",
        checklist_title: "Planning Checklist",
        driving_intensity_title: "Driving Intensity",
        driving_intensity_subtitle: "Total Daily Kilometers",
        footer_text: "© 2026 California Trip Command • Munich - Reno - San Francisco • Developed for Olga & Pavel's Wedding Flow"
    },
    ru: {
        nav_itinerary: "Интерактивный маршрут",
        nav_wedding: "Свадебное расписание",
        nav_logistics: "Данные походов и поездок",
        header_badge: "Центр экспедиции • Управление полетами",
        header_title: "Планировщик поездки по Калифорнии",
        header_desc: "Ваш интерактивный командный центр для путешествия по Калифорнии в 2026 году. Этот дашборд объединяет празднование свадьбы на озере Тахо с высокогорным треккингом через Йосемити и Секвойю, завершаясь культовой поездкой по Тихоокеанскому шоссе.",
        itinerary_title: "Интерактивная карта путешествия",
        itinerary_desc: "Выберите день на шкале слева, чтобы изучить последовательность событий. Каждый день содержит сведения о времени в пути, карты и варианты пеших маршрутов с проверенными ссылками на Komoot.",
        timeline_title: "Хронология",
        timeline_date_range: "19 авг – 31 авг, 2026",
        wedding_title: "Свадьба Ольги и Павла",
        wedding_desc: "Три дня празднования на берегах озера Тахо. Официальная программа поможет оказаться в нужном месте для каждого тоста и круиза на закате.",
        wedding_day1_date: "Чт, 20 авг",
        wedding_day1_title: "Круиз «Парадайс»",
        wedding_day1_desc: "17:30. Яхта Lake Tahoe Paradise. Напитки и закуски на воде в честь начала праздника.",
        wedding_day2_date: "Пт, 21 авг",
        wedding_day2_title: "Главное событие",
        wedding_day2_desc: "15:30. Отель The Landing Tahoe. Церемония, после которой последуют коктейли и праздничный ужин у озера.",
        wedding_day3_date: "Сб, 22 авг",
        wedding_day3_title: "Прощальный бранч",
        wedding_day3_desc: "11:00. Ресторан Toulouse. Финальная встреча группы перед отправлением на юг в сторону Йосемити.",
        logistics_title: "Логистика и аналитика",
        logistics_desc: "Отслеживайте задачи по подготовке к поездке и визуализируйте нагрузку за рулем. Обратите внимание, что участок побережья Биг-Сюр (День 11) — самый длинный отрезок пути.",
        checklist_title: "Список дел по подготовке",
        driving_intensity_title: "Интенсивность вождения",
        driving_intensity_subtitle: "Всего километров в день",
        footer_text: "© 2026 CA-Trip Command • Мюнхен - Рено - Сан-Франциско • Разработано для свадьбы Ольги и Павла"
    }
};

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
        if (tripData[currentLang].some(d => d.day === dayId)) {
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
    initTimeline(tripData[currentLang], (dayId) => {
        window.location.hash = `day-${dayId}`;
    });

    // 4. Update the active day details sequence
    const activeDayId = getActiveDayId();
    const dayData = tripData[currentLang].find(d => d.day === activeDayId);
    if (dayData) {
        renderDayView(dayData, currentLang);
        setActiveTimelineItem(activeDayId);
    }

    // 5. Update checklist language state
    if (todoListHandle) {
        todoListHandle.updateLanguage(currentLang);
    }

    // 6. Destroy and recreate the driving intensity chart
    initDrivingChart(tripData[currentLang]);
}

/**
 * Handles URL hash changes and renders the corresponding day.
 */
function handleHashChange() {
    const activeDayId = getActiveDayId();
    const dayData = tripData[currentLang].find(d => d.day === activeDayId);
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
