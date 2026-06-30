/**
 * Internationalization (i18n) utilities and static UI translation dictionary.
 *
 * The `t()` helper resolves translatable values: if the value is an {en, ru}
 * object it returns the string for the requested language; otherwise it returns
 * the value as-is (for shared / non-translated fields).
 */

/**
 * Resolves a translatable value.
 * @param {string|Object} value - A plain string or an {en, ru} translation object.
 * @param {string} lang - The active language code ('en' or 'ru').
 * @returns {string} The resolved string.
 */
export function t(value, lang) {
    if (value && typeof value === 'object' && !Array.isArray(value) && (value.en !== undefined || value.ru !== undefined)) {
        return value[lang] || value.en || '';
    }
    return value ?? '';
}

/**
 * Static UI translation dictionary for elements marked with data-i18n attributes.
 */
export const dictionary = {
    en: {
        nav_itinerary: "Interactive Itinerary",
        nav_logistics: "Hike & Drive Data",
        header_badge: "Expedition Hub • Mission Control",
        header_title: "California Road Trip Planner",
        header_desc: "Your interactive command center for the 2026 California journey. This dashboard synthesizes the wedding celebration in Tahoe with a high-alpine trekking tour through Yosemite and Sequoia, finishing with the iconic Pacific Coast Highway drive.",
        itinerary_title: "Interactive Journey Flow",
        itinerary_desc: "Select a day from the journey track on the left to explore the vertical sequence of events. Each day contains specific transit times, map previews, and multiple hiking options with verified Komoot navigation links.",
        timeline_title: "The Timeline",
        timeline_date_range: "Aug 19 – Aug 31, 2026",
        logistics_title: "Logistics & Analytics",
        logistics_desc: "Track your pre-trip mission tasks and visualize the driving load. Note that the Big Sur coastal leg (Day 11) is the longest driving segment of the trip.",
        checklist_title: "Planning Checklist",
        driving_intensity_title: "Driving Intensity & Analytics",
        driving_intensity_subtitle: "Total Daily Kilometers",
        stats_total_dist: "Total Distance",
        stats_total_time: "Total Time",
        stats_fuel_estimate: "Estimated Fuel",
        footer_text: "© 2026 California Trip Command • Munich - Reno - San Francisco • Developed for Olga & Pavel's Wedding Flow"
    },
    ru: {
        nav_itinerary: "Интерактивный маршрут",
        nav_logistics: "Данные походов и поездок",
        header_badge: "Центр экспедиции • Управление полетами",
        header_title: "Планировщик поездки по Калифорнии",
        header_desc: "Ваш интерактивный командный центр для путешествия по Калифорнии в 2026 году. Этот дашборд объединяет празднование свадьбы на озере Тахо с высокогорным треккингом через Йосемити и Секвойю, завершаясь культовой поездкой по Тихоокеанскому шоссе.",
        itinerary_title: "Интерактивная карта путешествия",
        itinerary_desc: "Выберите день на шкале слева, чтобы изучить последовательность событий. Каждый день содержит сведения о времени в пути, карты и варианты пеших маршрутов с проверенными ссылками на Komoot.",
        timeline_title: "Хронология",
        timeline_date_range: "19 авг – 31 авг, 2026",
        logistics_title: "Логистика и аналитика",
        logistics_desc: "Отслеживайте задачи по подготовке к поездке и визуализируйте нагрузку за рулем. Обратите внимание, что участок побережья Биг-Сюр (День 11) — самый длинный отрезок пути.",
        checklist_title: "Список дел по подготовке",
        driving_intensity_title: "Интенсивность и аналитика вождения",
        driving_intensity_subtitle: "Всего километров в день",
        stats_total_dist: "Общее расстояние",
        stats_total_time: "Общее время",
        stats_fuel_estimate: "Оценка топлива",
        footer_text: "© 2026 CA-Trip Command • Мюнхен - Рено - Сан-Франциско • Разработано для свадьбы Ольги и Павла"
    }
};
