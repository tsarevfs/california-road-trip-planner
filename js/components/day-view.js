/**
 * Renders the day view including header and itinerary sequence.
 * @param {Object} data - The day's data object from tripData.
 */
export function renderDayView(data) {
    if (!data) return;

    // Render day header
    const headerEl = document.getElementById('day-header');
    if (headerEl) {
        headerEl.innerHTML = `
            <div class="text-center md:text-left">
                <span class="text-stone-400 font-bold uppercase text-[10px] tracking-widest mb-1 block">${data.date}</span>
                <h3 class="text-3xl font-bold text-stone-900">${data.title}</h3>
            </div>
            <div class="bg-stone-50 px-5 py-2 rounded-xl border border-stone-100">
                <span class="text-xs font-bold text-stone-500 uppercase">Day ${data.day} Journey</span>
            </div>
        `;
    }

    // Render sequence
    const container = document.getElementById('sequence-container');
    if (!container) return;

    container.innerHTML = data.sequence.map((step, idx) => {
        let cardContent = '';
        
        if (step.type === 'drive') {
            const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(step.to)}&t=&z=11&ie=UTF8&iwloc=&output=embed`;
            const gLink = `https://www.google.com/maps/dir/${encodeURIComponent(step.from)}/${encodeURIComponent(step.to)}`;
            cardContent = `
                <div class="flex justify-between items-start mb-6">
                    <div class="flex-1 pr-6">
                        <span class="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase rounded-md mb-2 inline-block">🚗 Drive Segment</span>
                        <h4 class="font-bold text-2xl leading-tight">${step.label}</h4>
                        <p class="text-stone-500 mt-1">${step.from} ➔ ${step.to}</p>
                    </div>
                    <div class="text-right">
                        <div class="text-2xl font-bold text-stone-800">${step.dist} km</div>
                        <div class="px-2 py-1 bg-stone-900 text-white text-[10px] font-bold rounded-lg mt-2 inline-block">${step.time}</div>
                    </div>
                </div>
                <div class="map-wrapper mb-6"><iframe src="${mapUrl}"></iframe></div>
                <a href="${gLink}" target="_blank" class="block w-full text-center py-3 bg-stone-100 text-stone-700 text-sm font-bold rounded-xl hover:bg-stone-200 transition">View Full Route in Google Maps</a>
            `;
        } else if (step.type === 'options') {
            const hikeCards = step.hikes.map(h => `
                <div class="hike-tile bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                    <div class="hike-hero" style="background-image: url('${h.image}')"></div>
                    <div class="p-5 flex-1 flex flex-col">
                        <div class="flex justify-between items-start mb-2">
                            <h5 class="font-bold text-stone-800 text-sm leading-tight pr-3">${h.name}</h5>
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-500 uppercase tracking-tighter">${h.diff}</span>
                        </div>
                        <div class="text-[10px] text-stone-400 font-bold mb-3">📏 ${h.dist} • ⏱️ ${h.time}</div>
                        <p class="text-xs text-stone-600 mb-5 leading-relaxed flex-1">${h.summary}</p>
                        <a href="${h.link}" target="_blank" class="mt-auto block w-full text-center py-2.5 bg-stone-900 text-white text-[11px] font-bold rounded-lg hover:bg-stone-800 transition">Go to Komoot</a>
                    </div>
                </div>
            `).join('');

            cardContent = `
                <div class="mb-2">
                    <span class="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded-md mb-2 inline-block">⛰️ Explore Options</span>
                    <h4 class="font-bold text-2xl mb-1">${step.label}</h4>
                    <p class="text-stone-500 text-sm mb-8">${step.detail}</p>
                    <div class="flex gap-6 overflow-x-auto pb-6 custom-scrollbar">
                        ${hikeCards}
                    </div>
                </div>
            `;
        } else if (step.type === 'activity') {
            cardContent = `
                <div class="flex items-start gap-6">
                    <div class="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">${step.icon}</div>
                    <div class="flex-1">
                        <span class="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 block">Activity</span>
                        <h4 class="font-bold text-2xl mb-2">${step.label}</h4>
                        <p class="text-stone-600 leading-relaxed">${step.detail}</p>
                    </div>
                </div>
            `;
        } else if (step.type === 'stay') {
            cardContent = `
                <div class="flex items-start gap-6">
                    <div class="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">${step.icon}</div>
                    <div class="flex-1">
                        <span class="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1 block">Rest Point</span>
                        <h4 class="font-bold text-2xl mb-1">${step.label}</h4>
                        <p class="text-stone-500">${step.detail}</p>
                    </div>
                </div>
            `;
        } else if (step.type === 'travel') {
            cardContent = `
                <div class="flex justify-between items-start">
                    <div class="flex items-start gap-6">
                        <div class="w-14 h-14 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">${step.icon}</div>
                        <div class="flex-1">
                            <span class="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1 block">Global Transit</span>
                            <h4 class="font-bold text-2xl mb-2">${step.label}</h4>
                            <p class="text-stone-600">${step.detail}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-[11px] font-bold border border-indigo-100 rounded-lg">${step.time}</span>
                    </div>
                </div>
            `;
        }

        return `
            <div class="step-container relative fade-in" style="animation-delay: ${idx * 0.15}s">
                <div class="step-connector"></div>
                <div class="relative z-10 bg-white p-8 md:p-10 rounded-[2rem] border border-stone-100 shadow-sm">
                    ${cardContent}
                </div>
            </div>
        `;
    }).join('');
}
